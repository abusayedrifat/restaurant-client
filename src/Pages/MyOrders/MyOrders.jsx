import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import axios from "axios";
import OrderLists from "./OrderLists";

const MyOrders = () => {
    const {user} = useContext(AuthContext)

    const [myPurchasedFood, setMyPurchasedFood] = useState([])
    const url = `http://localhost:5000/purchasingSingleFoodByUser?email=${user.email}`

    useEffect(()=>{
        axios.get(url, {withCredentials:true})
        .then(res=>{
            console.log(res.data);
            setMyPurchasedFood(res.data)
        })
    },[url])

    const handledelete =(id)=>{

        axios.delete(`http://localhost:5000/purchasingSingleFoodByUser/${id}`)
        .then(res=>{
            console.log(res);
            const remaining = myPurchasedFood.filter(purchasedFood=> purchasedFood._id !== id )
            setMyPurchasedFood(remaining)
            
        })
    }
    
    return (
         <div className="max-w-3/5 mx-auto min-h-screen">
                    
                    <div className="overflow-x-auto pt-20">
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
      {
        myPurchasedFood.map((orderLists)=> (<OrderLists orderLists={orderLists} handledelete={handledelete} ></OrderLists>) )
      }
      
    </tbody>
  </table>
</div>
</div>

                    
               
            
    
    );
};

export default MyOrders;