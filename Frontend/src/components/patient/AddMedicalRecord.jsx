import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams} from "react-router-dom";

function AddMedicalRecord() {
  const { id } = useParams();
  const [patient, setPatient] = useState({
    diseases: [],
  });

  const [newDisease, setNewDisease] = useState({
    disease: "",
    doctor: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/patient/getpatient/${id}`
        );
        console.log(response.data);
        setPatient(response.data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDisease((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(newDisease);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedNewDisease = { ...newDisease };

    // Add new disease to the patient's diseases array
    const updatedPatient = {
      ...patient,
      diseases: [...patient.diseases, updatedNewDisease],
    };

    // Send updated patient data to the server
    try {
      const response = await axios.put(
        `http://localhost:5000/api/patient/updatepatient/${id}`,
        updatedPatient
      );
      console.log("Patient updated:", response.data);
      window.history.back();
    } catch (error) {
      console.error("Error updating patient:", error);
    }
  };

  const cancel = (e) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <div className="min-h-screen py-12 px-10 flex flex-col justify-center bg-white">
      {/* Your form */}
      
      <div className="min-h-screen bg-white
       py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                  i
                </div>
                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 className="leading-relaxed">Add a disease</h2>
                  <p className="text-sm text-gray-500 font-normal leading-relaxed">
                    Add a new disease to the patient&apos;s medical record
                  </p>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="flex flex-col">
                      <label className="leading-loose">Diseases Name</label>
                      <input
                        type="text"
                        name="disease"
                        placeholder="Enter Disease"
                        value={newDisease.disease}
                        onChange={handleChange}
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Doctor Name</label>
                      <input
                        type="text"
                        name="doctor"
                        placeholder="Enter Name of Doctor"
                        value={newDisease.doctor}
                        onChange={handleChange}
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      />
                    </div>
                    {/* <div className="flex flex-col">
                      <label className="leading-loose">Enter year (temp)</label>
                      <input
                        type="text"
                        name="yrs"
                        placeholder="Enter Years"
                        value={newDisease.yrs}
                        onChange={handleChange}
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      />
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col">
                        <label className="leading-loose">Start</label>
                        <div className="relative focus-within:text-gray-600 text-gray-400">
                          <input
                            type="text"
                            className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="25/02/2020"
                          />
                          <div className="absolute left-3 top-2">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="leading-loose">End</label>
                        <div className="relative focus-within:text-gray-600 text-gray-400">
                          <input
                            type="text"
                            className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                            placeholder="26/02/2020"
                          />
                          <div className="absolute left-3 top-2">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div> 
                    <div className="flex flex-col">
                      <label className="leading-loose">Event Description</label>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Optional"
                      />
                    </div> */}
                  </div>
                  <div className="pt-4 flex items-center space-x-4">
                    <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none" onClick={(e)=> cancel(e)}>
                      <svg
                        className="w-6 h-6 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>{" "}
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMedicalRecord;
