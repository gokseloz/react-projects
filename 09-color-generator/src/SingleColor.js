import React, { useEffect } from "react";

const SingleColor = ({ rgb, weight, index, hexColor, setShow, show }) => {
  const bcg = rgb.join(",");
  const hexColorOnBoard = `#${hexColor}`; //hexColor comes from the App component and it equals to color.hex which is without "#"

  useEffect(() => {
    const copyTimeOut = setTimeout(() => {
      setShow(false);
    }, 2000);
    return () => {
      clearTimeout(copyTimeOut);
    };
  }, [show, setShow]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexColorOnBoard}</p>
      <button
        onClick={() => {
          setShow(true);
          navigator.clipboard.writeText(hexColorOnBoard);
        }}
        type="button"
        className="copyBtn"
        style={{ padding: ".2rem .4rem", borderRadius: "5px" }}
      >
        Copy
      </button>
    </article>
  );
};

export default SingleColor;
