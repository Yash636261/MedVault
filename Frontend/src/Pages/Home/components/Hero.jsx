
import { Link } from 'react-router-dom'
import heroimage from '../../../assets/heroimage.png'

function Hero() {
  return (
    <div className='bg-slate-900 text-white lg:min-h-screen'>
        <div className=" relative max-lg:flex justify-center items-center mx-auto max-w-4xl py-10">
        <div className="flex   max-lg:flex-col-reverse mx-auto text-light lg:min-h-screen">
           
          <div className=" lg:text-left text-center px-5 my-auto">

            {/* introduction */}

            <p className="font-bold text-border text-3xl lg:text-5xl mb-3 tracking-wide">
            MedVault
            </p>
            <p className="text-md lg:text-lg mb-10">
            Transforming Healthcare : Your Trusted Partner in Secure Health Data Management.
            </p>
            <Link
              to='/login'
              className="bg-blue-500 hover:bg-blue-600 text-sm lg:text-lg text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
              LogIn
            </Link>
            </div>

          {/* Hero image */}

          <div className="mx-auto flex max-w-lg max-lg:max-w-sm justify-center items-cover pl-14 py-20">
            <img
              className=" border-0 object-contain"
              src={heroimage}
              alt="profileimage"
            />
          </div>
          </div>
      </div>
    </div>
  )
}

export default Hero