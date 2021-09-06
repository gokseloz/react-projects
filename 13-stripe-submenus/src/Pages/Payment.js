import React from "react";
import { useGlobalContext } from "../context";

const Payment = () => {
  const { closeSubMenu } = useGlobalContext();

  return (
    <section className="main-bg" onMouseOver={closeSubMenu}>
      <h1>Payment Component</h1>
    </section>
  );
};

export default Payment;
