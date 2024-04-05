import { Link } from "react-router-dom";
import dummyData from "../../../jsons/dummyData.json";
import { useState } from "react";
import ProductList from "../../../components/ProductList";

const HomeProducts = () => {
  const data = dummyData;

  return (
    <>
      <div className="   bg-[#fff]">
        <ProductList data={data} />
      </div>
    </>
  );
};
export default HomeProducts;
