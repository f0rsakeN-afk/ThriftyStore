import React from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "./Products";
import Spinner from "../../components/Spinner";
import ShareAndWishlist from "../../components/ShareAndWishlist";
import SIngleProductRightSidebar from "../../components/SIngleProductRightSidebar";

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
      <div className="grid grid-cols-4 gap-4 py-8">
        <img src={image} alt="product-image" className="w-full h-92 rounded-md" />
        <div className="col-span-2">
          <div className="">
            <h1 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 pb-2 tracking-wide">
              {title}
            </h1>

            <section className="">
              <ShareAndWishlist />
            </section>
            <hr className="py-1" />
            {discount ? (
              <h2 className="text-xl text-orange-600 ">
                Rs.{priceAfterDiscount}
              </h2>
            ) : (
              <h2 className="text-xl text-orange-600 ">Rs. {price}</h2>
            )}
            {discount === 0 ? (
              ""
            ) : (
              <section className="flex gap-4  items-center">
                <h2 className="line-through text-gray-600 text-sm dark:text-gray-300">
                  Rs.{price}
                </h2>
                <h2 className="text-sm text-gray-700 dark:text-gray-200">
                  -{discountPercentage}%
                </h2>
              </section>
            )}
            <div className="flex justify-between items-center">
              <section className="flex gap-4 py-2 items-center">
                <h2 className="text-gray-700 dark:text-gray-200">Quantity</h2>
                <div className="flex gap-2 items-center">
                  <button className="text-gray-700 py-2 px-4 rounded-sm text-xl bg-gray-200 hover:text-gray-800 hover:bg-gray-300 dark:invert ">
                    -
                  </button>
                  <h3 className="text-gray-700 dark:text-gray-200">ds</h3>
                  <button className="text-gray-700 py-2 px-4 rounded-sm text-xl bg-gray-200 hover:text-gray-800 hover:bg-gray-300 dark:invert ">
                    +
                  </button>
                </div>
              </section>
              <button className="px-4 py-2 bg-orange-400 hover:bg-orange-500 transition-colors duration-200 ease-linear text-gray-50 font-semibold rounded-sm shadow-md">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
       <SIngleProductRightSidebar/>
      </div>
    </div>
  );
}

export default SingleProduct;
