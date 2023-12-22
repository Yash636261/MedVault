import React, { useState } from 'react';

const Login = () => {
  const [selectedOption, setSelectedOption] = useState('admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here based on the selectedOption, email, and password
    console.log(`Logging in as ${selectedOption} with email: ${email} and password: ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96 flex flex-col justify-center text-center">
        <h2 className="text-2xl font-bold my-8">Login</h2>
        
        <div className="flex mb-4 mx-auto">
          <button
            className={`${
              selectedOption === 'admin' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            } px-4 py-2 rounded-l focus:outline-none`}
            onClick={() => handleOptionChange('admin')}
          >
            Admin
          </button>
          <button
            className={`${
              selectedOption === 'patient' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            } px-4 py-2 focus:outline-none`}
            onClick={() => handleOptionChange('patient')}
          >
            Patient
          </button>
          <button
            className={`${
              selectedOption === 'doctor' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
            } px-4 py-2 rounded-r focus:outline-none`}
            onClick={() => handleOptionChange('doctor')}
          >
            Doctor
          </button>
        </div>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="border rounded py-2 px-3 mb-3 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="border rounded py-2 px-3 mb-3 focus:outline-none"
          />
          
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded mt-4"
            type="submit"
          >
            Login as {selectedOption}
          </button>

          <a href="" className='text-center'>new user, Register here</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
