import React, { useState, useEffect } from "react";
import data from "./data";
function App() {
  const [number, setNumber] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);
  const [wordNumber, setWordNumber] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    let amount = parseInt(number);

    amount < 0 && (amount = 0);
    amount > 9 && (amount = 9);

    setParagraphs(data.slice(0, amount));
  }
  useEffect(() => {
    document
      .querySelector(".lorem-text")
      .addEventListener("mousemove", countWords);
    function countWords() {
      let allText = window.getSelection().toString().trim();
      let marksLessText = allText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
      let marksLessTextLength = marksLessText.split(" ").length;
      setWordNumber(marksLessTextLength);
    }
  }, [number, paragraphs]);

  return (
    <>
      <section className="section-center">
        <h3>Sick of Lorem Ipsum?</h3>
        <form action="#" className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">Paragraphs:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </form>
        <span>Selected Words: {wordNumber}</span>
        <article className="lorem-text">
          {paragraphs.map((para, paraIndex) => {
            return (
              <p key={paraIndex} className="paragraph">
                {para}
              </p>
            );
          })}
        </article>
      </section>
    </>
  );
}

export default App;
