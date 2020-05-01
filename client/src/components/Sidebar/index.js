import React, { useState } from "react";
import styled from "styled-components";
import ProductList from "../ProductList";
import PricePanel from "../PricePanel";

const Sidebar = ({ productList }) => {
  const [selectedProducts, setSelectedProducts] = useState({});

  return (
    <Container>
      {productList && (
        <ProductList
          productList={productList}
          selectedProducts={selectedProducts}
          handleSelection={null}
        />
      )}
      <PricePanel />
    </Container>
  );
};

const Container = styled.div({
  backgroundColor: "lime",
  boxSizing: "border-box",
  height: "100vh",
  width: "100%",
});

export default Sidebar;
