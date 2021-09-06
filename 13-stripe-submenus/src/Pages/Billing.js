import React from "react";
import { useGlobalContext } from "../context";

const Billing = () => {
  const { closeSubMenu } = useGlobalContext();

  return (
    <section className="main-bg" onMouseOver={closeSubMenu}>
      <h1>Billing Component</h1>
    </section>
  );
};

export default Billing;
