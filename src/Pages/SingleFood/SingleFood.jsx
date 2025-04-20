import { useLoaderData } from "react-router-dom";

const SingleFood = () => {
    const singleFoodData = useLoaderData()
    const {foodName,imgURL} = singleFoodData
    return (
        <div>
            <img src={imgURL} alt="" />
            <p> {foodName} </p>
        </div>
    );
};

export default SingleFood;