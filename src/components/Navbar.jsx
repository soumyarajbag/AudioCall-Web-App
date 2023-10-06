import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
const routes = [
  { name: "HOME", link: "/" },
  { name: "CONTACTS", link: "/contacts" },
];

const Navbar = () => {
  const { currentUser, signOut } = useContext(AuthContext);
  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav className="font-[poppins]">
        <div className="nav shadow-2xl xl:rounded-b-2xl  max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-6 px-4">
          <Link to="/" className="flex items-center">
            <span className="self-center text-white text-2xl font-semibold whitespace-nowrap pl-5 dark:text-[#0addf0]">
              Call.io
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={handleNav}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden  "
            aria-controls="navbar-default"
            aria-expanded={handleNav}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              nav ? "" : "hidden"
            } transition-all duration-500 scroll-smooth ease-in-out w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col gap-5 md:items-center p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              {routes.map((route, index) => (
                <Link
                  key={index}
                  to={route.link}
                  className="block py-2 pl-3 pr-4   text-xl   md:hover:bg-transparent md:border-0  md:p-0 font-semibold text-white  hover:text-[#43c9bc] hover:cursor-pointer hover:scale-95 transition-colors duration-500"
                  aria-current="page"
                >
                  {route.name}
                </Link>
              ))}
              {currentUser ? (
                <li className="flex flex-row gap-5 items-center px-3 py-2 text-white">
                  {currentUser != null && (
                    <button
                      onClick={signOut}
                      className="bg-red-700 rounded-lg px-3 py-2 text-white hover:bg-red-600 transition-colors duration-500"
                    >
                      Sign Out
                    </button>
                  )}
                </li>
              ) : (
                <Link to="/auth">
                  <li>
                    <button className="button flex flex-row gap-2 items-center border-2 rounded-full px-3 py-2 text-white">
                      <h1 className="text-lg">Sign In</h1>
                      <BsFillArrowUpRightCircleFill className="hover:scale-105" />
                    </button>
                  </li>
                </Link>
              )}

              {/* <li>
                <button className="button flex flex-row gap-2 items-center border-2 rounded-full px-3 py-2 text-white"
                  onClick={handleSignin}
                >
                  <h1 className="text-lg">Sign In</h1>
                  <BsFillArrowUpRightCircleFill className="hover:scale-105" />
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
// {currentUser && (
//   <div>
//     {currentUser.email} + {currentUser.phone}
//   </div>
// )}
// {currentUser != null && <button onClick={signOut}>Sign Out</button>}
