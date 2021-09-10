import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Cocktail = ({ image, name, id, info, glass }) => {
  const { isDark } = useGlobalContext();

  return (
    <article className={`cocktail ${isDark && "cocktail-dark"} `}>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className={`cocktail-footer ${isDark && "cocktail-footer-dark"} `}>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary">
          Details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
