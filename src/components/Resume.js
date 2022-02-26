import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Resume</p>
        <hr />

        <a
          className="button is-primary"
          href={process.env.PUBLIC_URL + "https://docs.google.com/document/d/1utunN5WvgDH3YuwROn6LzkvB49OKzIR5QeLCAZRHxYU/edit?usp=sharing"}
          target="_blank" rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Link to Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">Skills</p>
        <hr />
        <ul>
            <li>HTML, CSS, Javascript</li>
            <li>MongoDB, Express, Reactjs, Nodejs</li>
            <li>SQL, Mongo, Graphql, Bulma</li>
            <li>Git, Wordpress</li>
            <li>Github Repo</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;