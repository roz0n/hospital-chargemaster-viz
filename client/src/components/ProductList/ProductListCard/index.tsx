import React from "react";
import Radium from "radium";

import { ProductProps } from "../ProductList.types";

const ProductListCard: React.FC<ProductProps> = (props) => {
  const { label, price, hospitalId } = props;
  const styles: object = {
    backgroundColor: "#FFFFFF",
    margin: ".5rem",
    padding: ".25rem"
  };

  return (
    <article style={styles}>
      <div>
        {label}
      </div>
      <div>
        {price}
      </div>
      <div>
        {hospitalId}
      </div>
    </article>
  )
}

export default Radium(ProductListCard);