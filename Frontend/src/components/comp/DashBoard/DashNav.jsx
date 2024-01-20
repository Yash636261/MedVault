import {useState} from 'react'
import { Link } from "react-router-dom";
import patientListImg from "../../../assets/img/dashboard/patient_list.png";
import doctorListImg from "../../../assets/img/dashboard/doctor_list.png";
import Op from "../../../assets/Open.svg"
import Home from "../../../assets/Home.svg"

function DashNav() {
    const [isOpen,setOpen]=useState(false);

    const Open =()=>{
        setOpen(!isOpen);
    }
  return (
    
    <div className="fixed border-0 rounded-xl ml-2 my-2 w-14 transition duration-800 bg-white h-screen">
    <div className={`relative flex flex-col justify-center items-center font-bold font-poppins my-4 h-full `}>
      <button className="absolute w-8 -right-4 bg-white border-0 p-1 rounded-r-full" onClick={Open} >
        <img src={Op} alt="" />
      </button>
      <Link
        to="/"
        className="text-gray-400 mt-1 my-2 w-10 bg-white  hover:bg-gray-100 p-2 border-0 rounded-lg"
      >
      <img src={Home} alt="" />
      </Link>
      <button
        className="text-gray-400 mt-1 my-2 w-10 bg-white  hover:bg-gray-100 p-2 border-0 rounded-lg"
      >
        <img src={patientListImg} alt="patient-list" />
      </button>
      <button
        className="text-gray-400 mt-1 my-2 w-10 bg-white  hover:bg-gray-100 p-2 border-0 rounded-lg"
      >
        <img src={doctorListImg} alt="doctor-list" />
      </button>
    </div>
  </div>
  )
}

export default DashNav
