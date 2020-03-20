import React from "react";
import Radium from "radium";
import ProductList from "../ProductList";
import { SidebarProps } from "../../typescript/interfaces";

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { productList, isVisible, toggleVisibility } = props;
  const styles: object = {
    position: "absolute",
    right: isVisible ? 0 : "-100vh",
    backgroundColor: "lime",
    height: "100vh",
    width: "250px"
  };

  return (
    <article style={styles}>
      <ProductList productList={productList} />
      <button onClick={toggleVisibility}>Close</button>
    </article>
  );
}


export default Radium(Sidebar);