import React from "react";
import Radium from "radium";

import ProductListCard from "../ProductList/ProductListCard";
import { ProductListProps } from "../../typescript/interfaces";

const ProductList: React.FC<ProductListProps> = (props) => {
  const { productList } = props;

  return (
    <article>
      {
        productList?.map(product => {
          return (
            <ProductListCard label={product.label} price={product.price} hospitalId={product.hospitalId} />
          );
        })
      }
    </article>
  )
}

export default Radium(ProductList);