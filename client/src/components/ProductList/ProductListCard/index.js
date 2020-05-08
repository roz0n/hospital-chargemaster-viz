import React from "react";
import styled from "styled-components";

const ProductListCard = ({ product }) => {
  const { description, price } = product;

  return (
    <Container onClick={() => console.log("fdfhjdsfhsdjf")}>
      <div>{description}</div>
      <div>{price}</div>
      {/* <div>{hospitalId}</div> */}
    </Container>
  );
};

const Container = styled.article({
  boxSizing: "border-box",
  backgroundColor: "#FFFFFF",
  margin: ".5rem",
  padding: ".25rem",
  borderRadius: "2px",
});

export default ProductListCard;
