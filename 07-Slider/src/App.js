import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight, FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState(true);

  function prevPerson() {
    setIndex(index === 0 ? people.length - 1 : index - 1);
  }

  function nextPerson() {
    setIndex(index === people.length - 1 ? 0 : index + 1);
  }
  /*
===============================================================================================================
Instead of prevPerson and nextPerson => Original Project made with useEffect below to prevent going bananas :)) 
To use this, uncomment the onclick function of prev and next buttons down below
===============================================================================================================
  useEffect(()=> {
    const lastIndex = people.length - 1
    if(index < 0){
      setIndex(lastIndex)
    }
    if(index > lastIndex){
      setIndex(0)
    }
  })
*/

  // =======================
  // Auto Slide Controlling
  // =======================
  useEffect(() => {
    if (value) {
      let slider = setInterval(() => {
        setIndex(index === people.length - 1 ? 0 : index + 1);
      }, 2000);
      return () => {
        clearInterval(slider);
      };
    }
  }, [index, value]);

  useEffect(() => {
    if (value === false) {
      return;
    }
  }, [index, value]);

  // =======================
  // Control slide with dots
  // =======================
  function dotClick(dotIndex) {
    setIndex(dotIndex);
  }

  return (
    <section className="section">
      <div className="title">
        <h2>reviews</h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, title, name, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex + 1 === index ||
            (index === 0 && personIndex === people.length - 1) // once app renders, place the last item on the left
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button
          className="prev"
          onClick={prevPerson} /* onClick={() => setIndex(index -1)}*/
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={nextPerson} /* onClick={() => setIndex(index +1)}*/
        >
          <FiChevronRight />
        </button>
      </div>
      <div className="controls">
        <div className="autoPlayBtn" onClick={() => setValue(!value)}>
          {value ? <FaPauseCircle /> : <FaPlayCircle />}
        </div>
        <div className="dotWrapper">
          {people.map((person, dotIndex) => {
            return (
              <span
                key={dotIndex}
                onClick={() => dotClick(dotIndex)}
                className={`dot ${index === dotIndex && "selected"}`}
              ></span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
