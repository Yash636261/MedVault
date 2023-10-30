import React from "react";
import { Link } from "react-router-dom";

function Intro() {

    
    const featureData = [
      {
        title: "Data Security",
        description: "Our blockchain technology ensures the highest level of data security for patient records."
      },
      {
        title: "Decentralized Access",
        description: "Access patient data securely from anywhere, reducing delays and enhancing patient care."
      },
      {
        title: "Interoperability",
        description: "Seamlessly exchange patient data between healthcare providers and systems, improving collaboration."
      },
      {
        title: "Privacy Protection",
        description: "Patient privacy is our top priority, with robust encryption and access controls."
      },
    ];
  return (
    <div className="bg-slate-800 text-white py-5 px-5">
      <div className="max-w-2xl my-10">
        <h1 className="text-2xl font-semibold text-left my-2">
          What is the MedVault?
        </h1>
        <p className="text-sm">
        MedVault is a cutting-edge patient data management system, harnessing the power of blockchain technology to ensure unrivaled data security, decentralized access, and seamless interoperability within the healthcare ecosystem. Our commitment to privacy protection includes robust encryption and stringent access controls, making patient confidentiality our utmost priority.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {featureData.map((feature, index) => (
          <div className="bg-slate-900 rounded-lg p-5 hover:shadow-sm hover:shadow-black" 
          key={index}>
          <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
          <p>
          {feature.description}
          </p>
        </div>
          ))}
        </div>
      </div>
      <div className="my-10 flex justify-center">
        <Link to="/" className="border p-2 rounded hover:border-gray-400 text-xs">Learn more</Link>
      </div>
    </div>
  );
}

export default Intro;