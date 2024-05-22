import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">Start a new Journey</h2>
          <br />
          <p className="header-text fs-18 fw-3">
            {" "}
            Our application is a comprehensive book search tool that provides
            detailed information on a wide range of books. It allows users to
            discover, explore, and learn about various titles, authors, and
            genres effortlessly.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
