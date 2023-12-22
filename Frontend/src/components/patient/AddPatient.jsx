import React, { useState } from "react";
import axios from "axios";
import plus_logo from "../../assets/img/dashboard/add2_pbl.png";
import minus_logo from "../../assets/img/dashboard/minus2_pbl.png";

function AddPatient() {
  const [diseaseList, setDiseaseList] = useState([{ disease: "", yrs: "" }]);

  const addDisease = () => {
    const diseaseList1 = [...diseaseList];
    diseaseList1.push({ disease: "", yrs: "" });
    setDiseaseList(diseaseList1);
  };
  const [patient, setPatient] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    bloodGroup: " ",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    diseases: diseaseList,
    // Add more fields as needed
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    console.log(patient);
    const errors = {};

    if (!patient.firstName.trim()) {
      errors.firstName = "First Name is required";
    }

    if (!patient.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }

    if (!patient.dateOfBirth.trim()) {
      errors.dateOfBirth = "date of birth is required";
    }

    if (!patient.gender.trim()) {
      errors.gender = "gender is required";
    }

    if (!patient.bloodGroup.trim()) {
      errors.bloodGroup = "blood group is required";
    }

    if (!patient.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(patient.email.trim())) {
      errors.email = "Invalid email address";
    }

    if (!patient.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(patient.phone.trim())) {
      errors.phone = "Invalid phone number";
    }

    if (!patient.street.trim()) {
      errors.street = "Street is required";
    }

    if (!patient.city.trim()) {
      errors.city = "City is required";
    }

    if (!patient.state.trim()) {
      errors.state = "State is required";
    }

    if (!patient.postalCode.trim()) {
      errors.postalCode = "Postal Code is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const patientData = { ...patient, diseases: diseaseList };
        const response = await axios.post(
          "http://localhost:5000/api/patient/addpatient",
          patientData
        );
        console.log("patient Added:", response.data);
      } catch (error) {
        console.error("Error adding patient:", error);
      }
    }
  };
  return (
    <div className="min-h-screen py-12 px-10 flex flex-col justify-center bg-slate-900 text-white">
      <h1 className="text-center font-bold my-5 text-xl">Add Patient</h1>
      {/* <dialog id="d">
        <p>hi there</p>
      </dialog>
      <button onClick={d.showModal()}>dialong</button> */}
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={patient.postalCode}
            onChange={handleChange}
          />
        </div>

        <div className="lg:grid lg:grid-cols-10 gap-2 mt-8 mr-4">
                <div className="col-span-5">
                  <label className=" lg:text-xl font-bold px-4 grid col-start-1 col-span-3">
                    Name of any permanant disease (if any)
                  </label>
                </div>
                <div className="col-span-4">
                  {diseaseList.map((disease, index) => {
                    return (
                      <div
                        key={index}
                        className="grid grid-cols-7 col-span-1 mb-3"
                      >
                        <input
                          className="bg-gray-500 lg:h-10 col-span-3 rounded lg:pl-4 h-8 pl-2"
                          type="text"
                          name="disease"
                          value={disease.disease}
                          placeholder="eg.dibetes"
                          onChange={(e) => {
                            let diseaseList1 = [...diseaseList];
                            diseaseList1[index].disease = e.target.value;
                            setDiseaseList(diseaseList1);
                            let temppatient = { ...patient };
                            temppatient.diseases = diseaseList;
                            setPatient(temppatient);
                          }}
                        />
                        <input
                          className="bg-gray-500 lg:h-10 col-span-3  rounded lg:pl-4 h-8 pl-2 ml-4"
                          type="text"
                          name="yrs"
                          placeholder="years e.g 3"
                          value={disease.yrs}
                          onChange={(e) => {
                            let diseaseList1 = [...diseaseList];
                            diseaseList1[index].yrs = e.target.value;
                            setDiseaseList(diseaseList1);
                            let temppatient = { ...patient };
                            temppatient.diseases = diseaseList;
                            setPatient(temppatient);
                          }}
                        />

                        <div
                          className="col-span-1 pl-3"
                          onClick={() => {
                            if (diseaseList.length > 1) {
                              let diseaseList1 = [...diseaseList];
                              diseaseList1.splice(index, 1);
                              let temppatient = { ...patient };
                              temppatient.diseases = diseaseList1;
                              setPatient(temppatient);
                              setDiseaseList(diseaseList1);
                            }
                          }}
                        >
                          <img src={minus_logo} alt="" className="h-8 w-8" />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div onClick={addDisease} className="col-span-1">
                  <img src={plus_logo} alt="" className="h-8 w-8" />
                </div>
              </div>
            
        {errors.firstName && (
          <p className="text-xs text-red-500">{errors.firstName}</p>
        )}
        {errors.lastName && (
          <p className="text-xs text-red-500">{errors.lastName}</p>
        )}
        {errors.dateOfBirth && (
          <p className="text-xs text-red-500">{errors.dateOfBirth}</p>
        )}
        {errors.bloodGroup && (
          <p className="text-xs text-red-500">{errors.bloodGroup}</p>
        )}
        {errors.gender && (
          <p className="text-xs text-red-500">{errors.gender}</p>
        )}
        {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
        {errors.street && (
          <p className="text-xs text-red-500">{errors.street}</p>
        )}
        {errors.city && <p className="text-xs text-red-500">{errors.city}</p>}
        {errors.state && <p className="text-xs text-red-500">{errors.state}</p>}
        {errors.postalCode && (
          <p className="text-xs text-red-500">{errors.postalCode}</p>
        )}
        {/* Button to add patient */}
        <button
          onClick={handleSubmit}
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl py-2 px-4 mt-8 inline-block"
          type="submit"
        >
          Add Patient
        </button>
      </form>
    </div>
  );
}

export default AddPatient;
