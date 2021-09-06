import React from "react";
import { useGlobalContext } from "../context";

const Customers = () => {
  const { closeSubMenu } = useGlobalContext();

  return (
    <section className="main-bg" onMouseOver={closeSubMenu}>
      <h1>Customers Component</h1>
    </section>
  );
};

export default Customers;
