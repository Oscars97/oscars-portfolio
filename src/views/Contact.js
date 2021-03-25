import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/contact.scss";
const Contact = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(""); 
    const [redirect, setRedirect] = useState(false);
    const sendData = (e)=>{
        e.preventDefault();
        console.log(email, message);
        notify();
        setTimeout(()=>{
            setRedirect(true);
        },4000)
    }
    const notify = () => toast.success("I will be contacting you in a while!, now you are comming back to home page.");
  
  return (
    <div className="container container-form">
      <form className="form" onSubmit={sendData}>
        <div className="form-group">
          <label>Email address</label>
          <input required
            onChange={(e)=>{setEmail(e.target.value)}}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <input
            onChange={(e)=>{setMessage(e.target.value)}}
            type="text"
            className="form-control message"
            id="exampleInputPassword1"
          />
        </div>
    
        <button type="submit" className="btn btn-danger">
          Submit
        </button>
        <ToastContainer />
      </form>
      {redirect?<Redirect to="/" /> : null}
    </div>
  );
};

export default Contact;
