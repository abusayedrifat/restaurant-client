
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
            <th className="text-3xl text-red-500 " onClick={()=>handledelete(_id)}>
            <MdDelete className="cursor-pointer"></MdDelete>
            </th>
        </tr> 
        
        
    );
};

export default OrderLists;