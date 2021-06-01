import React from 'react'
import spotify from "../img/spotify-react.JPG";
const Projects = () => {
  const style={
    "height":"300px", 
    "width":"400px"
    }

    const projects = [
    {
      "title": "Spotify with React",
      "url":"https://react-spotify-eight.vercel.app/",
      "img":spotify,
      "description": "",
      "id": 1,

    }
  ];
    return (
        <div>
            {projects.map((item,index)=>{
            return(
              <div key={item.id}>
                <h1>{item.title}</h1>
                <a  rel="noreferrer" href={item.url} target="_blank">DEMO</a>
                <img style={style} src={item.img} alt="something"/>
              </div>
            )})}
        </div>
    )
}

export default Projects
