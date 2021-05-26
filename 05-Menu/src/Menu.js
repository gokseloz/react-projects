import React, { useState } from "react";

const Menu = ({ items }) => {
  const [currency, setCurrency] = useState(false);

  return (
    <>
      <form action="#">
        <select onChange={() => setCurrency(!currency)}>
          <option value="$">$</option>
          <option value="€">€</option>
        </select>
      </form>

      <div className="section-center">
        {items.map((item) => {
          const { id, title, img, desc, price } = item;
          return (
            <article key={id} className="menu-item">
              <div className="img-wrapper">
                <img src={img} alt={title} className="photo" />
              </div>

              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">
                    {currency ? "€" : "$"}
                    {price}
                  </h4>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
