import React from "react";

const NewsCard = function (props) {
  return (
    <div className="newsCard">
      <a className="linkPage" href={props.url} target="_blank">
        <div className="newsCardImage">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="newsCardContent">
          <p>{props.author}</p>
          <h5>{props.title}</h5>
          <p>{props.description}</p>
          <span className="newsCardDate">{props.date}</span>
        </div>
      </a>
    </div>
  );
};

export default NewsCard;
