import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const { logIn } = useContext(AuthContext);
  const [showPssword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogIn = (data) => {
    const { email, password } = data;

    logIn(email, password)
      .then((result) => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your are logged in",
            showConfirmButton: false,
            timer: 1800
          });
        navigate("/");
        console.log(result);
      })
      .catch((error) => {
        Swal.fire({
            icon: "error",
            title: "Oops... ",
            text: "Seems your password or email may be wrong",
            footer: 'Please provide right email/password'
          });
        console.log(error.message);
      });
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center items-center mx-auto text-[#1f1d1b] ">
      <h1 className="mt-10 lg:mt-16 mb-6 text-4xl md:text-5xl lg:text-5xl font-bold">
        Log In
      </h1>
      <form
        onSubmit={handleSubmit(handleLogIn)}
        className="flex flex-col gap-5 min-w-[350px] md:w-1/3 lg:w-1/3 px-5 py-10 mx-3  border-[#1f1d1b] border-2 rounded-xl"
      >
        <div>
          <h2 className="text-lg font-semibold mb-1">Your email</h2>
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
            placeholder="Enter email"
            className="input  input-md w-full "
          />
          {errors.email && (
            <span className="text-red-600">*Please enter your name</span>
          )}
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-1">Your Password</h2>
          <div className="flex relative w-full">
            <div className="w-full">
              <input
              type={showPssword ? "text" : "password"}
              name="password"
              {...register("password", { required: true })}
              placeholder="Enter password"
              className="input input-bordered input-md w-full "
            />
            {errors.password && (
              <span className="text-red-600">*Please enter your password</span>
            )}
              
            </div>
            
            <span
              className=" absolute right-3 top-3 cursor-pointer"
              onClick={() => setShowPassword(!showPssword)}
            >
              {showPssword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </span>
          </div>
        </div>
        <input className="btn buttonPrimary" type="submit" value={"Log In"} />
      </form>
    </div>
  );
};

export default LogIn;
