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
  
  useEffect(()=>{
      window.scroll(0,0)
    },[])

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
        <Link to="/allFoods">
          <button className="btn buttonPrimary rounded-full my-24">
            See All Foods
          </button>
        </Link>

        <h2 className=" font-bold text-4xl lg:text-6xl md:mt-32 mb-20">
          Discount & Offers
        </h2>

        <DiscountOffers></DiscountOffers>
        <div className="mt-40">
          <h2 className=" font-bold text-4xl lg:text-6xl md:mt-32 mb-30 text-center">
            Order Process
          </h2>

          <OrderProcess></OrderProcess>
        </div>
        <div>
             <h2 className=" font-bold text-4xl lg:text-5xl md:mt-32 mb-20 text-center">
            Cooked with Love, Served with Heart
          </h2>
         
         
          <div className=" py-12 mx-3 md:p-10 border-dashed rounded-md border-[#b9400354] border-4 space-y-5">
             <p className="font-bold text-4xl text-center -ml-16 ">
            👉 Stay With Us{" "}
          </p>
          <p className="text-2xl font-medium text-center">and</p>
          <p className="font-bold text-4xl text-center">
            Taste. Vibe. Repeat.{" "}
          </p>
          <p className="text-center text-3xl mt-5"> 😉 </p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Home;
