import React, { useState } from "react";

const Tour = (props) => {
  const { id, name, info, image, price, removeItem } = props;
  const [readMore, setReadMore] = useState(true);
  const [euro, setEuro] = useState(false);
  const usdToEuro = 1.22;

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price" onClick={() => setEuro(!euro)}>
            {euro ? `€ ${(parseFloat(price.replace(",", ".")) * usdToEuro).toFixed(3)}` : `$ ${price}`}
          </h4>
        </div>
        <p>
          {readMore ? `${info.substr(0, 200)}...` : info}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Read More" : "Show Less"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeItem(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
