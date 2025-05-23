import { Link } from "react-router-dom";

const FoodCard = ({foodCard}) => {
    return (
        
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
              <span className="text-md font-semibold">Description:</span>{" "}
              {foodCard.description}{" "}
            </p>
          </div>


          <Link to={`/singleFoodPage/${foodCard._id}`}>
            <button className="btn w-full align-bottom mt-10 mb-2 buttonPrimary rounded-full scale-90 group-hover:scale-95 transition-transform duration-300">
              View Details
            </button>
          </Link>
        </div>
    
    );
};

export default FoodCard;