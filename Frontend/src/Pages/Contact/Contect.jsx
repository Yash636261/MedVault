function Contact() {
    return (
      <div className="bg-slate-900 py-20  text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col bg-slate-900 p-5 border-0 rounded-xl">
            <div className=" my-10">
              <h1 className=" capitalize text-3xl md:text-6xl text-center mb-5">
                We'd love to hear from you
              </h1>
              <p className="text-center text-xs md:text-lg">
                Whether you have query any question or suggestion we are ready to
                answer you question.
              </p>
            </div>
            <form className=" sm:w-96 mx-auto">
              <label
                htmlFor="email-address-icon"
                className="block mb-2 font-semibold text-base"
              >
                Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 "
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 48 48"
                  >
                    <linearGradient
                      id="itQzEVgZWTxgiAPpblGeca_gYI9v0NbFgxC_gr1"
                      x1="19.903"
                      x2="28.209"
                      y1="6.408"
                      y2="42.076"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#0370c8"></stop>
                      <stop offset=".484" stop-color="#036fc5"></stop>
                      <stop offset=".775" stop-color="#036abd"></stop>
                      <stop offset="1" stop-color="#0362b0"></stop>
                    </linearGradient>
                    <path
                      fill="url(#itQzEVgZWTxgiAPpblGeca_gYI9v0NbFgxC_gr1)"
                      d="M40,42H8c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h32c1.1,0,2,0.9,2,2v32C42,41.1,41.1,42,40,42z"
                    ></path>
                    <radialGradient
                      id="itQzEVgZWTxgiAPpblGecb"
                      cx="24"
                      cy="20"
                      r="9.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0"></stop>
                      <stop offset="1" stop-opacity="0"></stop>
                    </radialGradient>
                    <circle
                      cx="24"
                      cy="20"
                      r="9.5"
                      fill="url(#undefined)"
                    ></circle>
                    <linearGradient
                      id="itQzEVgZWTxgiAPpblGecc_gYI9v0NbFgxC_gr2"
                      x1="18.573"
                      x2="29.735"
                      y1="13.573"
                      y2="24.735"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#75daff"></stop>
                      <stop offset="1" stop-color="#1ea2e4"></stop>
                    </linearGradient>
                    <circle
                      cx="24"
                      cy="19"
                      r="8"
                      fill="url(#itQzEVgZWTxgiAPpblGecc_gYI9v0NbFgxC_gr2)"
                    ></circle>
                    <radialGradient
                      id="itQzEVgZWTxgiAPpblGecd"
                      cx="24"
                      cy="44.164"
                      r="16.199"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0"></stop>
                      <stop offset="1" stop-opacity="0"></stop>
                    </radialGradient>
                    <path
                      fill="url(#undefined)"
                      d="M8.138,42h31.724C38.876,34.11,32.158,28,24,28S9.124,34.11,8.138,42z"
                    ></path>
                    <linearGradient
                      id="itQzEVgZWTxgiAPpblGece_gYI9v0NbFgxC_gr3"
                      x1="16.414"
                      x2="32.016"
                      y1="32.441"
                      y2="48.043"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#75daff"></stop>
                      <stop offset="1" stop-color="#1ea2e4"></stop>
                    </linearGradient>
                    <path
                      fill="url(#itQzEVgZWTxgiAPpblGece_gYI9v0NbFgxC_gr3)"
                      d="M10.159,42h27.682C36.868,35.218,31.051,30,24,30S11.132,35.218,10.159,42z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  name="Name"
                  value=""
                  onChange=""
                  id="email-address-icon"
                  className=" border text-sm rounded-lg block w-full pl-10 p-2.5 bg-gray-100 border-gray-300  focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your name"
                />
              </div>
  
              <div className="mt-5">
                <label
                  className="block mb-2 font-semibold text-base"
                  htmlFor="password"
                >
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="email"
                    value=""
                    onChange=""
                    id="email-address-icon"
                    className=" border text-sm rounded-lg block w-full pl-10 p-2.5 bg-gray-100 border-gray-300  focus:ring-blue-500 focus:border-blue-500"
                    placeholder="name@mail.com"
                  />
                </div>
              </div>
  
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="block mb-2 font-semibold text-base"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value=""
                  onChange=""
                  rows="4"
                  className="block p-2.5 w-full text-sm bg-gray-100 border-gray-300 text-dark placeholder-dark rounded-lg border focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <div className="mt-5">
                <div className="flex flex-col my-5">
                  <button
                    type="submit"
                    onClick=""
                    className="my-1 bg-blue-800 py-2 px-4 text-sm font-semibold border-0 rounded-md   hover:bg-blue-900"
                  >
                    <span className="">Send</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;