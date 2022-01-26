import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="ftco-section ftco-section-2">
        <div className="col-md-12 text-center">
          <p className="mb-0">
            &copy; All rights reserved | Developed with
            &nbsp;<i className="fa fa-heart" aria-hidden="true"></i> &nbsp; by &nbsp;
            <a
              href="https://devferanmi.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              DevFeranmi
            </a>
          </p>
        </div>
      </footer>
    );
  }
}
