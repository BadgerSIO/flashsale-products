import React, { useRef } from "react";
import "swiper/css";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import {
  HiOutlineEye,
  HiOutlineHeart,
  HiOutlineShoppingBag,
} from "react-icons/hi";
import { HiArrowsUpDown } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const ProductCard = ({ item }) => {
  const { productName, category, price, salePrice, productImage, badge } = item;
  let rating = [1, 2, 3, 4, 5];
  const productRef = useRef();
  const handlePrev = () => {
    productRef.current.swiper.slidePrev();
  };
  const handleNext = () => {
    productRef.current.swiper.slideNext();
  };

  return (
    <>
      <div className="group">
        <div className="px-[30px] pt-[41px] pb-2 border group relative group-hover:rounded border-b-transparent group-hover:border-b-gray-200 rounded-t ">
          <div className=" ">
            <div className="flex mb-8">
              <button onClick={handlePrev}>
                <BsFillArrowLeftCircleFill className="text-2xl opacity-0 group-hover:opacity-100" />
              </button>
              <Swiper
                ref={productRef}
                slidesPerView={1}
                spaceBetween={0}
                loop
                modules={[Pagination]}
                pagination={{
                  clickable: true,
                  renderBullet: function (index, className) {
                    return `<span class="${className}" style="background-color: #000000; width:"0.5px";height:"0.5px""></span>`;
                  },
                }}
              >
                {productImage?.map((image, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={image}
                      alt=""
                      className=" pb-10 group-hover:scale-x-[-1] "
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <button onClick={handleNext}>
                <BsFillArrowRightCircleFill className="text-2xl opacity-0 group-hover:opacity-100" />
              </button>
            </div>
            <h3 className="font-medium text-xs text-[#8B928F] uppercase">
              {category}
            </h3>
            <h3 className="font-medium ">{productName}</h3>
          </div>

          <span
            className={`${
              badge === "new" ? "bg-black/10" : "bg-red-50 text-red-500"
            } px-2 py-1 text-xs capitalize absolute top-3 left-3 rounded-sm font-medium`}
          >
            {badge === "sale" ? "sale" : "new"}
          </span>
        </div>
        <div className="h-[70px] flex-col items-center justify-center border-x group-hover:border-x-0  relative px-[30px] ">
          <div className="group-hover:hidden flex items-center py-3 space-x-1 text-[#F6C441] text-[11px] font-medium">
            {rating.map((rating) => (
              <FaStar key={rating} />
            ))}
            <span>(5.0)</span>
          </div>
          <div className="group-hover:hidden">
            <span className="font-bold text-primary">${salePrice}</span>{" "}
            <span className="font-medium text-xs line-through text-[#A3A9A7]">
              ${price}
            </span>
          </div>
          <div className="hidden group-hover:flex justify-center items-center space-x-5 absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4  ">
            <HiOutlineEye
              title="quick view"
              className="p-[10px] text-4xl cursor-pointer rounded-full  hover:bg-black hover:text-white"
            />
            <span className="w-[1px] h-7 bg-gray-300"></span>
            <HiOutlineHeart
              title="add to wishlist"
              className="p-[10px] text-4xl cursor-pointer rounded-full  hover:bg-black hover:text-white"
            />
            <span className="w-[1px] h-7 bg-gray-300"></span>
            <HiArrowsUpDown
              title="compare"
              className="p-[10px] text-4xl cursor-pointer rounded-full  hover:bg-black hover:text-white"
            />
          </div>
        </div>
        <div className="px-5 pb-5 pt-4 group-hover:rounded border border-t-transparent group-hover:border-t-gray-100 rounded-b">
          <button className="w-full bg-secondary/20 text-primary hover:bg-primary hover:text-white py-2  rounded flex justify-center items-center  ">
            Add to cart <HiOutlineShoppingBag className="ml-3" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
