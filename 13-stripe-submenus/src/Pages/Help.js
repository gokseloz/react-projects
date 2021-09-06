import React from "react";
import { useGlobalContext } from "../context";

const Help = () => {
  const { closeSubMenu } = useGlobalContext();

  return (
    <section className="main-bg" onMouseOver={closeSubMenu}>
      <h1>Help Component</h1>
    </section>
  );
};

export default Help;
