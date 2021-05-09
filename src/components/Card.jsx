import React from "react";

const Card = function (props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.details.name}</h2>
        <img
          className="circle-img"
          src={props.details.imgURL}
          alt="avatar_img"
        />
      </div>
      <div className="bottom">
        <p className="info">{props.details.phone}</p>
        <p className="info">{props.details.email}</p>
      </div>
    </div>
  );
};

export default Card;
