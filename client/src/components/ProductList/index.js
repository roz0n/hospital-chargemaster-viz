import React from "react";
import Radium from "radium";
import ProductListCard from "../ProductList/ProductListCard";

const ProductList = props => {
  const { productList, handleSelection } = props;
  const styles = {
    height: "100%",
    overflowY: "scroll",
  };

  return (
    <article style={styles}>
      {productList?.map(product => {
        return <ProductListCard product={product} onClick={handleSelection} />;
      })}
    </article>
  );
};

export default Radium(ProductList);
