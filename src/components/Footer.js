import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Full Stack Web-Development Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/Andrewy2416" target="_blank" rel="noreferrer">
            Andrew Yun
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/andrew-yun-38b24821b/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
          <a href="youtube.com/channel/Andrewy2416" target="_blank" rel="noreferrer">
            Video Walkthroughs
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;