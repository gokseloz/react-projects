import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { useGlobalContext } from "../context";

const Home = () => {
  const { isDark } = useGlobalContext();

  return (
    <main className={`${isDark && "main-dark"} `}>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
