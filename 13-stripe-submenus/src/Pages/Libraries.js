import React from "react";
import { useGlobalContext } from "../context";

const Libraries = () => {
  const { closeSubMenu } = useGlobalContext();

  return (
    <section className="main-bg" onMouseOver={closeSubMenu}>
      <h1>Libraries Component</h1>
    </section>
  );
};

export default Libraries;
