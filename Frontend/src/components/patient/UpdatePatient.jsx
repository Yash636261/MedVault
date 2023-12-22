import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdatePatient() {
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
    medicalRecords: []
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
    setPatient((prevPatient) => ({
      ...prevPatient,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a PUT request to update the patient's data
    axios.put(`http://localhost:5000/api/patient/updatepatient/${id}`, patient).then((response) => {
      // Handle success or errors here
      console.log("Patient updated:", response.data);
      window.history.back();
      // Redirect or perform other actions upon successful update
    }).catch((error) => {
      // Handle error cases
      console.error("Error updating patient:", error);

    });
  };

  return (
    <div className="min-h-screen py-12 px-10 flex flex-col justify-center bg-slate-900 text-white">
      <h1 className="text-center font-bold my-5 text-xl">Update Patient</h1>

      <form
        onSubmit={handleSubmit}
        className="font-poppins mx-auto lg:px-8 lg:py-4 bg-slate-800 shadow-lg rounded max-w-screen-lg mt-8 mb-4 "
      >
        <div className="lg:grid lg:grid-cols-4 lg:gap-2 mt-4 mr-4 grid grid-cols-4 gap-2">
          <label className="font-bold lg:text-xl font-poppins px-4 my-4 ">
            Name
          </label>
          <div>
            <input
              className="bg-gray-500 rounded lg:h-10 lg:pl-4 mt-4 lg:text-md text-sm h-8 px-2"
              required
              type="text"
              name="firstName"
              placeholder="First Name"
              value={patient.firstName}
              onChange={handleChange}
            />
          </div>

          <input
            className="bg-gray-500 rounded lg:h-10 lg:pl-4 mt-4 lg:text-md text-sm h-8 px-2"
            required
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={patient.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
          <label className="font-bold lg:text-xl px-4 ">Birthdate</label>
          <input
            className=" bg-gray-500 lg:h-10 rounded pl-4 h-8"
            required
            type="date"
            name="dateOfBirth"
            placeholder="Date of Birth"
            value={patient.dateOfBirth}
            onChange={handleChange}
          />
        </div>
        <div className="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
          <label className="font-bold lg:text-xl px-4 ">Gender</label>

          <select
            
            className="pl-4 lg:w-3/4 bg-gray-500 lg:h-10  rounded  h-8"
            name="gender"
            value={patient.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-4 mr-4">
          <label className="  lg:text-xl font-bold px-4">Blood Group</label>
          <select
            className="pl-4 lg:w-1/2 bg-gray-500 lg:h-10  rounded  h-8"
            name="bloodGroup"
            value={patient.bloodGroup}
            onChange={handleChange}
          >
            <option value="">select</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        {/* Add more input fields for other patient data */}

        <div className="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
          <label className="font-bold lg:text-xl px-4 ">Email</label>

          <input
            className="bg-gray-500 rounded lg:h-10 lg:pl-4 lg:text-md text-sm h-8 px-2"
            type="text"
            name="email"
            placeholder="Email"
            value={patient.email}
            onChange={handleChange}
          />
        </div>
        <div className="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
          <label className="font-bold lg:text-xl px-4 ">Phone</label>

          <input
            className="bg-gray-500 rounded lg:h-10 lg:pl-4  lg:text-md text-sm h-8 px-2"
            type="text"
            name="phone"
            placeholder="Phone"
            value={patient.phone}
            onChange={handleChange}
          />
        </div>
        <div className="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
          <label className="font-bold lg:text-xl px-4 ">Street</label>

          <input
            className="pl-4 bg-gray-500 lg:h-10  rounded h-8"
            type="text"
            name="street"
            placeholder="Street"
            value={patient.street}
            onChange={handleChange}
          />
        </div>
        <div className="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
          <label className="font-bold lg:text-xl px-4 ">City</label>

          <input
            className="bg-gray-500 rounded lg:h-10 lg:pl-4 lg:text-md text-sm h-8 px-2"
            type="text"
            name="city"
            placeholder="City"
            value={patient.city}
            onChange={handleChange}
          />
        </div>
        <div className="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
          <label className="font-bold lg:text-xl px-4 ">State</label>

          <input
            className="bg-gray-500 rounded lg:h-10 lg:pl-4 lg:text-md text-sm h-8 px-2"
            type="text"
            name="state"
            placeholder="State"
            value={patient.state}
            onChange={handleChange}
          />
        </div>
        <div className="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
          <label className="font-bold lg:text-xl px-4 ">PostalCode</label>

          <input
            className="bg-gray-500 rounded lg:h-10 lg:pl-4 lg:text-md text-sm h-8 px-2"
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={patient.postalCode}
            onChange={handleChange}
          />
        </div>
        {/* Button to add patient */}
        <button
          onClick={handleSubmit}
          className="border-0 my-10 py-2 px-3 text-white font-semibold rounded-xl transition duration-200 bg-blue-700 hover:bg-blue-800 hover:shadow-lg"
          type="submit"
        >
          Update Patient
        </button>
      </form>
    </div>
  );
}

export default UpdatePatient;
