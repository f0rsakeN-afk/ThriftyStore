import React from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "./Products";
import Spinner from "../../components/Spinner";
import ShareAndWishlist from "../../components/ShareAndWishlist";
import Delivery from "../../components/Delivery";
function SingleProduct() {
  const { id } = useParams();
  //console.log(id);
  const { isLoading, products } = getProducts();
  if (isLoading) return <Spinner />;
  const singleProduct = products.find((p) => p.id === parseInt(id));
  // console.log(singleProduct);
  const {
    title,
    description,
    price,
    discount,
    category,
    image,
    rating,
    inStock,
    deliveryFree,
    created_at,
  } = singleProduct;

  const discountPercentage = ((discount / price) * 100).toFixed(2);
  const priceAfterDiscount = price - discount;
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-4 py-2">
        <img src={image} alt="product-image" className="w-full" />
        <div className="col-span-2">
          <div className="">
            <h1 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 pb-2 tracking-wide">
              {title}
            </h1>
            <h2 className="text-xl text-orange-600 ">
              Rs.{priceAfterDiscount}
            </h2>
            <section className="">
              <ShareAndWishlist />
            </section>
            <hr className="py-1" />
            <section className="flex gap-4  items-center">
              <h2 className="line-through text-gray-600 text-sm">Rs.{price}</h2>
              <h2 className="text-sm text-gray-800">-{discountPercentage}%</h2>
            </section>
          </div>
        </div>
        <div className="bg-gray-200 p-2">
          <Delivery/>
        </div>
      </div>
     
    </div>
  );
}

export default SingleProduct;
