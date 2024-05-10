import { Link, NavLink } from "react-router-dom";
import logo from "../assets/icons8-working-64 (1).png";
import useAuth from "../useAuth/useAuth";
import { CgProfile } from "react-icons/cg";

const Nav = () => {

  const {logOut, user}= useAuth()
  // const handleSignOut = ()=>{
  //   logOut()
  //   .then()
  //   .catch()
  // }




  return (
    <div className="navbar bg-base-100 p-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl flex item-center gap-10"
          >
            <NavLink to="/" className={({ isActive }) =>
              isActive ? "text-blue-400 text-xl font-bold" : "font-bold text-xl"
            }>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) =>
              isActive ? "text-blue-400 text-xl font-bold" : "font-bold"
            }>About</NavLink>
            <NavLink to="/register" className={({ isActive }) =>
              isActive ? "text-blue-400 text-xl font-bold" : "font-bold"
            }>Register</NavLink>
          </ul>
        </div>
        <div className=" flex items-center justify-center gap-1">
          <img src={logo} alt="" />
          <Link to="/" className=" font-bold text-3xl">
            Job<span className="text-blue-400">S</span>phere
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center gap-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-400 text-xl font-bold" : "font-bold text-xl"
            }
          >
            Home
          </NavLink>
          <NavLink to="/about"className={({ isActive }) =>
              isActive ? "text-blue-400 text-xl font-bold" : "font-bold text-xl"
            }>About</NavLink>
          <NavLink to="/register"className={({ isActive }) =>
              isActive ? "text-blue-400 text-xl font-bold" : "font-bold text-xl"
            }>Register</NavLink>
        </ul>
      </div>
      <div className="navbar-end">

      {
    user? <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-11 rounded-full">
                <img src={user?.photoURL || <CgProfile />
 } />
            </div>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-50 rounded-box md:w-52 w-20">
            <li>
                <button className="btn btn-sm  btn-ghost">{user?.displayName||'user name not found'}</button>

            </li>
            <li>
                <button
                    onClick={logOut}
                    className="btn btn-sm hover:bg-blue-400  bg-blue-300 text-white">Log out</button>

            </li>
        </ul>
    </div>
        :

         <Link
          className="bg-blue-400 md:w-28 w-15 h-10 text-xl btn hover:bg-blue-500 rounded-2xl  text-white font-bold"
          to="/login"
        >
          Login
        </Link> 



        // <Link to='/login'>
        //     <button className="bg-amber-600 md:w-28 w-15 h-10 text-xl btn rounded-2xl  text-white font-bold">Login</button>
        // </Link>
}





       
      </div>
    </div>
  );
};

export default Nav;
