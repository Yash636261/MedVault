import React from "react";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Footer from "../../components/Footer";
import FAQ from "./components/FAQ";
function Home() {
  return (
    <div>
      <div id="home" className=" px-5 pb-10 " style={{
     background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
   }}>
        <div className="min-h-screen">
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
