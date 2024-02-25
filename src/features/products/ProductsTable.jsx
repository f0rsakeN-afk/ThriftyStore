import React from "react";
import { getProducts } from "./Products";
import Spinner from "../../components/Spinner";

function ProductsTable() {
  const { isLoading, products } = getProducts();
  console.log(products);
  if (isLoading) return <Spinner />;
  return <div>ProductsTable</div>;
}

export default ProductsTable;
