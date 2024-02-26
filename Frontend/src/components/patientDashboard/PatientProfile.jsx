// import Footer from "../landingPage/Footer";

import profile from "../../assets/img/landingPage/profile.png";
import { useNavigate,useParams ,Link } from "react-router-dom";
import { useEffect, useState} from "react";
import axios from "axios";


const PatientProfile = (props) => {
    const { id } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    disease: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('hi');
        const response = await axios.get(`http://localhost:5000/api/patient/getpatient/${id}`);
        console.log(response.data);
        setPatient(response.data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };
  
    fetchData();
  }, [id]);
//   useEffect(() => {
//     async function getpatient() {
//       const res = await fetch("/getpatient");
//       const data = await res.json();
//       if (data.AuthError) {
//         props.settoastCondition({
//           status: "info",
//           message: "Please Login to proceed!!!",
//         });
//         props.setToastShow(true);
//         navigate("/");
//       } else {
//         setPatient(data.patient);
//       }
//     }
//     getpatient();
//   }, []);

  const convertDatetoString = (dateString) => {
    let date = new Date(dateString);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

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
            src={profile}
            className="w-40 border-4 border-white rounded-full bg-white"
            width={100}
            height={100}
          />
          <p className="text-2xl">
            {patient.firstName} {patient.lastName}
          </p>

          <p className="text-gray-700">{patient.email}</p>
        </div>
        <div className="flex-1 flex flex-col items-start justify-end px-8 mt-2">
          <div className="flex items-center space-x-4 mt-2">
            <Link to={`/update/${patient._id}`} className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
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
            </Link>
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
                  {patient.firstName} {patient.lastName}
                </span>
              </li>
              <li className="flex py-2 border-b">
                <span className="w-24 font-bold">Birthday:</span>
                <span className="text-gray-700">
                  {convertDatetoString(patient.dateOfBirth)}
                </span>
              </li>
              <li className="flex py-2 border-b">
                <span className="w-24 font-bold">bloodGroup:</span>
                <span className="text-gray-700"> {patient.bloodGroup}</span>
              </li>
              <li className="flex py-2 border-b">
                <span className="w-24 font-bold">Mobile:</span>
                <span className="text-gray-700">+91 {patient.phone}</span>
              </li>
              <li className="flex py-2 border-b">
                <span className="w-24 font-bold">street:</span>
                <span className="text-gray-700">{patient.street}</span>
              </li>
              <li className="flex py-2 border-b">
                <span className="w-24 font-bold">city:</span>
                <span className="text-gray-700">{patient.city}</span>
              </li>
              <li className="flex py-2 border-b">
                <span className="w-24 font-bold">state:</span>
                <span className="text-gray-700">{patient.state}</span>
              </li>
              <li className="flex py-2 border-b">
                <span className="w-24 font-bold">postalCode:</span>
                <span className="text-gray-700">{patient.postalCode}</span>
              </li>
              <li className="flex py-2 border-b">
                <span className="w-24 font-bold">Email:</span>
                <span className="text-gray-700">{patient.email}</span>
              </li>
              <li className="flex py-2 border-b">
                <span className="w-24 font-bold">Location:</span>
                <span className="text-gray-700">{patient.city}</span>
              </li>
              <li className="flex py-2 border-b">
                <span className="w-24 font-bold">Languages:</span>
                <span className="text-gray-700">English, Spanish</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
