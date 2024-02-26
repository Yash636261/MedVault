import React from "react";
import patientListImg from "../../../assets/img/dashboard/patient_list.png";
import more from "../../../assets/more.png";

function Statscard(props) {
  return (
    <div className=" hover:shadow-md relative border-0 rounded-lg px-6 py-4 bg-gray-100 transition duration-200 hover:bg-[#63B3AF]  hover:text-white w-52">
    
      <img className="absolute right-2 top-2 w-4 " src={more} alt="" />

      <img className="w-9 border-0 rounded-lg bg-gray-200 hover:bg-white p-1" src={patientListImg} alt="" />
      <div className="pt-4">
        <h3 className=" text-base font-medium">{props.title}</h3>
        <h4 className=" text-xs font-normal">{props.patients} Patients</h4>
      </div>
    </div>
  );
}

export default Statscard;
