import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import moment from "moment";

const FoodPurchase = () => {
  const foods = useLoaderData();
  const { foodName, price, purchased, imgURL } = foods;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(0);

  if (quantity < 0) {
    setQuantity(0);
  }
  if (quantity > purchased) {
    Swal.fire({
      icon: "error",
      title: "Oops... ",
      text: "You can't order more than available quantity",
      footer: "Please set at least 1 quantity to proceed your purchase",
    });
    setQuantity(purchased);
  }

  const handlePurchasing = () => {
    const purchasingInfo = {
      foodName: foodName,
      price: price,
      userName: user?.displayName,
      email: user.email,
      buyingDate: new moment().format("llll"),
      quantity: quantity,
      imgURL: imgURL,
    };

    if (quantity == 0) {
      Swal.fire({
        icon: "error",
        title: "Oops... ",
        text: "Seems you havn't selected any quantity",
        footer: "Please set at least 1 quantity to proceed your purchase",
      });
    } else {
      axios
        .post(
          "https://restaurant-server-side-sigma.vercel.app/purchasingSingleFoodByUser",
          purchasingInfo
        )
        .then((result) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your order is confirmed",
            showConfirmButton: false,
            timer: 1800,
          });
          console.log(result);
          navigate("/allFoods");
        });
    }
  };
  return (
    <div className="flex flex-col justify-center items-center mx-auto text-[#1f1d1b] pb-20">
      <h1 className="mt-10 lg:mt-16 mb-6 text-4xl md:text-5xl lg:text-5xl font-bold">
        You are Purchasing
      </h1>

      <div className="flex flex-col gap-5 min-w-[350px] md:w-1/3 lg:w-1/3 p-5 mx-3 border-4 border-dashed border-[#b9400354] rounded-3xl text-lg ">
        <img src={imgURL} className=" rounded-t-xl" alt="" />
        <div className="ml-1">
          <p className="">
            <span className="font-bold">Food Name :</span> {foodName}
          </p>
          <p className="text-[#b94003]">
            <span className="font-bold text-[#2e2e2e]">Price :</span> ${price}{" "}
          </p>
          <p>
            <span className="font-bold">Buyer name :</span>
            {user?.displayName}
          </p>
          <p>
            <span className="font-bold">Buyer email : </span>
            {user.email}
          </p>
          <div className="flex gap-5 my-3 items-center">
            <span className="font-bold">Quantity : </span>
            <div className="flex gap-5 items-center">
              <button
                className="btn buttonPrimary"
                onClick={() => setQuantity((quantity) => quantity - 1)}
              >
                -
              </button>
              {quantity}
              <button
                className="btn buttonPrimary"
                onClick={() => setQuantity((quantity) => quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={() => handlePurchasing()}
          className="btn buttonPrimary"
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default FoodPurchase;
