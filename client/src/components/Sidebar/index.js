import React, { useState } from "react";
import Radium from "radium";
import ProductList from "../ProductList";

const CHECKOUT_PANEL_HEIGHT = "5rem";

const CheckoutPanel = props => {
  const { total = 0 } = props;

  const styles = {
    width: "100%",
    backgroundColor: "red",
    padding: ".5rem",
    boxSizing: "border-box",
    minHeight: CHECKOUT_PANEL_HEIGHT,
  };

  return (
    <article style={styles}>
      <section>
        Total
        <div>
          <span>{total?.toString()}</span>
        </div>
      </section>

      <section>
        <button disabled={total <= 0}>Checkout</button>
      </section>
    </article>
  );
};

const Sidebar = props => {
  const { productList, isVisible, toggleVisibility } = props;
  const [selectedProducts, setSelectedProducts] = useState({});

  {
    /* function handleSelection(e: any, label: string, price: number) {
    console.log("WORKING", label, price);
    const productSelections: SelectedProduct = selectedProducts;
    
    productSelections[label] = price;
    setSelectedProducts(productSelections);

    return e;
  } */
  }

  console.log("SELECTED PRODUCTS", selectedProducts);

  const styles = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: `3rem 1fr ${CHECKOUT_PANEL_HEIGHT}`,
    position: "absolute",
    right: isVisible ? 0 : "-100vh",
    backgroundColor: "lime",
    boxSizing: "border-box",
    height: "100vh",
    width: "250px",
    overflow: "hidden",
  };

  return (
    <article style={styles}>
      <button onClick={toggleVisibility}>Close</button>
      <ProductList
        productList={productList}
        selectedProducts={selectedProducts}
        handleSelection={null}
      />
      <CheckoutPanel />
    </article>
  );
};

export default Radium(Sidebar);
