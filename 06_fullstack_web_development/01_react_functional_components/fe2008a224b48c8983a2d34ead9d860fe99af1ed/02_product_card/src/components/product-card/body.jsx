/* eslint-disable prettier/prettier */
import React from "react";

const CardBody = (props) => {
  // console.log("body props : ", props.summary);
  return (
    <div>
      <img src={props.coverUrl} />
      <p>first release date: {props.releaseDate}</p>
      Genres:
      {props.genres.map((element) => {
        return <li key={element.name}>{element.name}</li>;
      })}
      <p>
        <u>Summary: </u>
        {props.summary}
      </p>
    </div>
  );
};

export default CardBody;
