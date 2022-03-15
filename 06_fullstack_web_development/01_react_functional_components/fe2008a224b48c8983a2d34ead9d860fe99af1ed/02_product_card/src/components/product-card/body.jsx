import React from "react";

const CardBody = (props) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div>
      <img src={props.cover} />
      <p>first release date: {props.firstReleaseDate}</p>
      <p>
        Genres:
        {props.genres.map((element) => {
          if (element.name === undefined) {
            return <li key={element}>{element}</li>;
          } else {
            return <li key={element.name}>{element.name}</li>;
          }
        })}
      </p>
      <p>
        <u>Summary:</u> {props.summary}
      </p>
      <button className="btn btn-primary" onClick={() => setVisible(!visible)}>
        {visible ? "Hide screenshots" : "See Screenshots"}
      </button>
      {visible && (
        <p>
          {props.screenshots.map((element) => {
            return <img key={element.url} src={element.url} width="160px" />;
          })}
        </p>
      )}
    </div>
  );
};

export default CardBody;
