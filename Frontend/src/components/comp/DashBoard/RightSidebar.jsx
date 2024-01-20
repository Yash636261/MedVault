import { useState, useEffect } from "react";
import Doctor from "../../../assets/img/dashboard/doctor_profile.jpeg";
import { Link } from "react-router-dom";
import axios from "axios";

function RightSidebar(props) {
  const [doctors, setDoctors] = useState([]);
  const { admin } = props;
  let firstname, lastname;
  if (admin && admin.length > 0) {
    ({ firstname, lastname } = admin[0]);
    console.log("First Name:", firstname);
    console.log("Last Name:", lastname);
  }
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/doctor/alldoctor")
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching doctor list:", error);
      });
  }, []);

  const deleteDoctor = async (id) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this doctor?"
      );
      if (!confirmed) return;

      const response = await axios.delete(
        `http://localhost:5000/api/doctor/deletedoctor/${id}`
      );
      if (response.status === 200) {
        const updatedDoctors = doctors.filter((doctor) => doctor._id !== id);
        setDoctors(updatedDoctors);
        console.log("Doctor deleted:", response.data);
      } else {
        console.error("Doctor deletion failed:", response.data);
      }
    } catch (error) {
      console.error("Error deleting doctor:", error);
    }
  };

  return (
    <div className="max-w-md bg-white min-h-screen w-full">
      <div className="broder-gray-200 py-5 my-2 w-full flex items-center px-8 shadow-md">
        {/* <Link to={`/Profile/${admin._id}`} className=""> */}
        <Link>
          <img
            src={Doctor}
            alt="Doctor Icon"
            className="w-10 h-10 border-0 rounded-xl"
          />
        </Link>
        <h2 className="text-sm px-2 font-semibold text-gray-800 capitalize">
          {firstname} {lastname}
        </h2>
      </div>
      <div className="px-8">
        <h1 className="text-xs font-semibold text-gray-600 mt-20 mb-2">
          Staff
        </h1>

        {doctors.map((doctor) => (
          <div
            className="border-2 border-gray-200 p-3 my-2 w-full flex items-center rounded-xl"
            key={doctor._id}
          >
            <Link to={`/Profile/${doctor._id}`} className="">
              <img
                src={Doctor}
                alt="Doctor Icon"
                className="w-10 h-10 border-0 rounded-full"
              />
            </Link>
            <div className="px-2">
              <h2 className="text-sm font-semibold text-gray-800 capitalize">
                {doctor.firstName} {doctor.lastName}
              </h2>
              <h5 className="text-[10px] font-semibold text-gray-400">
                Cardioloy
              </h5>
            </div>
          </div>
        ))}
        <a
          href=""
          className="text-xs py-2 px-44 my-2 w-full border-0 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-black font-semibold"
        >
          STATS
        </a>
      </div>
    </div>
  );
}

export default RightSidebar;
