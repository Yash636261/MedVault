import React from "react";
import { Link } from "react-router-dom";

function Intro() {
  const featureData = [
    {
      title: "Data Security",
      description: "Ensuring the highest level of data security for patient records."
    },
    {
      title: "Accessibility",
      description: "Providing secure access to patient data from anywhere, reducing delays in patient care."
    },
    {
      title: "Interoperability",
      description: "Facilitating the exchange of patient data between healthcare providers and systems."
    },
    {
      title: "Privacy Protection",
      description: "Prioritizing patient privacy with robust encryption and access controls."
    },
  ];

  return (
    <div className=" text-black py-5 px-5" style={{
      background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
    }}>
      <div className="max-w-2xl my-10">
        <h1 className="text-2xl font-semibold text-left my-2">
          What is the MedVault?
        </h1>
        <p className="text-sm">
          MedVault is an advanced patient data management system designed to ensure data security, accessibility, interoperability, and privacy protection within the healthcare ecosystem. Our commitment includes robust encryption and stringent access controls, prioritizing patient confidentiality.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featureData.map((feature, index) => (
            <div className="bg-slate-900 text-white rounded-lg p-5 hover:shadow-sm hover:shadow-black" key={index}>
              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 flex justify-center">
        <Link to="/" className="border p-2 rounded hover:border-gray-400 text-xs">
          Learn more
        </Link>
      </div>
    </div>
  );
}

export default Intro;
