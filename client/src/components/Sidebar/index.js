import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ProductList from "../ProductList";
import SidebarTotalPanel from "../SidebarTotalPanel";
import HospitalCard from "../HospitalCard";

const Sidebar = ({
  productList = [],
  activeHospitalData,
  activeHospitalName,
}) => {
  const [selectedProducts, setSelectedProducts] = useState({});
  const [activeInventory, setActiveInventory] = useState(null);
  const [error, setError] = useState(null);

  const Message = styled.div({
    textAlign: "center",
    color: "gray",
    padding: "2rem",
  });

  useEffect(() => {
    async function fetchInventory() {
      try {
        const request = await fetch(
          `/api/hospitals/pricing/${activeHospitalName}`
        ).then((data) => data.json());

        if (request.success) {
          setActiveInventory(request.data);
        } else {
          throw new Error("Hospital inventory not available");
        }
      } catch (error) {
        setError(error.message || false);
      }
    }

    // Fix this massive thing right here
    if (
      (!activeInventory && activeHospitalName) ||
      (activeHospitalName &&
        activeInventory &&
        activeHospitalName !== activeInventory[0]?.hospital_id)
    ) {
      fetchInventory();
    }
  }, [activeInventory, setActiveInventory, activeHospitalName]);

  console.log("ACTIVE HOSPITAL NAME", activeHospitalName);
  console.log("ACTIVE HOSPITAL INVENTORY", activeInventory);

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
          productList={activeInventory}
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
