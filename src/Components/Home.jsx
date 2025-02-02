import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";

import { Links } from "../constants/Detail";

import { about } from "../constants/Detail";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen md:h-screen flex bg-[#07374a]  flex-col justify-center items-center text-white"
    >
      {/* <h1 className="text-4xl font-bold">Welcome to the Home Section</h1> */}
      {/* this is the main container */}
      <div className=" flex flex-col md:flex-row justify-center items-center  ">
        {/* this div is for image */}
        <div className=" flex flex-col  ">
          <p className=" font-serif text-[20px] md:text-[60px]  font-bold p-18 ml-4 mx-auto">
            {about.name}
          </p>
          {/* <p className=" font-serif text-4xl md:text-[60px] font-bold "> </p> */}
        </div>

        {/* <div className=" flex mt-8 mb-4 ">
          <img className=" w-[200px] h-[200px]" src={person} alt="" />
        </div> */}
        {/* this div is for name  */}
      </div>
      <p className="md:w-[60%] w-[80%] font-sans mb-2 p-8 md:text-[30px]">
        {about.description}
      </p>

      {/* Social Media Links */}
      <div className="flex mb-8 space-x-4 text-white">
        <a href={Links.linkdin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={25} className="text-white hover:text-blue-700" />
        </a>
        <a href={Links.github} target="_blank" rel="noopener noreferrer">
          <FaGithub size={25} className=" hover:text-gray-700" />
        </a>
        <a href={Links.twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter size={25} className="hover:text-blue-500" />
        </a>
        <a href={Links.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare size={25} className=" hover:text-pink-500" />
        </a>
      </div>
    </section>
  );
};

export default Home;
