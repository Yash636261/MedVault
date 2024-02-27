import { useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import loginimg from "../../assets/d1.png";
import back from "../../assets/img/dashboard/logout.png";
import Cookies from "universal-cookie";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export default function LoginPage() {
  const cookies = new Cookies();
  const {login} = useContext(AuthContext);

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
    try {
      if (selectedOption === "admin") {
        await axios.post(
          `https://medvault-khkb.onrender.com/api/auth/login`,
          { ...formData }
        );
        navigate("/admin");
      } else if (selectedOption === "doctor") {
        const response = await axios.post(
          `https://medvault-khkb.onrender.com/api/auth/doclogin`,
          { ...formData },
          {
            withCredentials: true,
          }
        );

        if (response) {
          console.log(response.data.token);
          localStorage.setItem("authToken", response.data.token);
          login(response.data.token);

          cookies.set("TOKEN", response.data.token, {
            path: "/",
          });
        }
        console.log(cookies.get("TOKEN"));
        const id = response.data.doctor._id;
        navigate(`/doctorDashboard/${id}`);
      }
    } catch (error) {
      console.log(error);
      if (!error.response) {
        setError("No server Response");
      } else if (error.response?.status === 400) {
        setError("Missing Username or Password");
      } else if (error.response?.status === 401) {
        setError("Credentials are wrong");
      } else if (error.response?.status === 404) {
        setError("User not found, Please register first.");
      } else {
        setError("Login Failed");
      }
    }
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 px-10 flex items-center justify-around">
      <div className="h-full py-10 md:px-10 rounded w-full sm:w-96 max-md:flex flex-col justify-center items-center">
        <Link to="/" className="flex items-center">
          <img src={back} className="w-4 h-4" alt="" />
          <p className="mx-1 text-gray-700">Back to home</p>
        </Link>
        <h2 className="text-3xl font-semibold mt-8">Welcome Back!</h2>
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
        <img src={loginimg} className="border-0 rounded-2xl" alt="" />
      </div>
    </div>
  );
}
