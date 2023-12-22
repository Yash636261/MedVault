import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function AddMedicalRecord  () {
  const { id } = useParams();
  const [patient, setPatient] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    bloodGroup: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    diseases: []
  });

  const [newDisease, setNewDisease] = useState({
    disease: "",
    yrs: "",
  });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/patient/getpatient/${id}`);
        console.log(response.data);
        setPatient(response.data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };
  
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDisease((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(newDisease);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedNewDisease ={ ...newDisease};
    
    // Add new disease to the patient's diseases array
    const updatedPatient = {
      ...patient,
      diseases: [
        ...patient.diseases,
        updatedNewDisease
      ]
    };

    // Send updated patient data to the server
    try {
      const response = await axios.put(`http://localhost:5000/api/patient/updatepatient/${id}`, updatedPatient);
      console.log("Patient updated:", response.data);
      window.history.back();
    } catch (error) {
      console.error("Error updating patient:", error);
    }
  };

  return (
    <div className="min-h-screen py-12 px-10 flex flex-col justify-center bg-slate-900">
      {/* Your form */}
      <form onSubmit={handleSubmit} className="flex flex-col font-poppins mx-auto px-8 py-12 bg-slate-800 shadow-lg rounded-lg max-w-screen-lg mt-8 mb-4">
        {/* Diagnosis input */}
        <input
          type="text"
          name="disease"
          placeholder="Enter Disease"
          value={newDisease.disease}
          onChange={handleChange}
          className="border-0 bg-gray-500 placeholder:text-white rounded-md p-2 mb-4"
        />

        {/* Treatment input */}
        <input
          type="text"
          name="yrs"
          placeholder="Enter Years"
          value={newDisease.yrs}
          onChange={handleChange}
          className="border-0 bg-gray-500 placeholder:text-white rounded-md p-2 mb-4"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4"
        >
          Add Medical Record
        </button>
      </form>
    </div>
  );
};

export default AddMedicalRecord;
