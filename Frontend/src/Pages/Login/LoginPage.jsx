import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profile from "../../assets/img/landingPage/profile.png";
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
        email: '',
        password: '',
        timeTravelerID: '', // Reset the Time Traveler ID field
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center " style={{
        background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
      }}>
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96 flex flex-col justify-center text-center">
        <h2 className="text-2xl font-bold my-8">Login</h2>

        <div className="flex mb-4 mx-auto">
          <button
            className={`${
              selectedOption === "admin"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            } px-4 py-2 rounded-l focus:outline-none`}
            onClick={() => handleOptionChange("admin")}
          >
            Admin
          </button>
          <button
            className={`${
              selectedOption === "doctor"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            } px-4 py-2 rounded-r focus:outline-none`}
            onClick={() => handleOptionChange("doctor")}
          >
            Doctor
          </button>
        </div>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email" // Make sure the 'name' attribute matches the key in formData
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-700 rounded py-2 px-3 mb-3 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            name="password" // Make sure the 'name' attribute matches the key in formData
            value={formData.password}
            onChange={handleChange}
            className="border border-gray-700 rounded py-2 px-3 mb-3 focus:outline-none"
          />

          <p className="text-red">{error}</p>

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded mt-4"
            type="submit"
          >
            Login as {selectedOption}
          </button>

          <Link to='/adddoctor' className='text-center'>new user, Register here</Link>
        </form>
      </div>
    </div>
  );
}
