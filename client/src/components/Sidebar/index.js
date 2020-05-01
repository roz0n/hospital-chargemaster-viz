import React, { useState } from "react";
import styled from "styled-components";

import ProductList from "../ProductList";
import SidebarTotalPanel from "../SidebarTotalPanel";
import HospitalCard from "../HospitalCard";

const Sidebar = ({ productList = [], activeHospitalData }) => {
  const [selectedProducts, setSelectedProducts] = useState({});

  const Message = styled.div({
    textAlign: "center",
    color: "gray",
    padding: "2rem",
  });

  return (
    <Container>
      {activeHospitalData ? (
        <HospitalCard name={activeHospitalData.hospital_name} />
      ) : (
        <>
          <header>Hospital Chargemaster</header>
          <Content>
            <Message>
              Select a hospital from the map to view its inventory
            </Message>
          </Content>
        </>
      )}

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
  display: "grid",
  gridTemplateRows: "minmax(75px, auto) 1fr 5rem",
  boxSizing: "border-box",
  height: "100vh",
  width: "100%",
});

const Content = styled.div({
  backgroundColor: "yellow",
  height: "100%",
  display: "flex",
  alignItems: "center",
  overflowY: "scroll",
});

export default Sidebar;
