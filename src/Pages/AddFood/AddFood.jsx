import React, { useContext } from "react";

import { useForm } from "react-hook-form";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import axios from "axios";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddFood = (data) => {

    axios.post('http://localhost:5000/foodItems',data)
    .then(result =>{
        alert('added successfully',result)
        console.log(result);
        
    })
    console.log(data);
  };
  return (
    <div className="flex flex-col justify-center items-center mx-auto text-[#302e2d] ">
      <h1 className="mt-10 lg:mt-16 mb-6 text-4xl md:text-5xl lg:text-5xl font-bold">
        Add Your Food
      </h1>
      <div className="min-w-[350px] md:w-1/3 lg:w-1/3 border-[#b9400354] border-dashed border-4 p-2 rounded-3xl">
        
      <form
        className="flex flex-col gap-5 px-8 py-10   rounded-2xl bg-[#dcb842] text-white" 
        onSubmit={handleSubmit(handleAddFood)}
      >
        <div>
          <h2 className="text-lg font-semibold mb-1">Food Name</h2>
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
            placeholder="Enter food name"
            className="input focus:outline-[#aaa55cac] border-none input-md w-full text-[#302e2d] "
          />
          {errors.name && (
            <span className="text-red-600">*This field is required</span>
          )}
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-1">ImageURL</h2>
          <input
            type="text"
            name="imgURL"
            {...register("imgURL", { required: true })}
            placeholder="Enter imageUTL"
            className="input focus:outline-[#aaa55cac] border-none input-md w-full text-[#302e2d] "
          />
          {errors.imgURL && (
            <span className="text-red-600">*This field is required</span>
          )}
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-1"> Category</h2>
          <input
            type="text"
            name="category"
            {...register("category", { required: true })}
            placeholder="Enter food category"
            className="input focus:outline-[#aaa55cac] border-none input-md w-full text-[#302e2d] "
          />
          {errors.category && (
            <span className="text-red-600">*This field is required</span>
          )}
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-1">Quantity</h2>
          <input
            type="number"
            name="quantity"
            {...register("quantity", { required: true })}
            placeholder="Enter food quantity"
            className="input focus:outline-[#aaa55cac] border-none input-md w-full text-[#302e2d] "
          />
          {errors.quantity && (
            <span className="text-red-600">*This field is required</span>
          )}
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-1">Price</h2>
          <input
            type="text"
            name="price"
            {...register("price", { required: true })}
            placeholder="Enter food category"
            className="input focus:outline-[#aaa55cac] border-none input-md w-full text-[#302e2d] "
          />
          {errors.price && (
            <span className="text-red-600">*This field is required</span>
          )}
        </div>
        {/* =====user default info */}
        <div>
          <h2 className="text-lg font-semibold mb-1">Added By</h2>
          <div className="flex flex-col lg:flex-row justify-between gap-4">
            <div className="w-full">
              <input
                type="text"
                name="userName"
                {...register("userName", { required: true })}
                placeholder="user name"
                defaultValue={user.displayName}
                className="input focus:outline-[#aaa55cac] border-none input-md w-full text-[#302e2d] "
              />
              {errors.userName && (
                <span className="text-red-600">
                  *This field is required
                </span>
              )}
            </div>
            <div className="w-full">
              <input
                type="email"
                name="userEmail"
                {...register("userEmail", { required: true })}
                placeholder="user email"
                defaultValue={user.email}
                className="input focus:outline-[#aaa55cac] border-none input-md w-full text-[#302e2d] "
              />
              {errors.userEmail && (
                <span className="text-red-600">
                  *This field is required
                </span>
              )}
            </div>
          </div>
        </div>
        {/* ================ */}

        <div>
          <h2 className="text-lg font-semibold mb-1">Food Origin</h2>
          <input
            type="text"
            name="origin"
            {...register("origin", { required: true })}
            placeholder="Enter food quantity"
            className="input focus:outline-[#aaa55cac] border-none input-md w-full text-[#302e2d] "
          />
          {errors.origin && (
            <span className="text-red-600">*This field is required</span>
          )}
        </div>

        <fieldset className="fieldset">
          <legend className=" text-lg font-semibold mb-1">
            Short Description
          </legend>
          <textarea className="textarea  focus:outline-[#aaa55cac] border-none input-md w-full text-[#302e2d]" {...register("shortDes", { required: true })} placeholder="Short description of your food "></textarea>
          {errors.shortDes && (
            <span className="text-red-600">*This field is required</span>
          )}
        </fieldset>

<input type="submit" value={'Add My Food'} className="btn border-none" />
        
      </form>
      </div>
    </div>
  );
};

export default AddFood;
