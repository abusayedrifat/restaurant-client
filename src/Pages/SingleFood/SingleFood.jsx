import  {Link, useLoaderData}  from "react-router-dom";


const SingleFood = () => {
  const singleFoodData = useLoaderData();
  const { foodName, imgURL, description, price, purchased, rating, country, _id } =
    singleFoodData;
  return (
    <div className="flex flex-col md:flex-row justify-between gap-10 lg:gap-20 max-w-[1400px] mx-auto text-[#2e2e2e] px-6 py-20 ">
      <div className="lg:w-1/2 border-4 border-dashed border-[#b9400354] rounded-4xl">
        <img
          src={imgURL}
          alt=""
          className="w-full h-[350px] rounded-4xl p-2  object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 "
        />
      </div>
      <div className="lg:w-2/3 flex flex-col ">
        <p className="font-extrabold text-2xl mt lg:text-6xl"> {foodName} </p>

        <p className="mt-3">
          <span className="font-thin text-lg">Ratings </span>({rating}){" "}
        </p>
      <p className="lg:mt-6 font-semibold text-2xl"> {country} </p>
        <p className=" lg:mt-2 text-xl font-thin ">{description}</p>
        <p className="mt-2 font-extrabold text-xl lg:text-3xl text-[#b94003]">
          {price}$
        </p>
        <p className="mt-5 text-xl"> Total purchaed (/day) - {purchased} </p>

<Link to={`/foodPurchase/${_id}`} >

        <button className="btn buttonPrimary mt-3 w-full align-baseline">Prchase Now</button>
</Link>
      </div>
    </div>
  );
};

export default SingleFood;
