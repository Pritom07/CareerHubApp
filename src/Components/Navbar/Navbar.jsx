import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="navbar bg-base-100">
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
                <li className="text-xl font-bold text-[#757575]">
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "none")}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="text-xl font-bold text-[#757575]">
                  <NavLink
                    to="/appliedjobs"
                    className={({ isActive }) => (isActive ? "active" : " ")}
                  >
                    Applied Jobs
                  </NavLink>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost md:text-3xl font-extrabold text-[#1A1919]">
              CreerHubApp
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="text-xl font-bold text-[#757575]">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : " ")}
                >
                  Home
                </NavLink>
              </li>
              <li className="text-xl font-bold text-[#757575]">
                <NavLink
                  to="/appliedjobs"
                  className={({ isActive }) => (isActive ? "active" : " ")}
                >
                  Applied Jobs
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn bg-gradient-to-r from-indigo-500 to-purple-500 md:text-[20px] font-extrabold text-white">
              Star Applying
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
