import React from "react";
import styled from "styled-components";

const SidebarTotalPanel = ({ total = 0 }) => {
  return (
    <Panel>
      <section>
        Total
        <div>{total && total.toString()}</div>
      </section>
    </Panel>
  );
};

const Panel = styled.div({
  width: "100%",
  backgroundColor: "red",
  padding: ".5rem",
  boxSizing: "border-box",
  minHeight: "5rem",
  position: "absolute",
  bottom: "0",
});

export default SidebarTotalPanel;
