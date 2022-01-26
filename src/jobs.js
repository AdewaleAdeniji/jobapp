import React, { useEffect, useState } from "react";
import Job from "./job";
import Intro from "./intro";
import { getJobs } from "./api";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [firstRun] = useState(true);
  useEffect(()=>{
    if(firstRun){
        jobsList();
    }
  },[firstRun])
  const jobsList = async () => {
    const res = await getJobs();
    setLoading(false);
    setJobs(res.data.text);
  }
  return (
    <React.Fragment>
      <Intro />
      <section className="ftco-section ftco-section-2 bg-light" id="cards">
        <div className="container">
          {loading ? (
            <div className="row loading d-flex">
              <div className="col-md-4">
                <div className="card text-center">
                  <h5 className="card-header py-4"> Searching the universe for jobs tailored to you...</h5>
                  <a href="/jobs/2">
                    <div className="card-body">
					<img src="load.svg" alt="Loading jobs" />
                    </div>
                    <div className="card-footer text-muted">I'll be done in few seconds</div>
                  </a>
                </div>
              </div>
             
              <br />
              
            </div>
          ) : (
            <div className="row">
              {jobs.map((job) => {
                return (
                      <Job
                        key={job.jobid}
                        company={job.company}
                        skills={job.skills}
                        job={job.jobtitle}
                        date={job.created_at}
                        id={job.jobid}
                      />   
                );
              })}
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  );
}
