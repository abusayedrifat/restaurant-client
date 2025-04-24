
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      this is home
      <div className="group w-72 overflow-hidden bg-white shadow-lg rounded-md">
        <img
          src="https://www.andy-cooks.com/cdn/shop/articles/20230925162520-andy-20cooks-20-20lahmacun.jpg?v=1695663292"
          alt="Food"
          className="w-full h-48 object-cover"
        />

        <div className="max-h-32 hover:max-h-96 transition-all duration-500 ease-in-out overflow-hidden">
          <div className="p-4">
            <h3 className="text-lg font-semibold">Delicious Dish</h3>
            <p className="text-sm text-gray-600">
              This is a short description of the food item that expands on
              hover. Super tasty!
            </p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
