// import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../pages/footer/Footer";

const Mainlayout = () => {
  return (
    <div className="max-w-full px-6">
      <section className="flex justify-between shadow-lg py-4 px-2">
        <h1 className="text-xl font-bold">Amazone</h1>
        <nav>
          <ul className="flex gap-4">
            <NavLink 
              to="/Home"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400 px-3 py-1 rounded-md text-white font-semibold" : ""
              }
            >
             Home
            </NavLink>
            <NavLink 
              to="/Products"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400 px-3 py-1 rounded-md text-white font-semibold" : ""
              }
            >
             Products
            </NavLink>
            <NavLink 
              to="/Dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-green-400 px-3 py-1 rounded-md text-white font-semibold" : ""
              }
            >
             Dashboard
            </NavLink>
            
          </ul>
        </nav>
      </section>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Mainlayout;
