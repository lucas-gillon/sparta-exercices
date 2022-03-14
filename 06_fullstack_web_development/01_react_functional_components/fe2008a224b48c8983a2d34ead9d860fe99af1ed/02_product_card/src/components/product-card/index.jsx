import React from "react";
import CardHeader from "./header";

const ProductCard = (props) => {
  return (
    <div>
      <CardHeader name={props.product.name} platformLogos={props.product.platforms} />
    </div>
  );
};

export default ProductCard;
