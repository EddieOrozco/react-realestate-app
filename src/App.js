import React from "react";
import Header from "./components/Header/Header.js";
import Filter from "./components/Filter/Filter.js";
import Listings from "./components/Listings/Listings.js";

function App() {
  return (
    <div className="content-area">
      <Header />
      <section>
        <Filter />
        <Listings />
      </section>
    </div>
  );
}

export default App;
