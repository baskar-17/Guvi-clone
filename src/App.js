import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accreditations from "./components/acc/Accreditations";
import Header from "./components/header/Header";
import Nav from "./components/navbar/Navbar";
import Offers from "./components/offers/Offers";
import Food from "./components/food/Food";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Accreditations />
      <Offers />
      <Food />
    </div>
  );
}

export default App;
