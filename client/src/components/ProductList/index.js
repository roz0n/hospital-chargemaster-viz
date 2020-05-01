import React from "react";
import styled from "styled-components";

import ProductListCard from "../ProductList/ProductListCard";

const sampleProducts = [
  {
    label: "Medicine 20MG",
    price: 90000,
    hospitalId: 12,
  },
  {
    label: "Some drillbut 12MM",
    price: 562,
    hospitalId: 12,
  },
  {
    label: "Towel 2-Pack",
    price: 125,
    hospitalId: 12,
  },
  {
    label: "Some drillbut 12MM",
    price: 562,
    hospitalId: 12,
  },
  {
    label: "Towel 2-Pack",
    price: 125,
    hospitalId: 12,
  },
  {
    label: "Some drillbut 12MM",
    price: 562,
    hospitalId: 12,
  },
  {
    label: "Towel 2-Pack",
    price: 125,
    hospitalId: 12,
  },
  {
    label: "Some drillbut 12MM",
    price: 562,
    hospitalId: 12,
  },
  {
    label: "Towel 2-Pack",
    price: 125,
    hospitalId: 12,
  },
  {
    label: "Some drillbut 12MM",
    price: 562,
    hospitalId: 12,
  },
  {
    label: "Towel 2-Pack",
    price: 125,
    hospitalId: 12,
  },
  {
    label: "Some drillbut 12MM",
    price: 562,
    hospitalId: 12,
  },
  {
    label: "Towel 2-Pack",
    price: 125,
    hospitalId: 12,
  },
  {
    label: "Some drillbut 12MM",
    price: 562,
    hospitalId: 12,
  },
  {
    label: "Towel 2-Pack",
    price: 125,
    hospitalId: 12,
  },
  {
    label: "Some drillbut 12MM",
    price: 562,
    hospitalId: 12,
  },
  {
    label: "Towel 2-Pack",
    price: 125,
    hospitalId: 12,
  },
  {
    label: "Some drillbut 12MM",
    price: 562,
    hospitalId: 12,
  },
  {
    label: "Towel 2-Pack",
    price: 125,
    hospitalId: 12,
  },
  {
    label: "Some drillbut 12MM",
    price: 562,
    hospitalId: 12,
  },
  {
    label: "Towel 2-Pack",
    price: 125,
    hospitalId: 12,
  },
];

const ProductList = ({ productList = sampleProducts, handleSelection }) => {
  return (
    <Container>
      {sampleProducts.map((product) => {
        return <ProductListCard product={product} onClick={handleSelection} />;
      })}
    </Container>
  );
};

const Container = styled.article({
  height: "100%",
  overflowY: "scroll",
  backgroundColor: "cyan",
});

export default ProductList;
