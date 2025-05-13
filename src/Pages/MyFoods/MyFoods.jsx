import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const MyFoods = () => {
  const { user } = useContext(AuthContext);

  const [myPurchasedFood, setMyPurchasedFood] = useState([]);
  const url = `https://restaurant-server-side-sigma.vercel.app/purchasingSingleFoodByUser?email=${user?.email}`;

  useEffect(() => {
    axios.get(url, { withCredentials: true })
    .then((res) => {
      console.log(res.data);
      setMyPurchasedFood(res.data);
    });
  }, [url]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  max-w-5/6 mx-auto py-20">
      {myPurchasedFood.map((foodCard) => (
        <div
          key={foodCard._id}
          className="flex flex-col  grow p-3 rounded-3xl shadow-lg bg-[#ffffff5b] group  "
        >
          <div className="h-full relative group">
            <span className="bg-[#e0be4f3d] group-hover:bg-[#e0be4fae] rounded-2xl w-full absolute h-1/2 group-hover:h-full bottom-0 transition-all duration-400"></span>
            <img
              src={foodCard.imgURL}
              className="h-full w-full rounded-2xl scale-75 group-hover:scale-100 transition-transform duration-400 cursor-pointer"
              alt=""
            />
          </div>

          <div className="mt-4 space-y-1 ml-3 text-[#2e2e2e]">
            <p className="font-bold text-xl">{foodCard.foodName}</p>
            <p>
              {" "}
              <span className="text-md font-semibold">Category:</span>{" "}
              {foodCard.category}
            </p>
            <p>
              <span className="text-md font-semibold">Country:</span>{" "}
              {foodCard.country}
            </p>

            <p>
              <span className="text-md font-semibold">Price : </span>$
              {foodCard.price}{" "}
            </p>
          </div>

          <Link to="/updateMyFood">
            <button className="btn w-full align-bottom mt-10 mb-2 buttonPrimary rounded-full scale-90 group-hover:scale-95 transition-transform duration-300">
              Update <MdModeEdit></MdModeEdit>
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MyFoods;
