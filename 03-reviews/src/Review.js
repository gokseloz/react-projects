import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const[index, setIndex] = useState(0)
  const {id, name, job, image, text} = people[index]
  
  const prevPerson = () => {
    index === 0 ? setIndex(people.length - 1) : setIndex(index -1)
  }

  const nextPerson = () => {
    index === people.length - 1 ? setIndex(0) : setIndex(index + 1)
  }

  const randomPerson = () => {
    let randomNum = Math.floor(Math.random() * people.length);

    (randomNum === index) && (randomNum = index + 1)
    (randomNum >= people.length) && (randomNum = 0)

    return randomNum
  };
  
//------------------------
// ORIGINAL PROJECT CODES
//------------------------
/*
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
*/

  return (
    <article className="review" key={id}>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn"  onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={() => setIndex(randomPerson)}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
