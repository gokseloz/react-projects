import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#451a7a").all(10));
  const [show, setShow] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  return (
    <>
      <section className="container">
        <span className={`copyPupUp ${show ? "isShowed" : ""}`}>
          Copied to Clipboard
        </span>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={error ? "error" : ""}
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
              setShow={setShow}
              show={show}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
