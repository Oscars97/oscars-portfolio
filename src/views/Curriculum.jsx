// import TypeWriterEffect from 'react-typewriter-effect';
import "../styles/curriculum.scss";
import {useState, useEffect} from 'react';
import cv from "../img/cv.JPG";

const Curriculum = () => {
  const [userInfo, setUserInfo] = useState("");
  useEffect(()=>{
    fetch(`https://api.github.com/users/oscars97`)
      .then((response) => response.json())
      .then((data) => {
        setUserInfo(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  })
  return (
    <div className="container information">
      {/* <TypeWriterEffect
            textStyle={{ fontFamily: 'Red Hat Display', "color":"white" }}
            startDelay={100}
            cursorColor="white"
            text="Currently working on this section..."
            typeSpeed={100}
            scrollArea={document}
          /> */}
       <div className="user">
        <div className="user-img_div">
          <img className="user-img" src={userInfo.avatar_url} alt="" />
        </div>
        <div className="user-info">
          <h1>{userInfo.name}</h1>
          <h2>{userInfo.bio}</h2>
          <h3>{userInfo.location}</h3>
        </div>
      </div>
      <div className="curriculum-body">
        <img src={cv} alt=""/>
        <div>
          <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/15MPL1VeUcYgdfu4JnlITthdKi_1NqfCd/view?usp=sharing" download alt="curriculum vitae">
          Open with google drive
          </a>
        </div>
      </div>
        
    </div>
  );
};

export default Curriculum;
