import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import doctorIcon from "../../assets/img/dashboard/admin-card-profile.png"; // Replace with your actual doctor icon image path
import Button from "../comp/Button";

const DoctorList = () => {
    const [doctors, setDoctors] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
  
    useEffect(() => {
      axios
        .get("https://medvault-khkb.onrender.com/api/doctor/alldoctor")
        .then((response) => {
          setDoctors(response.data);
        })
        .catch((error) => {
          console.error("Error fetching doctor list:", error);
        });
    }, []);
  
    const deleteDoctor = async (id) => {
      try {
        const confirmed = window.confirm("Are you sure you want to delete this doctor?");
        if (!confirmed) return;
  
        const response = await axios.delete(`https://medvault-khkb.onrender.com/api/doctor/deletedoctor/${id}`);
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
  
    const filteredDoctors = doctors.filter(
      (doctor) =>
        doctor.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className="min-h-screen py-12 px-5 bg-gray-100 text-gray-800">
        <div className="flex justify-between mt-10 border-0 px-5 py-2 rounded-md bg-white shadow-lg">
          <h1 className="text-2xl font-bold">Doctor List</h1>
          <Button link='/adddoctor' name='Add Doctor' />
        </div>
        <div className="py-10">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-100 border border-gray-800 text-gray-800 px-4 py-2 rounded-md mb-4"
          />
          <ul className="space-y-4">
            {filteredDoctors.map((doctor) => (
              <li
                key={doctor._id}
                className="flex items-center justify-between bg-white rounded-md p-4 shadow-md hover:shadow-xl transition hover:-translate-y-1 duration-200"
              >
                <div className="flex items-center">
                  <img
                    src={doctorIcon}
                    alt="Doctor Icon"
                    className="h-10 w-10 rounded-full mr-4"
                  />
                  <Link to={`/profile/doctor/${doctor._id}`} className="font-semibold hover:underline">
                    {doctor.firstName} {doctor.lastName}
                  </Link>
                </div>
                <div>
                  <button
                    onClick={() => deleteDoctor(doctor._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default DoctorList;
