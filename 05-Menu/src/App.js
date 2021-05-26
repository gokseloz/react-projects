import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menu, setMenu] = useState(items);
  

  function filterItems(category) {
    
    if (category === "All") {
      return setMenu(items);
    }

    const newItems = items.filter((item) => item.category === category);
    setMenu(newItems);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>menu</h2>
          <div className="underline"></div>
        </div>
        <Categories items={items} filterItems={filterItems} />
        <Menu items={menu} />
      </section>
    </main>
  );
}

export default App;
