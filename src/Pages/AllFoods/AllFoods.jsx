import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FoodCard from "../../Components/FoodCard/FoodCard";

const AllFoods = () => {
  const [allFoods, setAllFoods] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://restaurant-server-side-sigma.vercel.app/foodItems")
      .then((res) => {
        setCount(res.data.length);
      });
  }, []);

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];
  const [currentPage, setCurrentPage] = useState();

  useEffect(() => {
    axios
      .get(
        `https://restaurant-server-side-sigma.vercel.app/foodItems?page=${currentPage}&size=${itemsPerPage}`
      )
      .then((res) => {
        setAllFoods(res.data);
      });
  }, [currentPage, itemsPerPage]);

  const handleItemsPerpage = (e) => {
    const value = e.target.value;
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <div className="max-w-5/6 mx-auto py-20 flex flex-col  items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  ">
        {allFoods.map((foodCard) => (
          <FoodCard foodCard={foodCard}></FoodCard>
        ))}
      </div>
      <div className="my-20  ">
        <p>current page number : {currentPage}</p>
        {pages.map((page) => (
          <button className="btn mx-3" onClick={() => setCurrentPage(page)}>
            {" "}
            {page}{" "}
          </button>
        ))}
        <select
          className="bg-white btn"
          defaultValue={itemsPerPage}
          onChange={handleItemsPerpage}
        >
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
