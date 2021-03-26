import React, { useEffect, useState } from "react";
import "../styles/github.scss";
// import Repository from "./Repository";
const Github = () => {
  const [userInfo, setUserInfo] = useState("");
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
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
        console.log(data);
        setRepositories(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <div className="container user-container">
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
        <div className="list-repositories">
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
    </div>
  );
};

export default Github;
