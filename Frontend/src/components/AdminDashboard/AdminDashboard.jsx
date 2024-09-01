import React, { useState, useEffect } from "react";
import axios from "axios";

import PatientList from "../patient/PatientList";
import DoctorList from "../Doctor/DoctorList";
import Statscard from "../comp/cards/Statscard";
import Dropbox from "../comp/DashBoard/Dropbox";
import PatientChart from "../comp/DashBoard/PatientChart";
import DashNav from "../comp/DashBoard/DashNav";
import RightSidebar from "../comp/DashBoard/RightSidebar";
import Doctor from "../../assets/img/dashboard/doctor_profile.jpeg";

const AdminDashboard = () => {
  const [toggle, setToggle] = useState(true);
  const [admin, setAdmin] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
  });

  const changetoggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://medvault-khkb.onrender.com/api/admin/getadmin"
        );
        setAdmin(response.data);
      } catch (error) {
        console.error("Error fetching admin", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setToggle(false);
      } else {
        setToggle(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative  bg-white font-poppins ">
      <div className="w-full bg-gray-200">
        <div className="flex font-bold cursor-default">
          <img
            className="h-5 w-5 mx-2 my-auto"
            src="https://img.icons8.com/?size=512&id=104233&format=png"
            alt=""
          />
          <p className="my-auto">MedVault</p>
        </div>
        <div className="broder-gray-200 py-5 my-2 w-full flex items-center px-8 shadow-md">
          <Link>
            <img
              src={Doctor}
              alt="Doctor Icon"
              className="w-10 h-10 border-0 rounded-xl"
            />
          </Link>
          <h2 className="text-sm px-2 font-semibold text-gray-800 capitalize">
            {admin.firstname} {admin.lastname}
          </h2>
        </div>
      </div>
      {/* <DashNav/> */}
      <div className="flex justify-between text-black bg-white  w-screen border-2">
        <div className="min-h-screen transition duration-800 px-2 lg:px-16">
          <h1 className="text-3xl font-semibold p-2  pt-24">Welcome</h1>

          {window.innerWidth <= 768 && (
            <button
              className="absolute md:hidden p-2 bg-white text-black top-2 right-2 rounded-full"
              onClick={changetoggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}
          <div className="flex border-2">
            <div className="flex-col">
              <div className="flex flex-wrap justify-center gap-3 py-8">
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
            <div>
              {toggle && (
                <div className="mx-20">
                  <RightSidebar admin={admin} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
