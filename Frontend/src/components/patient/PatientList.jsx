import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PatientList() {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch patient data from the backend
    axios
      .get("http://localhost:5000/api/patient/allpatients")
      .then((response) => {
        setPatients(response.data);
      });
  }, []);

  const deletePatient = async (id) => {
    try {
      console.log(id);
      await axios.delete(
        `http://localhost:5000/api/patient/deletepatient/${id}`
      );
      const response = await axios.get(
        "http://localhost:5000/api/patient/allpatients"
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
    <div className="min-h-screen py-14 px-5 bg-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Patients</h1>
        <Link
          to="/addpatient"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Patient
        </Link>
      </div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-white text-gray-800 px-4 py-2 rounded-md mb-4 w-full max-w-md"
      />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPatients.map((patient) => (
          <li
            key={patient._id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <Link to={`/Profile/${patient._id}`} className="block p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {patient.firstName} {patient.lastName}
              </h2>
            </Link>
            <div className="flex justify-between items-center p-4 border-t border-gray-200">
              <Link
                to={`/patientRecord/${patient._id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Records
              </Link>
              <button
                onClick={() => deletePatient(patient._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PatientList;
