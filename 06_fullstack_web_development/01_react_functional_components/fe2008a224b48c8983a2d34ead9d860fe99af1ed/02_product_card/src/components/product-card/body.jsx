import React from "react";
import { v4 as uuidv4 } from "uuid";

const CardBody = (props) => {
  // console.log(props.genres);
  // const [visible, setVisible] = React.useState(true);
  return (
    <div>
      <img src={props.cover} />
      <p>first release date: {props.firstReleaseDate}</p>
      <p>
        Genres:
        {props.genres.map((element) => {
          console.log(element.name);
          return <li key={element.name}>{element.name}</li>;
        })}
      </p>
      <p>
        <u>Summary:</u> {props.summary}
      </p>
      {/* <button onClick={() => setVisible(!visible)}>{visible ? "Hide screenshots" : "See Screenshots"}</button>
      {visible && (
        <p>
          {props.screenshots.map((element) => {
            return <img key={element.url} src={element.url} width="160px" />;
          })}
        </p>
      )} */}
    </div>
  );
};

export default CardBody;
