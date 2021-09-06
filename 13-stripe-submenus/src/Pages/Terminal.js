import React from "react";
import { useGlobalContext } from "../context";

const Terminal = () => {
  const { closeSubMenu } = useGlobalContext();

  return (
    <section className="main-bg" onMouseOver={closeSubMenu}>
      <h1>Terminal Component</h1>
    </section>
  );
};

export default Terminal;
