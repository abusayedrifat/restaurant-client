import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import axios from "axios";
import OrderLists from "./OrderLists";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const [myPurchasedFood, setMyPurchasedFood] = useState([]);
  const url = `https://restaurant-server-side-sigma.vercel.app/purchasingSingleFoodByUser?email=${user.email}`;

  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      console.log(res.data);
      setMyPurchasedFood(res.data);
    });
  }, [url]);

  const handledelete = (id) => {
    axios
      .delete(
        `https://restaurant-server-side-sigma.vercel.app/purchasingSingleFoodByUser/${id}`
      )
      .then((res) => {
        console.log(res);
        const remaining = myPurchasedFood.filter(
          (purchasedFood) => purchasedFood._id !== id
        );
        setMyPurchasedFood(remaining);
      });
  };

  useEffect(()=>{
      window.scroll(0,0)
    },[])
    
  return (
    <div className="max-w-3/5 mx-auto min-h-screen pb-32">
      <h2 className="text-2xl font-bold md:text-5xl text-center mt-20">My Orders</h2>
      <div className="overflow-x-auto pt-14">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Food Pic</th>
              <th>Food Name</th>
              <th>Price</th>
              <th>Buyer Name</th>
              <th>Buying Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myPurchasedFood.map((orderLists) => (
              <OrderLists
                orderLists={orderLists}
                handledelete={handledelete}
              ></OrderLists>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
