import React from "react";
import { useGlobalContext } from "../context";

const Plugins = () => {
  const { closeSubMenu } = useGlobalContext();

  return (
    <section className="main-bg" onMouseOver={closeSubMenu}>
      <h1>Plugins Component</h1>
    </section>
  );
};

export default Plugins;
