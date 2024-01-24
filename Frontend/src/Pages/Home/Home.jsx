import React from "react";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Footer from "../../components/Footer";
import FAQ from "./components/FAQ";
import Navbar from "../../components/Navbar.jsx";
function Home() {
  return (
    <div className="bg-gray-100">
      <div id="home" className=" pb-10 ">
        <div >
          <Hero />
        </div>
        <Intro />
        <FAQ  />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
