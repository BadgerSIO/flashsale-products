import React, { useEffect, useState } from "react";
import ProductSlider from "./ProductSlider";

const TrendingProducts = () => {
  const [womenproducts, setWomenproducts] = useState([]);
  const [foodproducts, setFoodproducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("fashionforwomen.json")
      .then((res) => res.json())
      .then((data) => {
        setWomenproducts(data);
        setLoading(false);
      });
    fetch("foods.json")
      .then((res) => res.json())
      .then((data) => {
        setFoodproducts(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="px-5 py-5 xl:px-[60px] lg:pt-16 lg:pb-[50px] bg-gray-50">
      <h2 className="text-lg lg:text-[34px] font-medium border-2 border-black  leading-6 inline-block px-[15px] py-[12px]  capitalize md:mb-10 mb-2 ">
        <span className="font-black">Trending</span> products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5 lg:gap-8 2xl:gap-[60px]">
        <ProductSlider products={womenproducts} pcategory={`fashion`} />
        <ProductSlider products={foodproducts} pcategory={`food`} />
        <ProductSlider products={womenproducts} pcategory={`cosmetics`} />
      </div>
    </section>
  );
};

export default TrendingProducts;
