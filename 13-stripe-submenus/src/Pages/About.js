import React from "react";
import { useGlobalContext } from "../context";

const About = () => {
  const { closeSubMenu } = useGlobalContext();

  return (
    <section className="main-bg" onMouseOver={closeSubMenu}>
      <h1>About Component</h1>
    </section>
  );
};

export default About;
