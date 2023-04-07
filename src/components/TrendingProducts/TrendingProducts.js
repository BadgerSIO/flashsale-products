import React, { useEffect, useState } from "react";
import ForWomen from "./ForWomen";

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("flashproducts.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
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
        <ForWomen products={products} />
        <ForWomen products={products} />
        <ForWomen products={products} />
      </div>
    </section>
  );
};

export default TrendingProducts;
