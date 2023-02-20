import React from "react";
import Accreditations from "./components/acc/Accreditations";
import Header from "./components/header/Header";
import Nav from "./components/navbar/Navbar";
import Offers from "./components/offers/Offers";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Accreditations />
      <Offers />
    </div>
  );
}

export default App;
