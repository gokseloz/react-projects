import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [items, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [value, setValue] = useState(0);

  const fetchItems = () => {
    fetch(url)
      .then((response) => {
        if(response.status >= 200 && response.status <= 299){
          return response.json()
        }
        else{
          setLoading(false)
          setError(true)
        }
      })
      .then(data => {
        setItem(data);
        setLoading(false);
      })
  };

  useEffect(() => {
    fetchItems();
  }, []);

  if (error){
    return (
      <section className="section loading">
        <h1>Error...</h1>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  console.log(items);

  const { company, dates, duties, title } = items[value];

  return (
    <div className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {items.map((i, index) => {
            return (
              <button
                key={i.id}
                className={`job-btn ${index === value && "active-btn"}`}
                onClick={() => setValue(index)}
              >
                {i.company}
              </button>
            );
          })}
        </div>

        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight className="job-icon"/>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </div>
  );
}

export default App;
