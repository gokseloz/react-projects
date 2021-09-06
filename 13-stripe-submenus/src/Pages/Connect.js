import React from "react";
import { useGlobalContext } from "../context";

const Connect = () => {
  const { closeSubMenu } = useGlobalContext();

  return (
    <section className="main-bg" onMouseOver={closeSubMenu}>
      <h1>Connect Component</h1>
    </section>
  );
};

export default Connect;
