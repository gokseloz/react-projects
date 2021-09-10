import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm, setLoading, isDark } = useGlobalContext();

  const searchCocktail = (e) => {
    setLoading(true);
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className={`section search ${isDark && "section-dark"} `}>
      <form
        className={`search-form ${isDark && "search-form-dark"} `}
        onSubmit={handleSubmit}
      >
        <div className={`form-control ${isDark && "form-control-dark"} `}>
          <label htmlFor="name">Search your favourite cocktails</label>
          <input type="text" id="name" onChange={searchCocktail} autoFocus />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
