
import { Link } from 'react-router-dom'
import heroimage from '../../../assets/heroimage.png'

function Hero() {
  return (
    
    <div className=' text-white min-h-screen flex items-center justify-center' style={{
      background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
    }}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-6 py-24">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            MedVault
          </h1>
          <p className="text-md md:text-lg mb-8">
            Empowering Healthcare: Your Reliable Partner in Secure Health Data Management.
          </p>
          <Link
            to='/login'
            className="bg-blue-700 hover:bg-blue-800 text-sm md:text-lg text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block"
          >
            Log In
          </Link>
        </div>

        {/* Hero image */}
        <div className="md:w-1/2 md:ml-12 mt-6 md:mt-0">
          <img
            className="w-full rounded-lg "
            src={heroimage}
            alt="profileimage"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero