import React, { useState } from "react";
import styled from "styled-components";

import ProductList from "../ProductList";
import SidebarTotalPanel from "../SidebarTotalPanel";

const Sidebar = ({ productList = [] }) => {
  const [activeHospitalId, setActiveHospitalId] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState({});

  const Message = styled.div({
    textAlign: "center",
    color: "gray",
    padding: "2rem",
  });

  return (
    <Container>
      <Content>
        <Message>Select a hospital from the map to view its inventory</Message>
      </Content>

      {productList && (
        <ProductList
          productList={productList}
          selectedProducts={selectedProducts}
          handleSelection={null}
        />
      )}

      <SidebarTotalPanel />
    </Container>
  );
};

const Container = styled.article({
  position: "relative",
  boxSizing: "border-box",
  height: "100vh",
  width: "100%",
});

const Content = styled.div({
  height: "100%",
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "column",
  alignItems: "center",
});

export default Sidebar;
