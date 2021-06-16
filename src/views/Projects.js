import React from 'react'
import spotify from "../img/spotify-react.JPG";
import evolution from "../img/evolution-fit.JPG";
import robofriends from "../img/robofriends.JPG";
import "../styles/projects.scss";
const Projects = () => {

    const projects = [
    {
      "title": "ROBO-FRIENDS",
      "url":"https://robo-friends-gamma.vercel.app/",
      "github": "https://github.com/Oscars97/robo-friends",
      "img":robofriends,
      "description": "",
      "id": 3,
    },
    {
      "title": "Spotify with React",
      "url":"https://react-spotify-eight.vercel.app/",
      "github": "https://github.com/Oscars97/react-spotify",
      "img":spotify,
      "description": "",
      "id": 1,

    },
    {
      "title": "Evolution Fit-Center",
      "url":"https://evolutionfitcenter.netlify.app/",
      "github": "https://github.com/Oscars97/evolutiongym",
      "img":evolution,
      "description": "",
      "id": 2,
    },
    
    
  ];
    return (
        <div className="container projects-container">
            {projects.map((item,index)=>{
            return(
              <div key={item.id} className="project">
                <h1>{item.title}</h1>
                <img src={item.img} alt="something"/>
                <br/>
                <a   className="demo" rel="noreferrer" href={item.url} target="_blank">DEMO</a>
                <a   className="github" rel="noreferrer" href={item.github} target="_blank">CODE</a>
              </div>
            )})}
        </div>
    )
}

export default Projects
