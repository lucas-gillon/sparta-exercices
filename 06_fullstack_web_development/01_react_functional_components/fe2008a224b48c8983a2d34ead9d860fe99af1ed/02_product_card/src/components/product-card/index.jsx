import React from "react";
import CardHeader from "./header";
import CardBody from "./body";

const ProductCard = (props) => {
  return (
    <div>
      <CardHeader name={props.product.name} platformLogos={props.product.platforms} />
      <CardBody
        coverUrl={props.product.cover.url}
        releaseDate={props.product.first_release_date}
        genres={props.product.genres}
        summary={props.product.summary}
      />
    </div>
  );
};

export default ProductCard;
