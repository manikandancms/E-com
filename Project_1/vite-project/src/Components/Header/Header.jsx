import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Custom_Hooks/UseOnlineStatus"; 
// If you have a custom hook, import it. Otherwise, use navigator.onLine
// import useOnlineStatus from "../../hooks/useOnlineStatus";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  const Data = useOnlineStatus()


 

  return (
    <div className="2xl:container mx-auto mt-1 ">
      <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 h-[10vh] ">
        <div className="flex flex-row justify-items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://ik.imagekit.io/mani2/image/new-Ecom@1,25x.png?updatedAt=1750886673213"
              alt="logo-"
              className="h-[90px] md:h-[95px] hover:scale-75 transition-transform duration-500 rounded-lg cursor-pointer"
            />

            {/* Online Status */}
            <span className="flex items-center gap-2">
              <span
                className={`h-3 w-3 rounded-full ${
                  Data ? "bg-green-400 animate-pulse" : "bg-red-500"
                }`}
              ></span>
              <span
                className={`text-sm font-medium transition-all duration-300 ease-in-out ${
                  Data ? "text-green-400" : "text-red-400"
                }`}
              >
                {Data ? "Online" : "Offline"}
              </span>
            </span>
          </div>

 

          

          {/* Mobile Menu Icon (only when menu is closed) */}
          <div className="md:hidden flex gap-2 items-center">
            {!menuOpen && (
              <svg
                onClick={toggleMenu}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1.5em"
                height="1.5em"
                className="hover:scale-125 transition-transform duration-500 cursor-pointer text-black rounded-md "
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10 6a4 4 0 1 0-8 0a4 4 0 0 0 8 0m0 12a4 4 0 1 0-8 0a4 4 0 0 0 8 0M22 6a4 4 0 1 0-8 0a4 4 0 0 0 8 0m0 12a4 4 0 1 0-8 0a4 4 0 0 0 8 0"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div
          className={
            `${menuOpen ? "flex absolute top-0 left-0 w-full z-50 bg-slate-800/95 py-8 px-2" : "hidden"} md:static md:flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 md:bg-pink-600 rounded-lg md:py-4 md:px-2 md:h-[10vh]`
          }
        >
          {/* Close Icon inside overlay menu (mobile only) */}
          {menuOpen && (
            <div className="absolute top-4 right-4 md:hidden z-50">
              <svg
                onClick={toggleMenu}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="2em"
                height="2em"
                className="hover:scale-125 transition-transform duration-500 cursor-pointer bg-red-700 text-white rounded-lg "
              >
                <g fill="none" fillRule="evenodd">
                  <path d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879 6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"
                  />
                </g>
              </svg>
            </div>
          )}
          {/* Mobile and desktop nav links */}
          <>
            {[
              { label: "Home", to: "/" },
              { label: "Products", to: "/products" },
              { label: "🛒 My Card", to: "/contact" },
              { label: "About", to: "/comment" }
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-white hover:text-slate-300 hover:scale-125 transition-transform duration-500 cursor-pointer text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Online status indicator
          <span className="ml-4 text-lg text-white hover:text-slate-200">
            {isOnline ? "🟢 Online" : "🔴 Offline"}
          </span> */}

          </>
        </div>
      </div>
    </div>
  );
};

export default Header;