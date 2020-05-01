import React from "react";
import styled from "styled-components";

const Panel = styled.div({
  width: "100%",
  backgroundColor: "red",
  padding: ".5rem",
  boxSizing: "border-box",
  minHeight: "5rem",
});

const PricePanel = (props) => {
  const { total = 0 } = props;

  return (
    <Panel>
      <section>
        Total
        <div>{total && total.toString()}</div>
      </section>
    </Panel>
  );
};

export default PricePanel;
