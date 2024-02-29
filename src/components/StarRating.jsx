import React from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

function StarRating({ rating }) {
  const productRating = parseInt(rating);

  return (
    <div  style={{ maxWidth: 60, width: '100%' }}>
      <Rating readOnly value={productRating} />
    </div>
  );
}

export default StarRating;
