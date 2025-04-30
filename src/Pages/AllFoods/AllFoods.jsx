import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllFoods = () => {

  const [allFoods,setAllFoods] = useState([])
  const [count, setCount] = useState(0)

  useEffect(()=>{
    axios.get('http://localhost:5000/foodItems')
    .then(res=>{
      setCount(res.data.length)
    })
  },[])


  const [itemsPerPage, setItemsPerPage] = useState(10);
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];
  const [currentPage, setCurrentPage] = useState()


  

  useEffect(()=>{
    axios.get(`http://localhost:5000/foodItems?page=${currentPage}&size=${itemsPerPage}`)
    .then(res=>{

      setAllFoods(res.data)

    })
  },[currentPage,itemsPerPage])
  
  
  const handleItemsPerpage = (e)=>{
    const value = e.target.value
    setItemsPerPage(value)
    setCurrentPage(1)

  }

  return (
    <div className="max-w-5/6 mx-auto py-20 flex flex-col  items-center">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  ">
      {allFoods.map((foodCard) => (
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
      ))}

    </div>
      <div className="my-20  ">
        <p>current page number : {currentPage}</p>
        {
          pages.map(page=> <button className="btn mx-3" onClick={()=> setCurrentPage(page)}> {page} </button> )
        }
        <select className="bg-white btn" defaultValue={itemsPerPage} onChange={handleItemsPerpage}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
    </div>
  );
};

export default AllFoods;

{
  /* <div
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
        </div> */
}
