import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = (e) => {
    theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleKeyUp = (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      toggleTheme();
    }
  };

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Overreacted</h1>
          <form className="theme-switch-container">
            <label
              className="theme-switch-label"
              htmlFor="checkbox"
              tabIndex="0"
              onKeyUp={handleKeyUp}
            >
              <input type="checkbox" id="checkbox" onChange={toggleTheme} />
              <div
                className={`slider ${
                  theme === "light-theme" ? "btn-light" : "btn-dark"
                }`}
              ></div>
            </label>
          </form>
        </div>
      </nav>
      <section className="articles">
        {data.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </section>
    </main>
  );
}

export default App;
