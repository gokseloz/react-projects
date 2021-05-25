import React, { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const Question = (props) => {
  let { title, info } = props;
  const [accordion, setAccordion] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setAccordion(!accordion)}>
          {accordion ? <FaMinusCircle /> : <FaPlusCircle />}
        </button>
      </header>
      <p>{accordion ? info : ""}</p>
    </article>
  );
};

export default Question;
