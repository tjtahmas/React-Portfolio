import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Spotiweather',
      description: 'JavaScript/ API Intro',
      link: "https://tjtahmas.github.io/API-Project-1/",
      repo: "https://github.com/tjtahmas/API-Project-1"
    },
    {
      name: 'Round Table',
      description: 'MySQL/ Express',
      link: "https://young-journey-22561.herokuapp.com/",
      repo: "https://github.com/tjtahmas/Project-2"
    },
    {
      name: 'Tech Blog',
      description: 'Model, View, Controller Practice',
      link: "https://mighty-sierra-55235.herokuapp.com/",
      repo: "https://github.com/tjtahmas/CMS-Tech-Blog-"
    },
    {
      name: 'Note Taker',
      description: 'Express Intro',
      link: "https://calm-shore-36013.herokuapp.com/",
      repo: "https://github.com/tjtahmas/Note-Taker"
    },
    {
      name: 'Workout Tracker',
      description: 'MongoDB/ Mongoose',
      link: "https://evening-sands-65482.herokuapp.com/",
      repo: "https://github.com/tjtahmas/Workout-Tracker"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
