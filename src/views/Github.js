import React, { useEffect, useState } from "react";
import "../styles/github.scss";
// import Repository from "./Repository";
const Github = () => {
  const [userInfo, setUserInfo] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const [repositoryClass, setRepositoryClass] = useState("list-repositories");
  
  const addEffect = ()=>{
    setRepositoryClass("list-repositories effect");
  };
  
  const removeEffect = ()=>{
    setRepositoryClass("list-repositories none")
  }
  
  
  useEffect(() => {
    window.addEventListener("scroll", ()=>{
      setScrollY(window.scrollY);
      if(scrollY>=250){
        addEffect();
      }else{
        removeEffect();
      }
    })


    fetch(`https://api.github.com/users/oscars97`)
      .then((response) => response.json())
      .then((data) => {
        setUserInfo(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    fetch(
      `https://api.github.com/users/oscars97/repos?sort=created&per_page=10`
    )
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [scrollY]);
  return (
    <main className="container user-container" id="github">
      {/* we are including the info from github */}
      <div className="user">
        <div className="user-img_div">
          <img className="user-img" src={userInfo.avatar_url} alt="user" />
        </div>
        <div className="user-info">
          <h1>{userInfo.name}</h1>
          <h2>{userInfo.bio}</h2>
          <h3>{userInfo.location}</h3>
        </div>
      </div>
      <div className="repositories">
        <h1 className="repositories-title">REPOSITORIES</h1>
        <div className={repositoryClass}>
          {/* {repositories.map((item,i)=>{
                return <Repository key={i} id={i} name={item.name} url={item.html_url} created_at={item.created_at} language={item.language} />
            })} */}

          {repositories.map((item, i) => {
            return (
              <div key={i} className="repository">
                <h1>{item.name}</h1>
                <a
                  className="btn btn-danger"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.html_url}
                >
                  Repository
                </a>
                <p>Language: {item.language}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Github;



