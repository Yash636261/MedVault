import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Dropbox from "../comp/DashBoard/Dropbox";
import Button from "../comp/Button";
import more from "../../assets/more.png";
import profile from "../../assets/img/landingPage/profile.png";
import history from "../../assets/img/dashboard/history_patient.png";

function PatientList() {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setOpen] = useState(null);
  const toggle = (index) => {
    if (isOpen === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  useEffect(() => {
    // Fetch patient data from the backend
    axios
      .get("https://medvault-khkb.onrender.com/api/patient/allpatients")
      .then((response) => {
        setPatients(response.data);
      });
  }, []);

  const deletePatient = async (id) => {
    try {
      console.log(id);
      await axios.delete(
        `https://medvault-khkb.onrender.com/api/patient/deletepatient/${id}`
      );
      const response = await axios.get(
        "https://medvault-khkb.onrender.com/api/patient/allpatients"
      );
      setPatients(response.data);
      console.log("patient deleted:", response.data);
    } catch (error) {
      console.log("error deleting patient:", error);
    }
  };

  const filteredPatients = patients.filter(
    (patient) =>
      patient.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-14 px-5 bg-white">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-600">Patients</h1>
          {/* <Dropbox /> */}
        </div>
      </div>
      <div className="flex max-md:flex-col justify-between max-md:items-start md:items-center">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-gray-100 text-gray-800 px-4 py-2 rounded-mdw-full max-w-md"
        />
          <Button link='/addpatient' name='Add-Patient' />


        {/* <Link
          to="/addpatient"
          className=" bg-blue-400 text-black max-md:my-2 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
        >
          Add-Patient
        </Link> */}
      </div>
      <div className="w-full">
        {filteredPatients.map((patient,index) => (
          <div
            key={patient._id}
            className="flex justify-between items-center w-full px-4 py-6 my-6 bg-gray-100 rounded-lg hover:shadow-md"
          >
            <div className="flex items-center w-48 overflow-hidden">
              <Link to={`/Profile/${patient._id}`} className="">
                <img
                  src={profile}
                  alt=""
                  className="w-10 h-10 border-0 rounded-full"
                />
              </Link>
              <div className="px-2">
                <h5 className="text-xs font-semibold text-gray-400">
                  70 years old
                </h5>
                <h2 className="text-md font-semibold text-gray-800 capitalize">
                  {patient.firstName} {patient.lastName}
                </h2>
              </div>
            </div>

            <div className="flex justify-center items-center max-md:hidden">
              <img
                src={history}
                alt=""
                className="w-8 h-8 p-1 border-0 rounded-lg bg-gray-100"
              />
              <div className="px-2">
                <h5 className="text-xs font-semibold text-gray-400">
                  Admitted:
                </h5>
                <h2 className="text-sm font-semibold text-gray-800 capitalize">
                  19/12/23
                </h2>
              </div>
            </div>

            <div className="flex justify-center items-center max-md:hidden">
              <img
                src={history}
                alt=""
                className="w-8 h-8 p-1 border-0 rounded-lg bg-gray-100"
              />
              <div className="px-2">
                <h5 className="text-xs font-semibold text-gray-400">
                  ward:
                </h5>
                <h2 className="text-sm font-semibold text-gray-800 capitalize">
                  Cardiology
                </h2>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <img
                src={history}
                alt=""
                className="w-8 h-8 p-1 border-0 rounded-lg bg-gray-100"
              />
              <div className="px-2">
                <h5 className="text-xs font-semibold text-gray-400">
                  Doctor:
                </h5>
                <h2 className="text-sm font-semibold text-gray-800 capitalize">
                  Smit Patel
                </h2>
              </div>
            </div>

            <div className="relative">
              <img
                onClick={() => toggle(index)}
                className=" w-8 h-8 border rounded-full p-1 hover:border-black transition duration-200"
                src={more}
                alt=""
              />

              {isOpen == index && (
                <div
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                >
                  <div className="py-1" role="none">
                    {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                    <Link
                      to={`/patientRecord/${patient._id}`}
                      className="text-gray-700 block px-4 py-2 text-sm"
                    >
                      Records
                    </Link>
                    <Link
                      onClick={() => deletePatient(patient._id)}
                      className="text-gray-700 block px-4 py-2 text-sm"
                    >
                      Delete
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatientList;
