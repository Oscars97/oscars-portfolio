import React from "react";
import PropTypes from "prop-types";
import "../styles/repository.scss";
const Repository = (props) => {
  return (
    <div>
      <div className="card repository-container">
        <img src="https://1000marcas.net/wp-content/uploads/2020/02/GitHub-Logo.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h1 className="card-title">{props.name}</h1>
          <h3>Language: {props.language}</h3>
          <p>Created at: {props.created_at}</p>
          <a
            href={props.url}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

Repository.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
  language: PropTypes.string,
  created_at: PropTypes.string,
};
export default Repository;
