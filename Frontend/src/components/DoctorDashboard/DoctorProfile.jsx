import Doctor from "../../assets/img/dashboard/doctor_profile.jpeg";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const DoctorProfile = () => {
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

  const convertDatetoString = (dateString) => {
    let date = new Date(dateString);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://medvault-khkb.onrender.com/api/doctor/doctor/${id}`
        );
        console.log(response.data);
        setDoctor(response.data);
      } catch (error) {
        console.error("Error fetching doctor", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="h-full p-8 bg-gray-100">
      <div className="pb-8 bg-white rounded-lg shadow-xl max-w-6xl mx-auto">
        <div className="w-full h-[250px]">
          <img
            src="https://i.stack.imgur.com/vhoa0.jpg"
            className="w-full h-full rounded-tl-lg rounded-tr-lg"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col ml-10 -mt-20 items-left">
          <img
            src={Doctor}
            className="w-40 border-4 border-white rounded-full"
            width={100}
            height={100}
          />
          <p className="text-2xl">
            {doctor.firstName} {doctor.lastName}
          </p>

          <p className="text-gray-700">{doctor.email}</p>
        </div>
        <div className="flex-1 flex flex-col items-start justify-end px-8 mt-2">
          <div className="flex items-center space-x-4 mt-2">
            <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Edit</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col my-4 space-y-4 2xl:flex-row 2xl:space-y-0 2xl:space-x-4 max-w-6xl mx-auto">
        <div className="flex flex-col w-full 2xl:w-1/3">
          <div className="flex-1 p-8 bg-white rounded-lg shadow-xl">
            <h4 className="text-xl font-bold text-gray-900">Personal Info</h4>
            <ul className="mt-2 text-gray-700">
              <li className="flex py-2 border-y">
                <span className="w-24 font-bold">Full name </span>
                <span className="text-gray-700">
                  {doctor.firstName} {doctor.lastName}
                </span>
              </li>
              <li className="flex py-2 border-b">
                <span className="w-24 font-bold">Birthday:</span>
                <span className="text-gray-700">
                  {convertDatetoString(doctor.dateOfBirth)}
                </span>
              </li>
              <li className="flex py-2 border-b">
                <span className="w-24 font-bold">bloodGroup:</span>
                <span className="text-gray-700"> {doctor.bloodGroup}</span>
              </li>
              <li className="flex py-2 border-b">
                <span className="w-24 font-bold">Mobile:</span>
                <span className="text-gray-700">+91 {doctor.contact}</span>
              </li>
              <li className="flex py-2 border-b">
                <span className="w-24 font-bold">street:</span>
                <span className="text-gray-700">{doctor.street}</span>
              </li>
              <li className="flex py-2 border-b">
                <span className="w-24 font-bold">city:</span>
                <span className="text-gray-700">{doctor.city}</span>
              </li>
              <li className="flex py-2 border-b">
                <span className="w-24 font-bold">state:</span>
                <span className="text-gray-700">{doctor.state}</span>
              </li>
              <li className="flex py-2 border-b">
                <span className="w-24 font-bold">postalCode:</span>
                <span className="text-gray-700">{doctor.postalCode}</span>
              </li>
              <li className="flex py-2 border-b">
                <span className="w-24 font-bold">Email:</span>
                <span className="text-gray-700">{doctor.email}</span>
              </li>
              <li className="flex py-2 border-b">
                <span className="w-24 font-bold">Location:</span>
                <span className="text-gray-700">{doctor.city}</span>
              </li>
              <li className="flex py-2 border-b">
                <span className="w-24 font-bold">Languages:</span>
                <span className="text-gray-700">English, Spanish</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-full 2xl:w-2/3">
          <div className="flex-1 p-8 bg-white rounded-lg shadow-xl">
            <h4 className="text-xl font-bold text-gray-900">About</h4>
            <p className="mt-2 text-gray-700">
              I'm a software engineer on a mission to bring innovative ideas to
              life. With a solid background in Computer Science and a knack for
              problem-solving, I dive headfirst into every project. Whether it's
              coding or collaborating with teams, I thrive in dynamic
              environments. Outside of work, you'll catch me exploring new tech
              trends, traveling to exciting destinations, and capturing moments
              through my lens as a passionate photographer. Can't wait to
              connect and share ideas!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
