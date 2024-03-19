import React from "react";
import { getProducts } from "./Products";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import ProductsList from "./ProductsList";
import ProductOperations from "./ProductOperations";

function ProductsTable() {
  const { isLoading, products } = getProducts();
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("categories") || "all";
  let filteredData = products; // Initialize filteredData with all products

  if (filterValue !== "all") {
    // If filterValue is not "all", filter products by category
    filteredData = products.filter((p) => p.category === filterValue);
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="">
      <div className="flex justify-end p-2">
        <ProductOperations />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
        {filteredData.map((product) => (
          <ProductsList product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductsTable;
