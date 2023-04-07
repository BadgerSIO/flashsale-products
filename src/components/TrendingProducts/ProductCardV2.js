import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCardV2 = ({ item }) => {
  const { productName, price, salePrice, productImage } = item;
  let rating = [1, 2, 3, 4, 5];
  return (
    <div className="flex justify-center items-center py-4 p-2 sm:p-5 lg:px-[50px] lg:py-[30px] bg-white border">
      <div className="w-1/3">
        <img src={productImage[0]} className="w-[87px]" alt="" />
      </div>
      <div className="w-2/3">
        <div className=" flex items-center space-x-1 text-[#F6C441] text-[11px] font-medium">
          {rating.map((rating) => (
            <FaStar key={rating} />
          ))}
          <span>(5.0)</span>
        </div>
        <h2 className="py-2 text-xs sm:text-base">{productName}</h2>
        <div>
          <span className="font-bold text-primary">${salePrice}</span>{" "}
          <span className="font-medium text-xs line-through text-[#A3A9A7]">
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCardV2;
