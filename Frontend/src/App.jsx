import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact/Contect";

function App() {

  return (
    <Router basename="/" >
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </>

    </Router>
  )
}

export default App
