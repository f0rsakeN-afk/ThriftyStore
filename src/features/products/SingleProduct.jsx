import React from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "./Products";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner";
import ShareAndWishlist from "../../components/ShareAndWishlist";
import HomeProductSample from "../../components/HomeproductSample";
import SingleProductRightSidebar from '../../components/SIngleProductRightSidebar'
import StarRating from "../../components/StarRating";
import {
  addItem,
  decreaseQuantity,
  getCurrentQuantityById,
  increaseQuantity,
} from "../cart/CartSlice";

function SingleProduct() {
  const { id } = useParams();
  const dispatch = useDispatch(); // Get dispatch function
  const currentQuantity = useSelector(getCurrentQuantityById(id)); // Get current quantity from Redux store
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
    soldBy,
  } = singleProduct;

  const discountPercentage = ((discount / price) * 100).toFixed(2);
  const priceAfterDiscount = price - discount;

  

  return (
    <div className="">
      <div className="grid grid-cols-4  gap-4 py-8">
        <img
          src={image}
          alt="product-image"
          className="w-full h-92 rounded-md"
        />
        <div className="col-span-2">
          <div className="">
            <h1 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 pb-2 tracking-wide">
              {title}
            </h1>

            <section className="">
              <StarRating rating={rating} />
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
                  <button
                    className="text-gray-700 py-2 px-4 rounded-sm text-xl bg-gray-200 hover:text-gray-800 hover:bg-gray-300 dark:invert "
                    onClick={() => dispatch(decreaseQuantity({ singleProduct }))}
                  >
                    -
                  </button>
                  <h3 className="text-gray-700 dark:text-gray-200">{currentQuantity}</h3>
                  <button
                    className="text-gray-700 py-2 px-4 rounded-sm text-xl bg-gray-200 hover:text-gray-800 hover:bg-gray-300 dark:invert "
                    onClick={() => dispatch(increaseQuantity({singleProduct}))}
                  >
                    +
                  </button>
                </div>
              </section>
              {inStock ? (
                <button className="px-4 py-2 bg-orange-400 hover:bg-orange-500 transition-colors duration-200 ease-linear text-gray-50 font-semibold rounded-sm shadow-md" onClick={()=>dispatch(addItem({singleProduct}))}>
                  Add to Cart
                </button>
              ) : (
                <div className="">
                  <h2 className="text-xl font-semibold text-red-600 italic">
                    Out of Stock
                  </h2>
                  <span className="text-green-600  text-xs">
                    Will be available soon
                  </span>
                </div>
              )}
            </div>
            <p className="text-gray-800 dark:text-gray-300 pt-4">
              {description}
            </p>
          </div>
        </div>
        <SingleProductRightSidebar soldBy={soldBy} />
      </div>
      <HomeProductSample />
    </div>
  );
}

export default SingleProduct;
