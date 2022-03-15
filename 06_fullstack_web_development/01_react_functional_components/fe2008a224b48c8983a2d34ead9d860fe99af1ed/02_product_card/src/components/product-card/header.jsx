/* eslint-disable prettier/prettier */
import React from "react";

const CardHeader = (props) => {
  // console.log(props)
  return (
    <div>
      <h1>{props.name}</h1>
      {props.platformLogos.map((element) => {
        if (element.name === undefined) {
          return <img key={element.name} src={element} />
        } else {
          return <img key={element.name} src={element.platform_logo.url} />
        }
      })}
    </div>
  );
};

export default CardHeader;
