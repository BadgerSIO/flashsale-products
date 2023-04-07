import React, { useEffect, useRef, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import ProductCard from "./ProductCard";
import bigsalebg from "../../assets/bigsalebg.png";
import bigsaleText from "../../assets/bigsaleText.webp";
import bigsaleProduct from "../../assets/bigsaleProduct.png";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
const FlashSaleProducts = () => {
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
  const sliderRef = useRef();
  const handlePrevious = () => {
    sliderRef.current.swiper.slidePrev();
  };
  const handleNxt = () => {
    sliderRef.current.swiper.slideNext();
  };
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="px-5 py-5 lg:px-[60px]  lg:pt-[100px] pb-[50px] grid grid-cols-1 xl:grid-cols-6 xl:space-x-4">
      <div className=" xl:col-span-4 2xl:col-span-5">
        <div className="sm:flex sm:space-x-5 sm:items-center sm:justify-between">
          <div className="sm:flex sm:space-x-5 sm:items-center">
            <h2 className="text-lg lg:text-[34px] font-medium border-2 border-black  leading-6 inline-block px-[15px] py-[12px]  capitalize">
              <span className="font-black">Flash</span> Sale product
            </h2>
            <CountdownTimer />
          </div>
          <div>
            <button onClick={handlePrevious}>
              <HiOutlineArrowLeft className="p-2 rounded-full hover:bg-black text-3xl sm:text-4xl hover:text-white" />
            </button>
            <button onClick={handleNxt}>
              <HiOutlineArrowRight className="p-2 rounded-full hover:bg-black text-3xl sm:text-4xl hover:text-white" />
            </button>
          </div>
        </div>
        <div className="sm:pt-5 pb-5 xl:pb-0">
          <Swiper
            ref={sliderRef}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1536: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1650: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
            spaceBetween={0}
            loop
          >
            {products?.map((product) => (
              <SwiperSlide key={product?.id}>
                <ProductCard item={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div
        className="flex xl:flex-col justify-evenly xl:justify-center items-center xl:col-span-2 2xl:col-span-1 p-2 lg:p-0"
        style={{ backgroundImage: `url(${bigsalebg})` }}
      >
        <img
          src={bigsaleText}
          alt=""
          className="w-[100px] lg:w-[247px]  lg:ml-10"
        />
        <h2 className="uppercase hidden sm:block text-center text-xs tracking-widest lg:text-sm font-medium  lg:tracking-[15px] text-white lg:-mt-5">
          mega sale
        </h2>
        <button className="text-[#F6C441] font-bold text-xs lg:text-[15px] flex items-center justify-center sm:space-x-3 lg:mt-5 lg:mb-8 ">
          <span>Shop Now</span> <BsArrowRight className="hidden sm:block" />
        </button>
        <img src={bigsaleProduct} alt="" className="w-[100px] lg:w-[247px]" />
      </div>
    </section>
  );
};

export default FlashSaleProducts;
