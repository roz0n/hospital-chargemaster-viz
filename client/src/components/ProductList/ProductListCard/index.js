import React from "react";
import Radium from "radium";

const ProductListCard = props => {
  const { product, onClick } = props;
  const { label, price, hospitalId } = product;

  const styles = {
    boxSizing: "border-box",
    backgroundColor: "#FFFFFF",
    margin: ".5rem",
    padding: ".25rem",
    borderRadius: "2px",
  };

  return (
    <article style={styles} onClick={e => onClick(e, label, price)}>
      <div>{label}</div>
      <div>{price}</div>
      <div>{hospitalId}</div>
    </article>
  );
};

export default Radium(ProductListCard);
