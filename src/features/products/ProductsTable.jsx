import React from "react";
import { getProducts } from "./Products";
import Spinner from "../../components/Spinner";
import ProductsList from "./ProductsList";

function ProductsTable() {
  const { isLoading, products } = getProducts();

  if (isLoading) return <Spinner />;
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 ">
      {products.map((product) => (
        <ProductsList product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductsTable;
