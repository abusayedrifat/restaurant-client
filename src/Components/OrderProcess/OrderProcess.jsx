import React from "react";

const OrderProcess = () => {
  return (
    <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row items-center">
      <div className="flex flex-col justify-center items-center gap-3">
        <span className="border-4 border-dashed border-[#b9400354] rounded-full p-2">
          <img
            src="./1_R_U8UQEpc7n4aicmxmOx7w.gif"
            alt=""
            className=" rounded-full h-36 w-36"
          />
        </span>

        <span className="text-2xl">Browse Menu</span>
      </div>

      <div className="border-t-3 border-dashed border-[#b9400354] w-36 -mt-10 mx-5"></div>

      <div className="flex flex-col justify-center items-center gap-3">
        <span className="border-4 border-dashed border-[#b9400354] rounded-full p-2">
          <img
            src="./foodbasket.gif"
            alt=""
            className=" rounded-full h-36 w-36"
          />
        </span>

        <span className="text-2xl">Add to Cart</span>
      </div>
      <div className="border-t-3 border-dashed border-[#b9400354] w-36 -mt-10 mx-5"></div>
      <div className="flex flex-col justify-center items-center gap-3">
        <span className="border-4 border-dashed border-[#b9400354] rounded-full p-2">
          <img
            src="./delivery.gif"
            alt=""
            className=" rounded-full h-36 w-36"
          />
        </span>

        <span className="text-2xl">Delivery</span>
      </div>
      <div className="border-t-3 border-dashed border-[#b9400354] w-36 -mt-10 mx-5"></div>
      <div className="flex flex-col justify-center items-center gap-3">
        <span className="border-4 border-dashed border-[#b9400354] rounded-full p-2">
          <img src="./mealBowl.gif" alt="" className=" rounded-full h-36 w-36" />
        </span>

        <span className="text-2xl">Enjoy your Meal</span>
      </div>
    </div>
  );
};

export default OrderProcess;
