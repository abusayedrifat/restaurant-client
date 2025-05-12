import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import auth from "../../firebase.config";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, googleLogIn, logOut } = useContext(AuthContext);
  const [showPssword, handleShowPasssword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (data, event) => {
    const { email, password } = data;
    const form = event.target;

    createUser(email, password)
      .then((result) => {
        console.log(result);

        Swal.fire({
          title: "Registered Successfully",
          icon: "success",
          draggable: true,
        });

        logOut(auth)
          .then((result) => {
            navigate("/logIn");
            form.reset();
            console.log(result);
          })
          .catch((error) => console.log(error.message));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleLogIn = (e) => {
    e.preventDefault();

    googleLogIn()
      .then((result) => {
        const user = result.user;
        axios
          .post("https://restaurant-server-side-sigma.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your are logged in",
              showConfirmButton: false,
              timer: 1800,
            });
            navigate(location?.state ? location?.state : "/");
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops... ",
          text: "Seems your password or email may be wrong",
          footer: "Please provide right email/password",
        });
        console.log(error.message);
      });
  };

  const handlePassword = (e) => {
    const password = e.target.value;
    console.log(password);

    if (password.length < 6) {
      toast.warn("password length must be 6 !");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.warn("at least one UpperCase latter");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.warn("at least one lowerCase letter");
      return;
    } else {
      toast.success("password is good to go now");
      return;
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <div className="flex flex-col justify-center items-center mx-auto ">
      <h1 className="mt-10 lg:mt-16 mb-6 text-4xl md:text-5xl lg:text-5xl font-bold">
        Register Now !
      </h1>
      <form
        action=""
        onSubmit={handleSubmit(handleRegister)}
        className="flex flex-col gap-5 min-w-[350px] md:w-1/3 lg:w-1/3 px-5 py-10 mx-3  border-[#c2c8cd60] border-2 rounded-xl bg-[#dcb842] text-white"
      >
        <div>
          <h2 className="text-lg font-semibold mb-1">Your name</h2>
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
            placeholder="Enter name"
            className="input focus:outline-[#aaa55cac] border-none input-md w-full text-[#302e2d]  "
          />
          {errors.name && (
            <span className="text-red-600">*Please enter your name</span>
          )}
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-1">Your Email</h2>
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
            placeholder="Enter email"
            className="input focus:outline-[#aaa55cac] border-none input-md w-full text-[#302e2d]  "
          />
          {errors.email && (
            <span className="text-red-600">*Please enter your email</span>
          )}
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-1">Your Photo</h2>
          <input
            type="text"
            name="photoURL"
            {...register("photoURL", { required: true })}
            placeholder="Enter photoURL"
            className="input focus:outline-[#aaa55cac] border-none input-md w-full text-[#302e2d]  "
          />
          {errors.photo && (
            <span className="text-red-600">*Please enter your photoURL</span>
          )}
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-1">Your Password</h2>
          <div className="flex items-center justify-between relative">
            <input
              type={showPssword ? "text" : "password"}
              name="password"
              onKeyUp={handlePassword}
              {...register("password", { required: true })}
              placeholder="Enter password"
              className="input focus:outline-[#aaa55cac] border-none input-md w-full text-[#302e2d]  "
            />
            <span
              onClick={() => handleShowPasssword(!showPssword)}
              className="absolute right-4 cursor-pointer text-xl"
            >
              {showPssword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </span>
          </div>
          {errors.password && (
            <span className="text-red-600">*Please enter your password</span>
          )}
        </div>
        <label>
          <input type="checkbox" checked /> Accept our
          <a href="#" className="italic underline text-blue-500">
            terms and condition
          </a>
        </label>

        <input className="btn" type="submit" value={"Register"} />
      </form>
      <p className="font-semibold text-lg my-5">
        Already have an account? Please{" "}
        <NavLink
          to={"/logIn"}
          className="font-bold underline text-blue-600 italic"
        >
          LogIn
        </NavLink>
      </p>
      <div className="flex items-center text-[#2e2e2e8c]">
        <hr className="border w-36 md:w-52" />
        <span className="px-4 text-[#2e2e2e] text-xl"> Or</span>
        <hr className="border w-36 md:w-52" />
      </div>
      <button
        onClick={handleGoogleLogIn}
        className="btn buttonPrimary my-8 min-w-[350px] md:w-1/3 lg:w-1/3"
      >
        Google Log In
      </button>
      <div>
        <ToastContainer
          position="top-left"
          autoClose={1800}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition:Bounce
        />
      </div>
    </div>
  );
};

export default Register;
