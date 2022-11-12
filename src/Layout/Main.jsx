import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <section className="max-w-[1440px] mx-auto">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default Main;
