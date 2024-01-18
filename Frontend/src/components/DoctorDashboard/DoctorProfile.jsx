
import patient_card_profile from "../../assets/img/dashboard/admin-card-profile.png";
import name from "../../assets/img/dashboard/patient-profile-name.png";
import birth from "../../assets/img/dashboard/patient-profile-birth.png";
import phone from "../../assets/img/dashboard/patient-profile-phone.png";
import mail from "../../assets/img/dashboard/patient-profile-mail.png";
import blood from "../../assets/img/dashboard/patient-profile-blood.png";
import home from "../../assets/img/dashboard/doctor-profile-home.png";
import { useEffect, useState } from "react";
import { useParams , Link} from "react-router-dom";
import axios from "axios";


const DoctorProfile = () => {
    const {id} = useParams();
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

    const fetchData = async () =>{
        try {
            const response = await axios.get(`http://localhost:5000/api/doctor/doctor/${id}`)
            console.log(response.data);
            setDoctor(response.data)
        } catch (error) {
            console.error('Error fetching doctor',error);
        }
    }

    fetchData();

  }, [id]);

  return (
    <body className="min-h-screen font-poppins col-span-10 py-16 bg-slate-900 px-5">
      <div className="bg-slate-800 shadow-xl border-0 rounded-lg py-4 px-4 flex justify-between">
      <h1 className="font-bold text-white text-2xl">Profile</h1>
      <Link to='/patient' className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Patients</Link>
        
      </div>
      <div className="grid grid-cols-2 mt-16">
        <div className="p-4 m-8 bg-white shadow-lg w-2/3 mx-auto rounded-md ">
          <div className="flex justify-center">
            <img
              src={patient_card_profile}
              className="h-40 w-40 rounded-full border-2  p-4 "
              alt="patient-profile"
            />
          </div>
          <div className="mt-6">
            <div className="flex ml-8 ">
              <img src={name} className="h-8 w-8  " />
              <div className="flex mt-1">
                <h2 className="ml-2">Dr.</h2>
                <h2 className="ml-2">{doctor.firstName}</h2>
                <h2 className="ml-2">{doctor.lastName}</h2>
              </div>
            </div>
            <div className="flex ml-8 mt-4">
              <img src={birth} className="h-5 w-5 ml-1" />
              <h2 className="ml-4">{convertDatetoString(doctor.dateOfBirth)}</h2>
            </div>
            <div className="flex ml-8 mt-4">
              <img src={blood} className="h-6 w-6" />
              <h2 className="ml-4">{doctor.bloodGroup}</h2>
            </div>
            <div className="flex ml-8 mt-4">
              <img src={phone} className="h-6 w-6 " />
              <h2 className="ml-4">+91</h2>
              <h2 className="ml-2">{doctor.contact}</h2>
            </div>
            <div className="flex ml-8 mt-4">
              <img src={mail} className="h-6 w-5 " />
              <h2 className="ml-4 ">{doctor.email}</h2>
            </div>
          </div>
        </div>
        <div className="my-2">
          <div className="p-8 m-2 bg-white shadow-md w-2/3 rounded-md">
            <div className="flex mt-3">
              <img src={home} className="h-6 w-6" />
              <div className="ml-4">
                <h2>
                  {`${doctor.street},  ${doctor.city}, ${doctor.state}-${doctor.postalCode}`}
                </h2>
              </div>
            </div>
          </div>

          <div className="p-8 m-2 bg-white shadow-md w-2/3 rounded-md mt-10">
            <h1 className="font-bold flex justify-center text-xl">Specialization</h1>
            <div className="flex mt-4 ">
              {/* Mapping through doctor's specialization array */}
              {doctor.specialization.map((specialization, index) => (
                <span key={index} className="text-lg mr-2">
                  {specialization}
                </span>
              ))}
            </div>
          </div>
          {/* <div className="p-8 m-2 bg-white shadow-md w-2/3 rounded-md mt-10">
            <h1 className="font-bold flex justify-center text-xl">
              Hospital Details
            </h1>
            <div className="flex mt-4 ">
              <img src={hospital} className="h-6 w-6" />
              <h1 className="ml-4"> {doctor.org}</h1>
            </div>

            <div className="flex mt-3">
              <img src={hospital_contact} className="w-5 h-5 " />

              <h1 className="ml-4">{doctor.orgNumber}</h1>
            </div>

            <div className="flex mt-6">
              <img src={address} className="h-7 w-8" />
              <div className="ml-4 ">
                <h2>
                  {`${doctor.orgAddress.building},  ${doctor.orgAddress.city},  ${doctor.orgAddress.taluka},  ${doctor.orgAddress.district},  ${doctor.orgAddress.state}-  ${doctor.orgAddress.pincode}`}
                </h2>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </body>
  );
};

export default DoctorProfile;
