import { useLoaderData } from "react-router-dom";

const AllFoods = () => {
    const allFoods = useLoaderData()
    console.log(allFoods.length);
    
    return (
        <div className="grid grid-cols-3 gap-5  max-w-5/6 mx-auto my-20">
            
            {
                allFoods.map(foodCard =>
                    <div className="flex flex-col grow p-3 rounded-lg shadow-lg bg-[#e5dfd2]">
                        <div className="h-full ">
<img src={foodCard.imgURL} className="h-full w-full rounded-t-lg" alt="" />
                        </div>
                        
                        <div className="mt-4 space-y-1">
                          <p className="font-bold text-xl">{foodCard.foodName}</p>
                        <p> <span className="text-md font-semibold">Type:</span>  {foodCard.country}</p>
                        <p><span className="text-md font-semibold">Description:</span>  {foodCard.description} </p> 

                        </div>
                         <button className="btn w-full align-bottom mt-10 mb-2 buttonPrimary">Purchase</button>
                        

                        
                        
                    </div>
                )
            }
        </div>
    );
};

export default AllFoods;