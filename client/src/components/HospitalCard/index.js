import React from "react";
import styled from "styled-components";

const HospitalCard = ({ name }) => {
  return (
    <Container>
      <h1>{name}</h1>
    </Container>
  );
};

const Container = styled.article({
  backgroundColor: "lime",
  boxSizing: "border-box",
  width: "100%",
  padding: "1rem",
});

export default HospitalCard;
