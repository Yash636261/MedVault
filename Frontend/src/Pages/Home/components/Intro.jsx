import React from "react";
import { Link } from "react-router-dom";
import Introcard from "../../../components/comp/cards/Introcard";
import access from "../../../assets/access.png";
import security from "../../../assets/security.png";
import auth from "../../../assets/auth.png";
import audit from "../../../assets/audit.png";
import Interoperability from "../../../assets/interp.png";
import privacy from "../../../assets/privacy.png";
import presc from "../../../assets/presc.png";
import portals from "../../../assets/portal.png";

function Intro() {
  const data = [
    [
      {
        title: "Data Security",
        height: 200,
        image: security,
      },
      {
        title: "Accessibility",
        height: 200,
        image: access,
      },
    ],
    [
      {
        title: "Audit Trails",
        height: 150,
        image: audit,
      },
      {
        title: "User Authentication",
        height: 250,
        image: auth,
      },
    ],
    [
      {
        title: "Privacy Protection",
        height: 300,
        image: privacy,
      },
      {
        title: "E-Prescriptions",
        height: 100,
        image: presc,
      },
    ],
  ];

  return (
    <div className=" text-black pt-28 pb-5 max-md:py-1 px-5 bg-gray-100">
      <h1 className="text-3xl font-semibold text-black text-center my-20 font-mono">
        About
      </h1>
      <div className="flex max-lg:flex-col justify-around items-center">
        <div className=" my-10 lg:max-w-md md:px-10">
          <h1 className="text-3xl font-bold text-left mb-4">
            What is MedVault?
          </h1>
          <p className="text-sm leading-6 text-gray-700">
            MedVault is a cutting-edge patient data management system
            meticulously crafted to ensure the highest standards in data
            security, accessibility, interoperability, and privacy protection
            within the healthcare ecosystem. Our unwavering commitment includes
            robust encryption and strict access controls, with a primary focus
            on safeguarding patient confidentiality.
          </p>
        </div>
        <div className="flex gap-4  mx-auto">
          {data.map((row, rowIndex) => (
            <div className="flex-1" key={rowIndex}>
              {row.map((item, colIndex) => (
                <Introcard
                  title={item.title}
                  height={item.height}
                  key={colIndex}
                  image={item.image}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 flex justify-center">
        <Link
          to="/"
          className="border p-2 rounded hover:border-gray-400 text-xs"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
}

export default Intro;
