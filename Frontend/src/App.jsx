import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components
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
import DoctorDashboard from "./components/DoctorDashboard/DoctorDashboard.jsx";
import LoginPage from "./components/Auth/LoginPage.jsx";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard.jsx";
import DoctorProfile from "./components/DoctorDashboard/DoctorProfile.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";
import DoctorList from "./components/Doctor/DoctorList.jsx";
import ProtectedRoute from "./Pages/ProtectedRoute.jsx";
import { AuthProvider } from "./components/Auth/AuthContext.jsx";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/doctor" element={<DoctorList />} />
            <Route path="/addpatient" element={<AddPatient />} />
            <Route path="/update/:id" element={<UpdatePatient />} />
            <Route path="/addRecord/:id" element={<AddMedicalRecord />} />
            <Route path="/dashboard/:id" element={<PatientDashboard />} />
            <Route path="/Profile/:id" element={<PatientProfile />} />
            <Route path="/Admin" element={<AdminDashboard />} />
            <Route path="/addDoctor" element={<AddDoctor />} />
            <Route path="/login" element={<LoginPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/patient" element={<PatientList />} />
              <Route path="/Profile/Doctor/:id" element={<DoctorProfile />} />
              <Route path="/patientRecord/:id" element={<PatientRecord />} />
              <Route path="/doctorDashboard/:id" element={<DoctorDashboard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
