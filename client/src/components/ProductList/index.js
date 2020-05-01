import React from "react";
import styled from "styled-components";

import ProductListCard from "../ProductList/ProductListCard";

const ProductList = ({ productList, handleSelection }) => {
  return (
    <Container>
      {productList &&
        productList.map((product) => {
          return (
            <ProductListCard product={product} onClick={handleSelection} />
          );
        })}
    </Container>
  );
};

const Container = styled.article({
  height: "100%",
  overflowY: "scroll",
});

export default ProductList;
