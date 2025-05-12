import React from "react";

const DiscountOffers = () => {
  return (
    <div className="flex justify-around flex-wrap gap-10">
      <div className=" rounded-md  bg-[#16a23e44] text-center flex justify-between items-center lg:w-[600px] scale-95 lg:scale-100">
        <h3 className="text-2xl font-semibold p-6">
          New Customer <br /> Offer
        </h3>
        <img src="./cupon-devider.png" alt="" />
        <p className="my-6 text-xl font-semibold p-6 l:ml-10">
          <span className="text-5xl font-extrabold">10%</span>{" "}
          <i>flat discount</i> <br /> <i>ON ANY FOOD ITEM</i>
        </p>
      </div>
      <div className=" rounded-md  bg-[#f3179fa7] text-center flex justify-between items-center lg:w-[600px] scale-95 lg:scale-100">
        <h3 className="text-2xl font-semibold p-6">
          Newly Married <br /> Couple
        </h3>
        <img src="./cupon-devider.png" alt="" />
        <p className="my-6 text-xl font-semibold p-6 md:lg-10">
          <span className="text-5xl font-extrabold">20%</span>{" "}
          <i>flat discount</i> <br /> <i>ON ANY FOOD ITEM</i>
        </p>
      </div>
      <div className=" rounded-md  bg-[#fff82267] text-center flex justify-between items-center scale-95 lg:scale-100">
        <h3 className="text-2xl font-semibold p-6">
          Our Super foodie <br /> Offer
        </h3>
        <img src="./cupon-devider.png" alt="" />
        <p className="my-6 text-xl font-semibold p-6 md:lg-10">
          <span className="text-5xl font-extrabold">15%</span>{" "}
          <i>flat discount</i> <br /> <i>ON ANY FOOD ITEM</i>
        </p>
      </div>
    </div>
  );
};

export default DiscountOffers;
