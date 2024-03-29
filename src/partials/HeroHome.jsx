import React, { useState } from "react";
// import Modal from "../utils/Modal"; test?

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative" id="HOME">
      {/* Ilustracion detras del hero */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="false"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-float "
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
              className="shadow-lg"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#dfdfdf" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-2 sm:px-6">
        {/* Hero content */}
        <div className="pt-12 pb-10 md:pt-12 md:pb-30 ">
          {/* Section header */}
          <div
            className="flex-col my-8 pb-12 md:pb-16 flex gap-6"
            data-aos="zoom-y-out"
            data-aos-delay="150"
          >
            <h1 className="text-6xl text-gray-800 m-0 text-left font-extrabold  tracking-tighter md:text-8xl basis-1/2">
              we bring
              <span className="text-6xl md:text-9xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-400">
                <br></br>
                {""}solutions
              </span>
              <br></br>
              {""}to your
              <span className="text-6xl md:text-9xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-400">
                <br></br>
                {""}business
              </span>
            </h1>
          </div>

          <div className="max-w-3xl mx-auto">
            <p
              className="text-xl text-gray-600 my-8 text-center"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              With <strong>MUTALO</strong>, turn your web visitors into
              customers.
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <div>
                <a
                  className="btn text-white bg-violet-500 hover:bg-violet-600 w-full mb-4 sm:w-auto sm:mb-0"
                  href="https://calendly.com/gabrielveron134/30min"
                >
                  let's do this
                </a>
              </div>
              <div>
                <a
                  className="btn text-white bg-gray-800 hover:bg-gray-700 w-full sm:w-auto sm:ml-4"
                  href="#SOLUTIONS"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            {/* <div
              className="relative flex justify-center mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <div className="flex flex-col justify-center">
                <img
                  className="mx-auto"
                  src={HeroImage}
                  // IMAGEN DEL VIDEO debo cambiar
                  width="768"
                  height="432"
                  alt="Hero"
                />
                <svg
                  className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto"
                  width="768"
                  height="432"
                  viewBox="0 0 768 432"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                      id="hero-ill-a"
                    >
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#EAEAEA" offset="77.402%" />
                      <stop stopColor="#DFDFDF" offset="100%" />
                    </linearGradient>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="99.24%"
                      id="hero-ill-b"
                    >
                      <stop stopColor="#FFF" offset="0%" />
                      <stop stopColor="#EAEAEA" offset="48.57%" />
                      <stop stopColor="#DFDFDF" stopOpacity="0" offset="100%" />
                    </linearGradient>
                    <radialGradient
                      cx="21.152%"
                      cy="86.063%"
                      fx="21.152%"
                      fy="86.063%"
                      r="79.941%"
                      id="hero-ill-e"
                    >
                      <stop stopColor="#4FD1C5" offset="0%" />
                      <stop stopColor="#81E6D9" offset="25.871%" />
                      <stop stopColor="#338CF5" offset="100%" />
                    </radialGradient>
                    <circle id="hero-ill-d" cx="384" cy="216" r="64" />
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <circle
                      fillOpacity=".04"
                      fill="url(#hero-ill-a)"
                      cx="384"
                      cy="216"
                      r="128"
                    />
                    <circle
                      fillOpacity=".16"
                      fill="url(#hero-ill-b)"
                      cx="384"
                      cy="216"
                      r="96"
                    />
                    <g fillRule="nonzero">
                      <use fill="#000" xlinkHref="#hero-ill-d" />
                      <use fill="url(#hero-ill-e)" xlinkHref="#hero-ill-d" />
                    </g>
                  </g>
                </svg>
              </div>
              <button
                className="absolute top-full flex items-center transform -translate-y-1/3 bg-white rounded-full font-medium group p-4 shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setVideoModalOpen(true);
                }}
                aria-controls="modal"
              >
                <svg
                  className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                  <path d="M10 17l6-5-6-5z" />
                </svg>
                <span className="ml-3">Watch the full video (2 min)</span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
