import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar";
import Contact from "./Pages/Contact/Contect";
import PatientList from "./components/patient/PatientList.jsx";
import AddPatient from "./components/patient/AddPatient.jsx";
import UpdatePatient from "./components/patient/UpdatePatient.jsx";
import PatientProfile from "./components/patientDashboard/PatientProfile.jsx";
import PatientDashboard from "./Pages/PatientDashboard.jsx";
import PatientRecord from "./components/patient/PatientRecord.jsx";
import AddMedicalRecord from "./components/patient/AddMedicalRecord.jsx";
import AddDoctor from "./components/Doctor/AddDoctor.jsx";
import DoctorDashboard from "./components/DoctorDashboard/DoctorDashboard.jsx";
import Login from "./Pages/Login/Login.jsx";

function App() {
  return (
    <Router>
      <>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/patient" element={<PatientList />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/add" element={<AddPatient />} />
            <Route path="/patientRecord/:id" element={<PatientRecord/>}/>
            <Route path="/update/:id" element={<UpdatePatient />} />
            <Route path="/addRecord/:id" element={<AddMedicalRecord />} />
            <Route path="/dashboard/:id" element={<PatientDashboard />} />
            <Route path="/Profile/:id" element={<PatientProfile />} />
            <Route path="/Doctor/:id" element={<DoctorDashboard />} />
            

            <Route path="/addDoctor" element={<AddDoctor/>} />
            
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;