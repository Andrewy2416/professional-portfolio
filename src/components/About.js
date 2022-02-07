import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Andrew Yun"/>
      <p className="content is-italic mt-4">
        My name is Andrew and I am a Full Stack Developer.
      </p>
      <p className="content">
        I am a developer with a background in e-commerce business. I hope to combine both skills to provide insight and quality
        work for my clients.
      </p>
    </div>
  );
}

export default About;