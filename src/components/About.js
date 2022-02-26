import React from "react";

function About() {
  return (
    <div>
      <p className="content is-size-1 has-text-weight-bold">Full Stack Web Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profilepicture.jpg'} alt="Andrew Yun"/>
      <p className="content is-italic has-text-weight-bold is-underlined mt-4">
        Full Stack Web Developer / Fantasy Football Champion
      </p>
      <p className="content">
        My name is Andrew Yun and I am a recent graduate of the UC Berkeley Coding Boot Camp. Based in the Bay Area, 
        I am a hard-working Web Developer who is passionate about learning, researching, and writing code. I am excited to
        take my programming skills and experience to a company where I can learn and grow.
      </p>
    </div>
  );
}

export default About;