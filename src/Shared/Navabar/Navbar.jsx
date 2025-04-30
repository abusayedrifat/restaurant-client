
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import auth from "../../firebase.config";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);


  const navbar = (
    <>
      <li className="font-light text-lg ">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-light text-lg ">
        <NavLink to="/allFoods">All Foods</NavLink>
      </li>
      <li className="font-light text-lg ">
        <NavLink to="/foodGallary"> Food Gallary</NavLink></li>
    </>
  );

  const handleLogOut = () => {
    logOut(auth)
      .then((result) => console.log(result))
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <div className="flex p justify-between items-center bg-[#f0bd57] h-18">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navbar}
              </ul>
            </div>
            <p className="text-[#c9b99d]">.</p>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navbar}</ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                className="m-1 bg-transparent border-amber-600 text-white hover:text-black hover:cursor-pointer"
              >
                {user ? (
                  <img
                    src={user.photoURL}
                    alt=""
                    className="h-16 w-16 rounded-full border border-amber-300"
                  />
                ) : (
                  <div className="flex items-center gap-2 text-[#202020]">
                    <NavLink to="/logIn">
                      <button className="btn">SignIn</button>
                    </NavLink>
                    <span>Or</span>
                    <NavLink to="/register">
                      <button className="btn">SignUp</button>
                    </NavLink>
                  </div>
                )}
              </div>
              <ul
                tabIndex={0}
                className={
                  user
                    ? "dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow mx-auto"
                    : "dropdown-content"
                }
              >
                <li className="text-center">
                  {user && (

                    <ul>
                        <li>
                         <Link to="/logIn">
                      <button onClick={() => handleLogOut()}>Log Out</button>
                    </Link>   
                        </li>
                        <li>
                            <Link to='/myOrders'>My Orders  </Link>
                        </li>
                        <li>
                            <Link to='/addFood'> Add Food </Link>
                        </li>
                        <li>
                            <Link to='/myFoods'>My Foods</Link>
                        </li>
                    </ul>
                    
                  )}
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
