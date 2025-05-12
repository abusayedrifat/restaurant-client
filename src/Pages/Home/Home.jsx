import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import Carousal from "../../Components/Carousal/Carousal";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="max-w-[1540px] mx-auto pb-28">
      <div className="w-full">
        <Carousal></Carousal>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl my-16">Top Selling foods</h1>

        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
