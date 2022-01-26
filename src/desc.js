import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getJob } from "./api";

export default function Desc(props) {
  const [job, setJobs] = useState({ jobskills: "" });
  const [loading, setLoading] = useState(true);
  const [firstRun] = useState(true);
  const jobid = props.match.params.jobid || "0";
  useEffect(() => {
    if (firstRun) {
      getJobDetails();
    }
  }, [firstRun]);
  const getJobDetails = async () => {
    const res = await getJob(jobid);
    setLoading(false);
    if (res.status === 200) {
      setJobs(res.data.text);
    } else {
      toast.warning(res?.data?.text || "Unknown Error Occured");
    }
  };
  return (
    <>
      <section className="hero-wrap js-fullheight fullscreen">
        <Link to="/">
          <i
            className="fa fa-angle-double-left"
            style={{
              fontSize: "30px",
              color: "#ffffff",
              marginLeft: "30px",
              marginTop: "20px",
            }}
          ></i>
        </Link>
        <div className="container">
          <div className="row description js-fullheight align-items-center center-text justify-content-center">
            <div className="col-md-8 text-center">
              <div className="text">
                {loading ? (
                  <img src="/loading.svg" alt="Loading" />
                ) : (
                  <>
                    <h1>{job?.jobtitle}</h1>
                    <h4 className="mb-5 remotedesc">{job?.company}</h4>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {!loading && (
        <section
          className="ftco-section ftco-section-2 bg-primary"
          id="carousel"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <h2 className="heading-section mb-4 pb-md-3">
                  {job?.jobtitle}
                </h2>
                <p>{job?.jobdescription}</p>

                <p>
                  <ul>
                    {job?.jobskills.split(",").map((skill) => {
                      return <li>{skill}</li>;
                    })}
                  </ul>
                </p>

                <p>
                  {job?.isLink && (
                    <a
                      href={job?.link}
                      className="btn btn-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply
                    </a>
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
