import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profile from "../../assets/img/landingPage/profile.png";
import axios from "axios";


export default function Login() {
  const [toggle,setToggle] = useState('doctor');
  const navigate = useNavigate();
  const [formData,setFormData]= useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState("");

  const handleChange= (e)=>{
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) =>{
    
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/login`,
        { ...formData }
      );

      if(response){
        navigate('/admin')
      }

    }
    catch(error){
      console.log(error);
  }

  return (
    <div className="bg-slate-800 text-white flex flex-col justify-items-center items-center py-10 px-4 rounded shadow-md  w-full  ml-auto ">
      <h1 className="text-3xl font-bold font-poppins text-primary py-5">
        Login
      </h1>
      <div className="flex bg-bgsecondary w-fit justify-between rounded">
        <button
          onClick={() => {
            setToggle("Doctor");
          }}
          className={
            toggle === "Doctor"
              ? "py-2 px-8 text-lg font-poppins font-semibold cursor-pointer rounded bg-primary"
              : "py-2 px-8 text-lg font-poppins font-medium text-primary cursor-pointer rounded"
          }
        >
          Doctor
        </button>
        <button
          onClick={() => {
            setToggle("Admin");
          }}
          className={
            toggle === "Admin"
              ? "py-2 px-8 text-lg font-poppins font-semibold cursor-pointer rounded bg-primary"
              : "py-2 px-8 text-lg font-poppins font-medium text-primary cursor-pointer rounded"
          }
        >
          Admin
        </button>
      </div>
      <img
        src={profile}
        alt="profile pic"
        className="h-20 my-6 border-2 rounded-full"
      />
      <form className="flex flex-col w-full px-8" onSubmit={handleLogin}>
        <label
          htmlFor="email"
          className="font-poppins pt-2 pb-1 text-lg font-bold"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="font-poppins px-3 py-2 bg-bgsecondary rounded outline-none placeholder:text-black text-black"
          value={formData.email}
          onChange={handleChange}
        />
        {/* <span className="text-sm text-red-500">{usernameError}</span> */}
        <label
          htmlFor="password"
          className="font-poppins pt-6 pb-1 text-lg font-bold"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="font-poppins px-3 py-2 bg-bgsecondary rounded outline-none placeholder:text-black text-black"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {/* <span className="text-sm text-red-500">{passwordError}</span> */}

        
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-lg mt-10  bg-primary py-1 px-3 rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary"
          >
            Login
          </button>
      </form>
      <h1 className="font-poppins text-base pt-5">
        New User, <Link to="/Register">Register here</Link>
      </h1>
    </div>
  );
}
}
