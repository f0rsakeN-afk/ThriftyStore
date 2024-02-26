import React from "react";
import Filter from "../../components/Filter";

function ProductOperations() {
  return (
    <div className="">
      <Filter
        filterField="categories"
        options={[
          {
            value: "all",
            label: "all",
          },
          {
            value: "electric appliances",
            label: "electric appliances",
          },
          { value: "clothes", label: "clothes" },
          {
            value: "food",
            label: "food",
          },
          { value: "tech", label: "tech" },
        ]}
      />
    </div>
  );
}

export default ProductOperations;
