import React from "react";

const About = () => {
  return (
    <div
      className=" flex flex-col md:flex-row  py-30 mb-20 mt-40 bg-gradient-to-t from-gray-200 to-white"
      data-aos="zoom-x-out"
      data-aos-delay="150"
      data-aos-
      id="ABOUT"
    >
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <h1 className="text-4xl text-gray-800 text-b my-10 text-center font-extrabold  tracking-tighter md:text-5xl basis-1/3">
        A little about us
      </h1>
      {/* <span className="hide md:text-10xl text-gray-300">|</span> */}
      <p className=" mb-20 p-10  text-xl text-gray-500 text-left basis-2/3 md:py-20  md:px-40">
        Mutalo is a young marketing agency.
        <br></br> we are a team of social media experts dedicated to helping
        businesses and individuals achieve their goals through effective social
        media marketing.
        <br></br> Whether you need help with social media management, content
        creation, advertising, or analytics, we have got you covered. Our
        ultimate goal is to help you increase your online presence, engagement,
        and revenue.
        <br></br>
        <br></br>
        <strong>
          Let us help you take your social media game to the next level.
        </strong>
      </p>
    </div>
  );
};

export default About;
