import React from "react";

const CardFooter = (props) => {
  return (
    <div>
      <a href={`games/${props.slug}`}>Slug</a>
    </div>
  );
};

export default CardFooter;
