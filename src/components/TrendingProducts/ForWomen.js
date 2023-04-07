import React, { useRef } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";

import { Grid } from "swiper";
import ProductCardV2 from "./ProductCardV2";

const ForWomen = ({ products }) => {
  const fashionsliderRef = useRef();
  const handlePrevious = () => {
    fashionsliderRef.current.swiper.slidePrev();
  };
  const handleNxt = () => {
    fashionsliderRef.current.swiper.slideNext();
  };

  return (
    <div>
      <div className="sm:flex sm:justify-between sm:items-center sm:pb-6">
        <h3 className="font-medium md:text-2xl leading-[24px]  capitalize">
          <span className="font-black">Fashion</span> for women
        </h3>
        <div>
          <button onClick={handlePrevious}>
            <HiOutlineArrowLeft className="p-2 rounded-full hover:bg-black text-3xl sm:text-4xl hover:text-white" />
          </button>
          <button onClick={handleNxt}>
            <HiOutlineArrowRight className="p-2 rounded-full hover:bg-black text-3xl sm:text-4xl hover:text-white" />
          </button>
        </div>
      </div>
      <div className="">
        <Swiper
          ref={fashionsliderRef}
          spaceBetween={20}
          slidesPerView={1}
          grid={{
            rows: 3,
            fill: "row",
            // Change the number of columns to fit your needs
            // The width of the slides should be (column count) * (product card width) + (column count - 1) * (gap between columns)
            columns: 1,
          }}
          modules={[Grid]}
        >
          {products?.map((product) => (
            <SwiperSlide key={product?.id}>
              <ProductCardV2 item={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button className="w-full p-4 bg-[#17201D] hover:bg-primary mt-5 text-white rounded font-bold text-sm uppercase">
        View All
      </button>
    </div>
  );
};

export default ForWomen;
