import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import Carousal from "../../Components/Carousal/Carousal";
import { Link, useLoaderData } from "react-router-dom";
import FoodCard from "../../Components/FoodCard/FoodCard";
import DiscountOffers from "../../Components/DiscountOffers/DiscountOffers";
import OrderProcess from "../../Components/OrderProcess/OrderProcess";
const Home = () => {
  const { user } = useContext(AuthContext);
console.log(user);

  const foodData = useLoaderData();

  const [topFoods, setTopFoods] = useState([]);

  useEffect(() => {
    const sorted = [...foodData].sort((a, b) => b.purchased - a.purchased);

    const getTopFoods = sorted.slice(0, 6);
    setTopFoods(getTopFoods);
  }, []);

  console.log(foodData.length);

  return (
    <div className="max-w-[1540px] mx-auto pb-28">
      <div className="w-full">
        <Carousal></Carousal>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl mt-32">
          Top Selling foods
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  px-10 mt-20">
          {topFoods.map((foodCard) => (
            <FoodCard foodCard={foodCard}></FoodCard>
          ))}
        </div>
        <Link to="/al">
          <button className="btn buttonPrimary rounded-full my-24">
            See All Foods
          </button>
        </Link>

        <h2 className=" font-bold text-4xl lg:text-6xl md:mt-32 mb-20">
          Discount & Offers
        </h2>

        <DiscountOffers></DiscountOffers>
        <div className="mt-40">
          <h2 className=" font-bold text-4xl lg:text-6xl md:mt-32 mb-20 text-center">
            Order Process
          </h2>

          <OrderProcess></OrderProcess>
        </div>

      
      </div>
    </div>
  );
};

export default Home;
