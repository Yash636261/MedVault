import React, { useState, useEffect } from "react";
import axios from "axios";

import PatientList from "../patient/PatientList";
import { Link } from "react-router-dom";
import DoctorList from "../Doctor/DoctorList";
import patientListImg from "../../assets/img/dashboard/patient_list.png";
import doctorListImg from "../../assets/img/dashboard/doctor_list.png";

const AdminDashboard = () => {
  const [toggle, setToggle] = useState(true);
  const [selectedOption, setSelectedOption] = useState("patient");
  const [admin, setAdmin] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
  });

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const toggleSidebar = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/getadmin");
        console.log(response.data);
        setAdmin(response.data);
      } catch (error) {
        console.error("Error fetching admin", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pt-12 bg-slate-900 ">
      {toggle && (
        <div className={`fixed transition duration-800 bg-slate-800 w-72 h-full`}>
          <div className="p-4">
            <div className="grid grid-rows-2 font-bold font-poppins mt-4">
              <button 
                onClick={() => handleOptionChange("patient")} 
                className="text-gray-400 mt-1 border-0 rounded-xl hover:bg-slate-700">
                <div className="flex m-2 mt-2">
                  <div className="w-6 ml-4 bg-white p-1 border-0 rounded-lg">
                    <img src={patientListImg} alt="patient-list" />
                  </div>
                  <div className="font-poppins font-bold ml-4">
                    <h1>Patient List</h1>
                  </div>
                </div>
              </button>
              <button
                onClick={() => handleOptionChange("doctor")}
                className="text-gray-400 border-0 rounded-xl mt-1 hover:bg-slate-700"
              >
                <div className="flex m-2 mt-2">
                  <div className="w-6 ml-4 bg-white p-1 border-0 rounded-lg">
                    <img src={doctorListImg} alt="doctor-list" />
                  </div>
                  <div className="font-poppins font-bold ml-4">
                    <h1>Doctor List</h1>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="full-body col-span-10 text-black bg-white shadow-xl">
        <div className={` min-h-screen w-full bg-slate-800 h-full transition duration-800 ${toggle ? "pl-72" : ""}`}>
          <div className="main  bg-white ">
          <div className="p-2 bg-white fixed w-full">
            
              <div className="flex   w-full h-12  rounded">
                <button className="border rounded-xl px-5 text-xl" onClick={toggleSidebar}>≡</button>
                <Link to="/AdminDash">
                  <div>
                    <h1 className="text-2xl font-poppins font-bold p-2">
                      DashBoard
                    </h1>
                  </div>
                </Link>
              </div>
          </div>
              <div className="pt-4">
                {selectedOption === "patient" && <PatientList />}
                {selectedOption === "doctor" && <DoctorList />}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AdminDashboard;
