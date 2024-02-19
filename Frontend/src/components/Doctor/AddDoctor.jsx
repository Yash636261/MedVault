import React, { useState } from "react";
import axios from "axios";

function AddDoctor() {
  const initialDoctorState = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    contact: "",
    email: "",
    bloodGroup: "",
    street: "",
    city: "",
    password: "",
    state: "",
    postalCode: "",
    specialization: [], // Change to array
  };

  const [doctor, setDoctor] = useState(initialDoctorState);
  const [errors, setErrors] = useState({});
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "specialization") {
      // Split the input value by comma to create an array
      const specialties = value.split(",");
      setDoctor((prevData) => ({
        ...prevData,
        [name]: specialties,
      }));
    } else {
      setDoctor((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    console.log(doctor);
    const errors = {};

    if (!doctor.firstName.trim()) {
      errors.firstName = "First Name is required";
    }

    if (!doctor.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }

    if (!doctor.dateOfBirth.trim()) {
      errors.dateOfBirth = "date of birth is required";
    }

    if (!doctor.contact.trim()) {
      errors.contact = "Phone number is required";
    } else if (!/^\d{10}$/.test(doctor.contact.trim())) {
      errors.contact = "Invalid phone number";
    }
    if (!doctor.gender.trim()) {
      errors.gender = "gender is required";
    }

    if (!doctor.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(doctor.email.trim())) {
      errors.email = "Invalid email address";
    }
    if (!doctor.bloodGroup.trim()) {
      errors.bloodGroup = "blood group is required";
    }

    if (!doctor.street.trim()) {
      errors.street = "Street is required";
    }

    if (!doctor.city.trim()) {
      errors.city = "City is required";
    }

    if (!doctor.password.trim()) {
      errors.password = "password is required";
    }

    if (!doctor.state.trim()) {
      errors.state = "State is required";
    }

    if (!doctor.postalCode.trim()) {
      errors.postalCode = "Postal Code is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPasswordError("");
    if (doctor.password === confirmPassword) {
      if (validateForm()) {
        try {
          const response = await axios.post(
            "http://localhost:5000/api/auth/adddoctor",
            doctor
          );
          setDoctor(initialDoctorState);
          setConfirmPassword("");
          console.log("doctor Added:", response.data);
        } catch (error) {
          console.error("Error adding doctor:", error);
        }
      }
    } else {
      setPasswordError("Password Doesn't Matches");
    }
  };
  return (
    //     <div className="min-h-screen py-12 px-10 flex flex-col justify-center bg-slate-900 text-white">
    //       <h1 className="text-center font-bold my-5 text-xl">Add Doctor</h1>
    //       <form
    //         onSubmit={handleSubmit}
    //         className="font-poppins mx-auto lg:px-8 lg:py-4 bg-slate-800 shadow-lg rounded max-w-screen-lg mt-8 mb-4 "
    //       >
    //         <div className="lg:grid lg:grid-cols-4 lg:gap-2 mt-4 mr-4 grid grid-cols-4 gap-2">
    //           <label className="font-bold lg:text-xl font-poppins px-4 my-4 ">
    //             Name
    //           </label>
    //           <div>
    //             <input
    //               className="bg-gray-500 rounded lg:h-10 lg:pl-4 mt-4 lg:text-md text-sm h-8 px-2"
    //               required
    //               type="text"
    //               name="firstName"
    //               placeholder="First Name"
    //               value={doctor.firstName}
    //               onChange={handleChange}
    //             />
    //           </div>

    //           <input
    //             className="bg-gray-500 rounded lg:h-10 lg:pl-4 mt-4 lg:text-md text-sm h-8 px-2"
    //             required
    //             type="text"
    //             name="lastName"
    //             placeholder="Last Name"
    //             value={doctor.lastName}
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <div className="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
    //           <label className="font-bold lg:text-xl px-4 ">Birthdate</label>
    //           <input
    //             className=" bg-gray-500 lg:h-10 rounded pl-4 h-8"
    //             required
    //             type="date"
    //             name="dateOfBirth"
    //             placeholder="Date of Birth"
    //             value={doctor.dateOfBirth}
    //             onChange={handleChange}
    //           />
    //         </div>

    //         <div className="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
    //           <label className="font-bold lg:text-xl px-4 ">Phone</label>

    //           <input
    //             className="bg-gray-500 rounded lg:h-10 lg:pl-4  lg:text-md text-sm h-8 px-2"
    //             required
    //             type="text"
    //             name="contact"
    //             placeholder="contact"
    //             value={doctor.contact}
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <div className="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
    //           <label className="font-bold lg:text-xl px-4 ">Gender</label>

    //           <select
    //             className="pl-4 lg:w-3/4 bg-gray-500 lg:h-10  rounded  h-8"
    //             required
    //             name="gender"
    //             value={doctor.gender}
    //             onChange={handleChange}
    //           >
    //             <option value="">Select Gender</option>
    //             <option value="Male">Male</option>
    //             <option value="Female">Female</option>
    //             <option value="Other">Other</option>
    //           </select>
    //         </div>
    //         <div className="grid grid-cols-4 gap-2 mt-4 mr-4">
    //           <label className="  lg:text-xl font-bold px-4">Blood Group</label>
    //           <select
    //             className="pl-4 lg:w-1/2 bg-gray-500 lg:h-10  rounded  h-8"
    //             required
    //             name="bloodGroup"
    //             value={doctor.bloodGroup}
    //             onChange={handleChange}
    //           >
    //             <option value="">select</option>
    //             <option value="A+">A+</option>
    //             <option value="A-">A-</option>
    //             <option value="B+">B+</option>
    //             <option value="B-">B-</option>
    //             <option value="AB+">AB+</option>
    //             <option value="AB-">AB-</option>
    //             <option value="O+">O+</option>
    //             <option value="O-">O-</option>
    //           </select>
    //         </div>
    //         {/* Add more input fields for other patient data */}

    //         <div className="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
    //           <label className="font-bold lg:text-xl px-4 ">Email</label>

    //           <input
    //             className="bg-gray-500 rounded lg:h-10 lg:pl-4 lg:text-md text-sm h-8 px-2"
    //             required
    //             type="text"
    //             name="email"
    //             placeholder="Email"
    //             value={doctor.email}
    //             onChange={handleChange}
    //           />
    //         </div>

    //         <div className="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
    //           <label className="font-bold lg:text-xl px-4 ">Password</label>

    //           <input
    //             className="bg-gray-500 rounded lg:h-10 lg:pl-4 lg:text-md text-sm h-8 px-2"
    //             required
    //             type="password"
    //             name="password"
    //             placeholder="password"
    //             value={doctor.password}
    //             onChange={handleChange}
    //           />
    //         </div>

    //         <div className="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
    //           <label className="font-bold lg:text-xl px-4 ">Confirm Password</label>

    //           <input
    //             className="bg-gray-500 rounded lg:h-10 lg:pl-4 lg:text-md text-sm h-8 px-2"
    //             required
    //             type="password"
    //             name="password"
    //             placeholder="Confirm Password"
    //             value={confirmPassword}
    //             onChange={(e) => setConfirmPassword(e.target.value)}
    //           />
    //           <span className="text-sm py-1 text-red-500">{passwordError}</span>
    //         </div>

    //         <div className="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
    //           <label className="font-bold lg:text-xl px-4 ">Street</label>

    //           <input
    //             className="pl-4 bg-gray-500 lg:h-10  rounded h-8"
    //             required
    //             type="text"
    //             name="street"
    //             placeholder="Street"
    //             value={doctor.street}
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <div className="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
    //           <label className="font-bold lg:text-xl px-4 ">City</label>

    //           <input
    //             className="bg-gray-500 rounded lg:h-10 lg:pl-4 lg:text-md text-sm h-8 px-2"
    //             required
    //             type="text"
    //             name="city"
    //             placeholder="City"
    //             value={doctor.city}
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <div className="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
    //           <label className="font-bold lg:text-xl px-4 ">State</label>

    //           <input
    //             className="bg-gray-500 rounded lg:h-10 lg:pl-4 lg:text-md text-sm h-8 px-2"
    //             required
    //             type="text"
    //             name="state"
    //             placeholder="State"
    //             value={doctor.state}
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <div className="lg:grid grid-cols-4 gap-2 mt-4 mr-4">
    //           <label className="font-bold lg:text-xl px-4 ">PostalCode</label>

    //           <input
    //             className="bg-gray-500 rounded lg:h-10 lg:pl-4 lg:text-md text-sm h-8 px-2"
    //             required
    //             type="text"
    //             name="postalCode"
    //             placeholder="Postal Code"
    //             value={doctor.postalCode}
    //             onChange={handleChange}
    //           />
    //         </div>
    //         <div className="lg:grid grid-cols-4 gap-2 mt-4 mr-4 mb-10">
    //           <label className="font-bold lg:text-xl px-4 ">Specialization</label>

    //           <input
    //   className="bg-gray-500 rounded lg:h-10 lg:pl-4 lg:text-md text-sm h-8 px-2"
    //   required
    //   type="text"
    //   name="specialization"
    //   placeholder="specialization (comma-separated)"
    //   value={doctor.specialization.join(",")} // Join array values with a comma
    //   onChange={handleChange}
    // />

    //         </div>

    //         {errors.firstName && (
    //           <p className="text-md text-red-500">{errors.firstName}</p>
    //         )}
    //         {errors.lastName && (
    //           <p className="text-md text-red-500">{errors.lastName}</p>
    //         )}
    //         {errors.dateOfBirth && (
    //           <p className="text-md text-red-500">{errors.dateOfBirth}</p>
    //         )}
    //         {errors.bloodGroup && (
    //           <p className="text-md text-red-500">{errors.bloodGroup}</p>
    //         )}
    //         {errors.gender && (
    //           <p className="text-md text-red-500">{errors.gender}</p>
    //         )}
    //         {errors.contact && (
    //           <p className="text-md text-red-500">{errors.contact}</p>
    //         )}
    //         {errors.street && (
    //           <p className="text-md text-red-500">{errors.street}</p>
    //         )}
    //         {errors.city && <p className="text-md text-red-500">{errors.city}</p>}
    //         {errors.state && <p className="text-md text-red-500">{errors.state}</p>}
    //         {errors.postalCode && (
    //           <p className="text-md text-red-500">{errors.postalCode}</p>
    //         )}
    //         {/* Button to add patient */}
    //         <button
    //           onClick={handleSubmit}
    //           className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl py-2 px-4 mt-8 inline-block"
    //           type="submit"
    //         >
    //           Add Doctor
    //         </button>
    //       </form>
    //     </div>
    <div className="bg-white ">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full lg:w-3/4 lg:flex lg:justify-center">
            <div className="w-full lg:w-10/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Register As Doctor</h3>
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
                      value={doctor.firstName}
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
                      value={doctor.lastName}
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
                    value={doctor.dateOfBirth}
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
                    name="contact"
                    placeholder="contact"
                    value={doctor.contact}
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
                    value={doctor.gender}
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
                    value={doctor.bloodGroup}
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
                    value={doctor.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4 md:flex md:justify-start">
                  <div className="mb-4 mr-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="Password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                      type="password"
                      name="password"
                      placeholder="password"
                      value={doctor.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="Confirm Password"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      required
                      type="password"
                      name="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <span className="text-sm py-1 text-red-500">
                      {passwordError}
                    </span>
                  </div>
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
                    value={doctor.street}
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
                      value={doctor.city}
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
                      value={doctor.state}
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
                    value={doctor.postalCode}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="Specialization"
                  >
                    Specialization
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    required
                    type="text"
                    name="specialization"
                    placeholder="specialization (comma-separated)"
                    value={doctor.specialization.join(",")} // Join array values with a comma
                    onChange={handleChange}
                  />
                </div>

                <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDoctor;
