import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accreditations from "./components/acc/Accreditations";
import Header from "./components/header/Header";
import Nav from "./components/navbar/Navbar";
import Offers from "./components/offers/Offers";
// import Courses from "./components/courses/Courses";
import Explore from "./components/explore/Explore";
import LiveClass from "./components/live-class/LiveClass";
import Learners from "./components/learners/Learners";
import CTA from "./components/CTA/CTA";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Accreditations />
      <Offers />
      {/* <Courses /> */}
      <Explore />
      <LiveClass />
      <Learners />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
