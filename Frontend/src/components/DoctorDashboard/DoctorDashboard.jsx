import { useState, useEffect,useContext } from "react";
import { useParams, Link} from "react-router-dom";
import axios from "axios";

import PatientList from "../patient/PatientList";
import Statscard from "../comp/cards/Statscard";
import Dropbox from "../comp/DashBoard/Dropbox";
import PatientChart from "../comp/DashBoard/PatientChart";
import { AuthContext } from "../Auth/AuthContext";

import Home from "../../assets/Home.svg";
import back from "../../assets/img/dashboard/logout.png";
import Doctor from "../../assets/img/dashboard/doctor_profile.jpeg";

const DoctorDashboard = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    contact: "",
    gender: "",
    email: "",
    bloodGroup: " ",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    specialization: [],
  });
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    console.log("Logged out");
    window.location.href = "/";
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/doctor/doctor/${id}`
        );
        setDoctor(response.data);
      } catch (error) {
        console.error("Error fetching doctor", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="relative flex justify-evenly bg-white font-poppins">
      <div className="fixed left-0 border-0 rounded-xl ml-2 my-2 w-14 transition duration-800 bg-gray-100 h-screen">
        <div
          className={`relative flex flex-col justify-center items-center font-bold font-poppins my-4 h-full `}
        >
          {/* <button className="absolute w-8 -right-4 bg-gray-100 border-0 p-1 rounded-r-full" onClick={Open} >
        <img src={Op} alt="" />
      </button> */}
          <Link
            to="/"
            className="text-gray-400 mt-1 my-2 w-10 bg-gray-100  hover:bg-white p-2 border-0 rounded-lg"
          >
            <img src={Home} alt="Home" />
          </Link>
          <Link
            onClick={handleLogout}
            className="text-gray-400 mt-1 my-2 w-10 bg-gray-100  hover:bg-white p-2 border-0 rounded-lg"
          >
            <img src={back} alt="Logout" />
          </Link>
        </div>
      </div>
      <div className="flex text-black bg-white">
        <div className="min-h-screen transition duration-800 px-2 lg:px-16 pt-24 ml-16">
          <div className="flex justify-between px-2 items-center">
            <h1 className="text-3xl font-semibold">Welcome</h1>
            <div className="py-5 my-2 flex items-center">
              <Link>
                <img
                  src={Doctor}
                  alt="Doctor Icon"
                  className="w-10 h-10 border-0 rounded-full"
                />
              </Link>
              <h2 className="text-sm px-2 font-semibold text-gray-800 capitalize">
                Dr. {doctor.firstName} {doctor.lastName}
              </h2>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 py-8">
            <Statscard title="Total" patients="293" />
            <Statscard title="Neurology" patients="49" />
            <Statscard title="Cardiology" patients="28" />
            <Statscard title="Pediatrics" patients="104" />
          </div>
          <div>
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-xl font-semibold p-2 text-gray-600">
                Numbers
              </h1>
              <Dropbox />
            </div>
            <div className="flex max-lg:flex-col-reverse bg-gray-100 p-5 my-2 border-0 rounded-lg">
              <div>
                <h4 className="text-gray-600 font-semibold text-sm">
                  TOTAL PATIENTS PER DAY
                </h4>

                <div className="pt-8">
                  <h5 className="text-gray-500 text-xs">Average</h5>
                  <h1 className="text-3xl font-semibold ">405.97</h1>
                </div>

                <div className="flex py-8">
                  <div className="pr-2 border-0 border-r-2">
                    <h5 className="text-gray-500 text-xs">Admitted</h5>
                    <h1 className="text-xl font-semibold ">290</h1>
                  </div>
                  <div className="pl-2">
                    <h5 className="text-gray-500 text-xs">Discharged</h5>
                    <h1 className="text-xl font-semibold ">115</h1>
                  </div>
                </div>
                <a
                  href=""
                  className="py-2 px-20 border-0 rounded-lg bg-white text-gray-500 hover:bg-gray-200 hover:text-black font-semibold"
                >
                  STATS
                </a>
              </div>
              <PatientChart />
            </div>
          </div>
          <PatientList />
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
