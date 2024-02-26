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

  const initialState = {
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
  };
  const [patient, setPatient] = useState(initialState);
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
        setPatient(initialState);
        console.log("patient Added:", response.data);
        window.history.back();
      } catch (error) {
        console.error("Error adding patient:", error);
      }
    }
  };
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full lg:w-3/4 lg:flex lg:justify-center">
            <div className="w-full lg:w-10/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Add Patient
              </h3>
              <form
                onSubmit={handleSubmit}
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
              >
                <div className="mb-4 md:flex md:justify-start">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={patient.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={patient.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="dateOfBirth"
                  >
                    Date of Birth
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    required
                    type="date"
                    name="dateOfBirth"
                    placeholder="Date of Birth"
                    value={patient.dateOfBirth}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="Gender"
                  >
                    Gender
                  </label>
                  <select
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="Blood Group"
                  >
                    Blood Group
                  </label>
                  <select
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="Email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    required
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={patient.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="Phone"
                  >
                    Phone
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    name="phone"
                    placeholder="contact"
                    value={patient.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="Street"
                  >
                    Street
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    required
                    type="text"
                    name="street"
                    placeholder="Street"
                    value={patient.street}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4 md:flex md:justify-start">
                  <div className="mb-4 mr-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="City"
                    >
                      City
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                      type="text"
                      name="city"
                      placeholder="City"
                      value={patient.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="State"
                    >
                      State
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                      type="text"
                      name="state"
                      placeholder="State"
                      value={patient.state}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="PostalCode"
                  >
                    PostalCode
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    required
                    type="text"
                    name="postalCode"
                    placeholder="Postal Code"
                    value={patient.postalCode}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="PostalCode"
                  >
                    Name of any permanant disease (if any)
                  </label>
                  <div className="col-span-4">
                    {diseaseList.map((disease, index) => {
                      return (
                        <div
                          key={index}
                          className="grid grid-cols-7 col-span-1 mb-3"
                        >
                          <input
                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
                {errors.phone && (
                  <p className="text-xs text-red-500">{errors.phone}</p>
                )}
                {errors.street && (
                  <p className="text-xs text-red-500">{errors.street}</p>
                )}
                {errors.city && (
                  <p className="text-xs text-red-500">{errors.city}</p>
                )}
                {errors.state && (
                  <p className="text-xs text-red-500">{errors.state}</p>
                )}
                {errors.postalCode && (
                  <p className="text-xs text-red-500">{errors.postalCode}</p>
                )}
                <button
                  className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl py-2 px-4 mt-8 inline-block"
                  type="submit"
                >
                  Add Patient
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPatient;
