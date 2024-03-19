import React from "react";
import FreeDelivery from "../../components/FreeDelivery";
import { Link } from "react-router-dom";
import StarRating from "../../components/StarRating";

function ProductsList({ product }) {
  const {
    id,
    image,
    title,
    price,
    discount,
    description,
    rating,
    inStock,
    deliveryFree,
    category,
  } = product;

  const discountPercentage = ((discount / price) * 100).toFixed(2);
  const priceAfterDiscount = price - discount;

  return (
    <Link
      to={`/singleProduct/${id}`}
      className="hover:shadow-2xl  hover:contrast-100 rounded-md transition-all  ease-linear"
    >
      <div className="rounded-md flex flex-col bg-gray-200 dark:bg-gray-800  gap-2">
        <div className="relative">
          {!inStock && (
            <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded">
              Sold Out
            </span>
          )}
          <img
            src={image}
            alt="product-image"
            className="   h-52 md:h-60  w-full  rounded-md"
          />
        </div>
        <div className="p-2 flex flex-col gap-.5">
          <h1 className=" truncate text-gray-800 text-sm dark:text-gray-200">
            {title}
          </h1>
          <div className="flex  justify-between items-center">
            <h3 className="text-orange-600 font-md">
              Rs. {priceAfterDiscount}
            </h3>
            {deliveryFree ? <FreeDelivery deliveryFree={deliveryFree} /> : ""}
          </div>

          {discount === 0 ? (
            <div className="flex flex-col md:flex-row justify-between">
              <span className="text-sm  text-red-600">No discount</span>
              <StarRating rating={rating} />
            </div>
          ) : (
            <div className="flex flex-col md:flex-row justify-between">
              <section className="flex gap-2 text-sm">
                <h3 className=" dark:text-gray-300 line-through text-gray-600 decoration-gary-600">
                  Rs. {price}
                </h3>
                <h2 className="text-gray-700 dark:text-gray-200">
                  -{discountPercentage}%
                </h2>
              </section>
              <StarRating rating={rating} />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductsList;
