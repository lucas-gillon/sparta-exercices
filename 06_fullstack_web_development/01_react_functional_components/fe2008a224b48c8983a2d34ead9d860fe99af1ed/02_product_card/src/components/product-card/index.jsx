import React from "react";
import CardHeader from "./header";
import CardBody from "./body";
import CardFooter from "./footer";

const ProductCard = (props) => {
  console.log("index props : ", props.product.slug);
  return (
    <div>
      <CardHeader name={props.product.name} platformLogos={props.product.platforms} />
      <CardBody
        cover={props.product.cover.url}
        firstReleaseDate={props.product.first_release_date}
        genres={props.product.genres}
        summary={props.product.summary}
        screenshots={props.product.screenshots}
      />
      <CardFooter slug={props.product.slug} />
    </div>
  );
};

export default ProductCard;
