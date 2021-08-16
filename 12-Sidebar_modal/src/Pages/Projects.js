import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "../context";

const Projects = () => {
  // const data = useContext(AppContext); //First method
  const data = useGlobalContext(); // Second method

  return (
    <main>
      <button className="sidebar-toggle" onClick={data.openSideBar}>
        <FaBars />
      </button>
      <button className="btn" onClick={data.openModal}>
        show modal
      </button>
      <h1 className="header">Projects Page</h1>
    </main>
  );
};

export default Projects;
