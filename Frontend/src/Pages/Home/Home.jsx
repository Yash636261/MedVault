import React from "react";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Footer from "../../components/Footer";
function Home() {
  return (
    <div>
      <div id="home" className=" px-5 pb-10 bg-slate-900">
        <div className="min-h-screen">
          <Hero />
        </div>
        <Intro />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
