
import { MdDelete } from "react-icons/md";

const OrderLists = ({orderLists,handledelete}) => {
    const {foodName, imgURL, buyingDate,userName,price, name, _id} = orderLists

    
    return (
        
           <tr>
            <td >
               <img src= {imgURL} alt="" className="h-18 w-18 rounded-2xl border-2 border-dashed p-1 border-[#b9400381]"/>
            </td>
            <td>
                {name}
            {foodName}
            </td>
            <td>
                $ {price}
            </td>
            <td>
                {userName}
            </td>
            <td>
                {buyingDate}
            </td>
            <td className="text-3xl text-red-500 " onClick={()=>handledelete()}>
            <MdDelete className="cursor-pointer"></MdDelete>
            </td>
        </tr> 
        
        
    );
};

export default OrderLists;