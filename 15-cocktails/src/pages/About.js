import React from "react";
import { useGlobalContext } from "../context";

const About = () => {
  const { isDark } = useGlobalContext();

  return (
    <div className={`${isDark && "about-section-dark"} `}>
      <section className="section about-section">
        <h1 className="section-title">about us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem
          debitis voluptatibus voluptatem beatae rerum ad labore ducimus ea,
          ullam fuga blanditiis voluptatum alias fugit animi, consequatur odio
          voluptate! Rem error voluptate corrupti dicta vitae, voluptatem sit
          neque fugiat quos?
        </p>
      </section>
    </div>
  );
};

export default About;
