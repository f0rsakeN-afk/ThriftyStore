import React from "react";
import { getProducts } from "../features/products/Products";
import ProductsList from "../features/products/ProductsList";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

function HomeproductSample() {
  const { products, isLoading } = getProducts();
  if (isLoading) return <Spinner />;
  const someProducts = products.slice(9, 15);
  //console.log(someProducts)
  return (
    <div className=" py-4 border p-2 border-slate-400 rounded-sm">
      <div className="flex justify-between items-center pb-2">
        <h1 className=" text-xl text-gray-700">Featured products</h1>
        <Link
          to="/products"
          className="px-2 py-2 text-orange-600 border  border-orange-600"
        >
          Shop more
        </Link>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 overflow-x-auto">
        {someProducts.map((product) => (
          <ProductsList product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default HomeproductSample;
