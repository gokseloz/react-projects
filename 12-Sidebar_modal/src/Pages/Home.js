import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "../context";

const Home = () => {
  // const data = useContext(AppContext); //First method
  const data = useGlobalContext(); // Second method

  console.log(data);
  return (
    <main>
      <button className="sidebar-toggle" onClick={data.openSideBar}>
        <FaBars />
      </button>
      <button className="btn" onClick={data.openModal}>
        show modal
      </button>
      <h1 className="header">Home Page</h1>
    </main>
  );
};

export default Home;
