import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accreditations from "./components/acc/Accreditations";
import Header from "./components/header/Header";
import Nav from "./components/navbar/Navbar";
import Offers from "./components/offers/Offers";
import Food from "./components/food/Food";
// import Courses from "./components/courses/Courses";
import Explore from "./components/explore/Explore";
import LiveClass from "./components/live-class/LiveClass";
import Learners from "./components/learners/Learners";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Accreditations />
      <Offers />
      <Food />
      {/* <Courses /> */}
      <Explore />
      <LiveClass />
      <Learners />
    </div>
  );
}

export default App;
