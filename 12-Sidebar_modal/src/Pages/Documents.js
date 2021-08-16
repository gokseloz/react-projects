import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Documents = () => {
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
      <h1 className="header">Documents Page</h1>
    </main>
  );
};

export default Documents;
