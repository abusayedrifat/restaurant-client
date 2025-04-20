import { Link, useLoaderData } from "react-router-dom";

const AllFoods = () => {
  const allFoods = useLoaderData();
  console.log(allFoods.length);

  return (
    <div className="grid grid-cols-3 gap-5  max-w-5/6 mx-auto my-20">
      {allFoods.map((foodCard) => (
        <div
        key={foodCard._id}
        className="flex flex-col  grow p-3 rounded-3xl shadow-lg bg-[#e5dfd2] group  "
      >
        <div className="h-full relative group">
          <span className="bg-[#ffffff3d] group-hover:bg-[#ffffff90] rounded-2xl w-full absolute h-1/2 group-hover:h-full bottom-0 transition-all duration-400"></span>
          <img
            src={foodCard.imgURL}
            className="h-full w-full rounded-2xl scale-75 group-hover:scale-100 transition-transform duration-400 cursor-pointer"
            alt=""
          />
        </div>
      
        <div className="mt-4 space-y-1 ml-3">
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
      ))}
    </div>
  );
};

export default AllFoods;

{/* <div
          key={foodCard._id}
          className="flex flex-col  grow p-3 rounded-3xl shadow-lg bg-[#e5dfd2]"
        >
          <div className="h-full relative">
            <span className="bg-[#ffffff63] hover:bg-[#ffffff90] rounded-2xl w-full absolute h-1/2 transition-all duration-400 transform-content group-hover:h-full bottom-0"></span>
            <img
              src={foodCard.imgURL}
              className="h-full w-full rounded-2xl scale-75 transition-transform duration-400 group-hover:scale-100 cursor-pointer "
              alt=""
            />
          </div>

          <div className="mt-4 space-y-1 px-4">
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
            <button className="btn w-full align-bottom mt-10 mb-2 buttonPrimary rounded-full scale-90 ">
              View Details
            </button>
          </Link>
        </div> */}