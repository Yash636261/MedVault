import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contect";
import PatientList from "./components/patient/PatientList.jsx";
import AddPatient from "./components/patient/AddPatient.jsx";
import UpdatePatient from "./components/patient/UpdatePatient.jsx";
import PatientProfile from "./components/patientDashboard/PatientProfile.jsx";
import PatientDashboard from "./Pages/PatientDashboard.jsx";
import PatientRecord from "./components/patient/PatientRecord.jsx";
import AddMedicalRecord from "./components/patient/AddMedicalRecord.jsx";
import AddDoctor from "./components/Doctor/AddDoctor.jsx";
import DoctorDashboard from "./components/DoctorDashboard/DoctorProfile.jsx";
import LoginPage from "./Pages/Login/LoginPage.jsx";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard.jsx";
import DoctorProfile from "./components/DoctorDashboard/DoctorProfile.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";

import Test from "./Pages/Test/Test.jsx";
import DoctorList from "./components/Doctor/DoctorList.jsx";

function App() {
  return (
    <Router>
      <>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/patient" element={<PatientList />}></Route>
            <Route path="/doctor" element={<DoctorList />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/addpatient" element={<AddPatient />} />
            <Route path="/patientRecord/:id" element={<PatientRecord/>}/>
            <Route path="/update/:id" element={<UpdatePatient />} />
            <Route path="/addRecord/:id" element={<AddMedicalRecord />} />
            <Route path="/dashboard/:id" element={<PatientDashboard />} />
            <Route path="/Profile/:id" element={<PatientProfile />} />
            <Route path="/Profile/Doctor/:id" element={<DoctorProfile />} />
            <Route path="/Admin" element={<AdminDashboard />} />
            <Route path="/addDoctor" element={<AddDoctor/>} />

            <Route path='/test' element={<Test/>}/>
            <Route path="*" element={<NotFound/>} />
            
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
