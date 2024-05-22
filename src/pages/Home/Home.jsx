import React from "react";
import Header from "../../component/Header/Header";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Home;
