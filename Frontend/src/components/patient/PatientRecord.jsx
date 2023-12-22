import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PatientRecord = () => {
  const [patient, setPatient] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    disease: [],
  });
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchpatient = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/patient/getpatient/${id}`
        );
        setPatient(response.data);
      } catch (error) {
        console.log("error fatching patient :", error);
      }
    };
    fetchpatient();
  }, [id]);
  return (
    <div className="px-10 py-14 min-h-screen bg-slate-900 text-white">
    <div className="flex justify-between mt-10 border-0 px-5 py-2 rounded-md bg-slate-800 shadow-lg">
        <h1 className="text-2xl font-bold ">Patient Records</h1>

        <Link to={`/addRecord/${id}`}
          className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add disease
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 py-5">
        {patient.diseases && patient.diseases.length >= 1 ? (
          patient.diseases.map((disease, index) => (
            <div key={index} className="bg-slate-800 shadow-md rounded-md p-4">
              <h2 className="text-xl font-semibold mb-2">{disease.disease}</h2>
              <p className="text-gray-300">Years: {disease.yrs}</p>
              {/* Add more details related to the disease if available */}
            </div>
          ))
        ) : (
          <p className="text-gray-200">
            No records found for diseases related to{" "}
            <span className=" font-bold">
              {patient.firstName} {patient.lastName}
            </span>
            .
          </p>
        )}
      </div>
    </div>
  );
};

export default PatientRecord;
