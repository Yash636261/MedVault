import React, { useState } from "react";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
        question: "What is this healthcare platform about?",
        answer:
          "This healthcare platform is an online system designed to facilitate the management of patient records, appointments, and healthcare provider information. It aims to improve the efficiency of healthcare services by allowing patients to book appointments, view their medical history, and connect with healthcare professionals.",
      },
      {
        question: "How can I book an appointment with a doctor?",
        answer:
          "To book an appointment with a doctor, log in to your account, navigate to the appointment section, select the desired doctor, and choose an available time slot that suits you.",
      },
      {
        question: "Is my medical information secure on this platform?",
        answer:
          "Yes, we take the security and privacy of your medical information seriously. Our platform follows industry-standard security measures to ensure that your data is protected and accessible only to authorized healthcare professionals.",
      },
      {
        question: "How can I update my personal information?",
        answer:
          "You can update your personal information by logging into your account and accessing the profile settings. From there, you can edit your details such as contact information, address, and insurance information.",
      },
      {
        question: "Can I access my medical records?",
        answer:
          "Yes, you can view and access your medical records by logging into your account and navigating to the 'Medical Records' section. There, you will find a summary of your past appointments, prescriptions, and test results.",
      },
      // Add more questions and answers as needed
    ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-10 md:mb-20 bg-gray-100">
    <h1 className="text-3xl font-semibold text-black text-center my-20">Frequently Asked Questions</h1>
      <div className="divide-y divide-gray-300">
        {faqs.map((faq, index) => (
          <div key={index} className="py-3">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <svg
                className={`w-5 h-5 transition-transform transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 111.414-1.414L10 15.086l6.293-6.293a1 1 0 111.414 1.414l-7 7A1 1 0 0110 18z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {activeIndex === index && (
              <p className="mt-3 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
