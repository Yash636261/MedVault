// import Footer from "../landingPage/Footer";
import patient_card_profile from "../../assets/img/dashboard/admin-card-profile.png";
import name from "../../assets/img/dashboard/patient-profile-name.png";
import birth from "../../assets/img/dashboard/patient-profile-birth.png";
import address from "../../assets/img/dashboard/patient-profile-address.png";
import phone from "../../assets/img/dashboard/patient-profile-phone.png";
import mail from "../../assets/img/dashboard/patient-profile-mail.png";
import blood from "../../assets/img/dashboard/patient-profile-blood.png";
import healthid from "../../assets/img/dashboard/patient-profile-healthid.png";
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
    
    <div className="font-poppins col-span-10 h-screen overflow-y-scroll" style={{
      background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
    }}>
      <div className="flex mt-16 justify-center">
        <div className="p-4 px-10 m-8 bg-white shadow-md mx-auto rounded-md flex flex-col justify-center items-center overflow-hidden">
          <div className="flex justify-center">
            <img
              src={patient_card_profile}
              className="h-40 w-40 rounded-full border-2 p-4"
              alt="patient-profile"
            />
          </div>
          <div className="mt-6">
            <div className="flex mx-8 items-center">
              <img src={name} className="h-8 w-8" />
              <h2 className="ml-2 text-lg font-semibold">{patient.firstName} {patient.lastName}</h2>
            </div>
            <div className="flex mx-8 mt-4 items-center">
              <img src={birth} className="h-5 w-5" />
              <h2 className="ml-4">{convertDatetoString(patient.dateOfBirth)}</h2>
            </div>
            <div className="flex mx-8 mt-4 items-center">
              <img src={blood} className="h-6 w-6" />
              <h2 className="ml-4">{patient.bloodGroup}</h2>
            </div>
            <div className="flex mx-8 mt-4 items-center">
              <img src={phone} className="h-6 w-6" />
              <h2 className="ml-2">{patient.phone}</h2>
            </div>
            <div className="flex mx-8 mt-4 items-center">
              <img src={mail} className="h-6 w-5" />
              <h2 className="ml-4">{patient.email}</h2>
            </div>
            <div className="flex mx-8 mt-4 items-center">
              <img src={healthid} className="h-6 w-5" />
              <h2 className="ml-4">{id}</h2>
            </div>
          </div>
          <Link to={`/update/${patient._id}`} className="bg-blue-500 text-white px-4 py-2 my-4 rounded-md hover:bg-blue-600 transition duration-300">
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
