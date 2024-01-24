import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profile from "../../assets/img/landingPage/profile.png";
import login from "../../assets/d1.png";
import back from "../../assets/img/dashboard/logout.png";
import ReactLoading from "react-loading";
import axios from "axios";

export default function LoginPage() {
  const [selectedOption, setSelectedOption] = useState("admin");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedOption === "admin") {
      try {
        const response = await axios.post(
          `http://localhost:5000/api/auth/login`,
          { ...formData }
        );

        // if (response) {
        //   if (response.role === "user") {
        //     // Redirect to /user
        //     navigate("/user");
        //   } else if (response.role === "admin") {
        //     // Redirect to /admin
        navigate("/admin");
        //   } else {
        //     // Handle other roles or scenarios as needed
        //     console.error("Invalid role in response:", response.role);
        //   }
        // }
      } catch (error) {
        console.log(error);
        if (!error?.response) {
          setError("No server Response");
        } else if (error.response?.status === 400) {
          setError("Missing Username or Password");
        } else if (error.response?.status === 401) {
          setError("Credentials are wrong");
        } else {
          setError("Login Failed");
        }
      }
    }

    if (selectedOption === "doctor") {
      try {
        const response = await axios.post(
          `http://localhost:5000/api/auth/doclogin`,
          { ...formData }
        );
        navigate("/patient");
      } catch (error) {
        console.log(error);
        if (!error?.response) {
          setError("No server Response");
        } else if (error.response?.status === 400) {
          setError("Missing Username or Password");
        } else if (error.response?.status === 401) {
          setError("Credentials are wrong");
        } else {
          setError("Login Failed");
        }
      }
    }

    setFormData({
      email: "",
      password: "",
      timeTravelerID: "", // Reset the Time Traveler ID field
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 px-10 flex items-center justify-around">
      <div className="h-full py-10 md:px-10 rounded w-full sm:w-96 max-md:flex flex-col justify-center items-center">
        <Link to="/" className="flex items-center">
          <img src={back} className="w-4 h-4" alt="" />
          <p className="mx-1 text-gray-700">Back to home</p>
        </Link>
        <h2 className="text-3xl font-semibold mt-8">Wellcome Back!</h2>
        <h4 className="text-sm font-medium  text-gray-500">
          Please enter log in details below
        </h4>

        <div className="flex mb-4 mx-auto my-10">
          <button
            className={`${
              selectedOption === "admin"
                ? "bg-[#151962] text-white"
                : "bg-gray-300 text-gray-700"
            } px-4 py-2 rounded-l-full focus:outline-none transition duration-500 border-r-0 border-4 border-gray-300`}
            onClick={() => handleOptionChange("admin")}
          >
            Admin
          </button>
          <button
            className={`${
              selectedOption === "doctor"
                ? "bg-[#151962] text-white"
                : "bg-gray-300 text-gray-700"
            } px-4 py-2 rounded-r-full focus:outline-none transition duration-500 border-l-0 border-4 border-gray-300`}
            onClick={() => handleOptionChange("doctor")}
          >
            Doctor
          </button>
        </div>

        <form className="flex flex-col my-10 w-full" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            name="email" // Make sure the 'name' attribute matches the key in formData
            value={formData.email}
            onChange={handleChange}
            className="border-b border-gray-400 py-2 px-3 mb-3 focus:outline-none focus:text-gray-700 bg-transparent"
          />
          <input
            type="password"
            placeholder="Password"
            name="password" // Make sure the 'name' attribute matches the key in formData
            value={formData.password}
            onChange={handleChange}
            className="border-b border-gray-400 py-2 px-3 mb-3 focus:outline-none focus:text-gray-700  bg-transparent"
          />

          <p className="text-red">{error}</p>
          <button
            className="bg-[#0F66A5] hover:bg-[#151962] text-white font-bold py-2 rounded mt-10 transtiion duration-200"
            type="submit"
          >
            Login as {selectedOption}
          </button>

          <Link
            to="/adddoctor"
            className={`text-center text-gray-700 ${
              selectedOption == "admin" ? "hidden" : ""
            }`}
          >
            New user? Register here
          </Link>
        </form>
      </div>
      <div className="max-md:hidden">
        <img src={login} className="border-0 rounded-2xl" alt="" />
      </div>
    </div>
  );
}
