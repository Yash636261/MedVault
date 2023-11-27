import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact/Contect";
import PatientList from "./components/PatientList";
import AddPatient from "./components/AddPatient.jsx";
import UpdatePatient from "./components/UpdatePatient";
import PatientProfile from "./components/patientDashboard/PatientProfile.jsx";
import PatientDashboard from "./Pages/PatientDashboard.jsx";
import PatientRecord from "./components/patientRecord.jsx";

function App() {
  return (
    <Router basename="/">
      <>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/patient" element={<PatientList />}></Route>
            <Route path="/add" element={<AddPatient />} />
            <Route path="/patientRecord" element={<PatientRecord/>}/>
            <Route path="/update/:id" element={<UpdatePatient />} />
            <Route path="/dashboard/:id" element={<PatientDashboard />} />
            <Route path="/Profile/:id" element={<PatientProfile />} />
          </Routes>
          <Footer />
        </div>
      </>
    </Router>
  );
}

export default App;
