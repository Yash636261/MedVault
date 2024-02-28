import React, { useState, useEffect } from "react";
import axios from "axios";

import PatientList from "../patient/PatientList";
import DoctorList from "../Doctor/DoctorList";
import Statscard from "../comp/cards/Statscard";
import Dropbox from "../comp/DashBoard/Dropbox";
import PatientChart from "../comp/DashBoard/PatientChart";
import DashNav from "../comp/DashBoard/DashNav";
import RightSidebar from "../comp/DashBoard/RightSidebar";

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
    <div className="relative flex justify-evenly bg-white font-poppins">
      {/* <DashNav/> */}
      <div className="flex text-black bg-white md:mr-72">
        <div className="min-h-screen transition duration-800 px-2 lg:px-16 pt-24">
          <h1 className="text-3xl font-semibold p-2">Welcome</h1>
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
      {toggle && (
        <div className="fixed right-0 top-0 bottom-0">
          <RightSidebar admin={admin} />
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
