import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState(false);
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="navbar-start">
          {/* small device */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <i className="fas fa-code"></i>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
            
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all/course">Courses</Link>
            </li>
            <li>
              <Link to="/all/course">Gallary</Link>
            </li>
            <li>
              <Link to="/my/class">My Class</Link>
            </li>
            <li>
              <Link to="/hire">Hire</Link>
            </li>
            <li>
              <Link to="/user/profile">Profile</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {searchInput ? (
            <div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          ) : (
            <div>
              <i
                style={{ cursor: "pointer" }}
                onClick={() => setSearchInput(!searchInput)}
                className="fas mx-5 fa-search"
              ></i>
            </div>
          )}

          <Link to="/user/login" className="btn btn-sm btn-neutral">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
