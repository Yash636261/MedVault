import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PatientRecord = () => {
  const [patient, setPatient] = useState({
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
        console.log("error fetching patient :", error);
      }
    };
    fetchpatient();
  }, [id]);

  // Function to format date string
  const formatDate = (dateString) => {
    const options = { day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const formatMonth = (dateString) => {
    const options = { year: "numeric", month: "long"};
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="max-w-md mx-auto bg-white border-0 rounded-xl overflow-hidden md:max-w-4xl m-5">
      <div className="flex justify-between mt-10 border-0 px-5 py-2 rounded-md bg-white shadow-lg">
        <h1 className="text-2xl font-bold ">Patient Record</h1>

        <Link
          to={`/addRecord/${id}`}
          className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Record
        </Link>
      </div>
      <div className="mx-auto max-w-xl">
        {patient.diseases && patient.diseases.length >= 1 ? (
          patient.diseases.map((disease, index) => (
            <div
              key={index}
              className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-5"
            >
              <div className="p-8 flex items-center">
                <div className="pr-4 bg-blue-500 p-2 rounded-lg text-center">
                  <p className="text-4xl font-bold text-white">
                    {formatDate(disease.date)}th
                  </p>
                  <p className="text-sm text-white">{formatMonth(disease.date)}</p>
                </div>
                <div className="ml-4">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {disease.disease}
                  </div>
                  <p className="mt-2 text-gray-500">
                    {disease.doctor ? disease.doctor : "No doctor"}
                  </p>
                  <p className="mt-2 text-gray-500">123 Main St, Anytown</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="mx-auto my-10">
            No records found for {" "} 
            <span className=" font-bold capitalize">
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
