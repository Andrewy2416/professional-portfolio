import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Money/Budget Organizer",
    languages: "pwa, js",
    packages: "Node, Express, Mongoose",
    image: "/img/moneyorganizer.jpg",
    description: "App that allows you to track your budget that can also be used offline as an app.",
    repo: "https://github.com/Andrewy2416/moneyorganizer",
    live: "https://stormy-peak-38446.herokuapp.com/",
  },
  {
    id: 1,
    title: "Social Network API",
    languages: "js",
    packages: "Mongoose, MongoDB, Express",
    image: "/img/socialnetwork.jpg",
    description: "Built an API that can be used as a Social Media Network by adding friends, making posts, and reacting",
    repo: "https://github.com/Andrewy2416/Coolfriendnetwork",
    live: "https://www.youtube.com/watch?v=qZfWdZ4VjKY",
  },
  {
    id: 2,
    title: "Extension Pass",
    languages: "html, css, js, handlebars",
    packages: "bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, handlebars, mysql2, CSS Bulma, sequelize",
    image: "/img/extensionpass.jpg",
    description: "This app is a travel blog that allows users to post blogs about their travels and share them with other would be travelers.",
    live: "https://whispering-plains-41505.herokuapp.com/",
    repo: "https://github.com/Andrewy2416/extension-pass",
  },
  {
    id: 3,
    title: "E-Commerce Backend",
    languages: "js",
    image: "/img/exommerce.jpg",
    packages: "Node.js, Express.js, Sequelize, MYSQL2, Dotenv",
    description: "This is a backend app that will connect to an e-commerce backend API that can be used to synchronize/modify a SQL Database. ",
    repo: "https://github.com/Andrewy2416/retaildatastorage",
    live: "https://www.youtube.com/watch?v=p76LOjwtLfw",
  },
  {
    id: 4,
    title: "Employee Database Manager",
    languages: "js",
    packages: "MYSQL2, Node, Inquirer, Console.table",
    image: "/img/teamtracker.jpg",
    description: "An app that is able to track, update, and manage employess in a SQL Database.",
    repo: "https://github.com/Andrewy2416/employeedatabasemanager",
    live: "https://www.youtube.com/watch?v=pytXx1HVGOw",
  },
  {
    id: 5,
    title: "Passport Extension",
    languages: "React, MongoDB, GraphQL, JWT Authentication",
    packages: "node, expressjs, react-router-dom",
    image: "/img/projectss.jpg",
    description: "A basic work portfolio that holds my projects for the full stack development class.",
    repo: "https://github.com/Andrewy2416/Passport-Extension-2416",
    live: "https://secret-springs-97491.herokuapp.com/",
  },
  {
    id: 6,
    title: "Blase Blase",
    languages: "html, css, js",
    packages: "none",
    image: "/img/blase.jpg",
    description: "A frontend app that is able to search for movies and show thei plots, ratings, and pictures through using a third party api.",
    repo: "https://github.com/marcusxhale1/Group-5-Creation",
    live: "https://marcusxhale1.github.io/Group-5-Creation/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;