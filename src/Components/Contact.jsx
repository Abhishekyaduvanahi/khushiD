import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";

import { Links } from "../constants/Detail";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-auto w-full flex flex-col items-center bg-[#25b79f]
       text-[#07374a] mt-8 mb-8"
    >
      <div className="w-full max-w-4xl p-6">
        <h2 className="text-4xl  font-bold mb-6 text-center">Contact Me</h2>
        <form className="flex flex-col space-y-6">
          {/* Name Field */}
          <div className="flex flex-row items-center">
            <label htmlFor="name" className="font-semibold text-lg w-24">
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full md:w-[700px] h-auto rounded-full p-2 text-black"
            />
          </div>
          {/* Email Field */}
          <div className="flex flex-row items-center">
            <label htmlFor="email" className="font-semibold text-lg w-24">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full md:w-[700px] h-auto rounded-full p-2 text-black"
            />
          </div>
          {/* Message Field */}
          <div className="flex flex-row items-center">
            <label htmlFor="message" className="font-semibold text-lg w-24">
              Message:
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              rows="4"
              className="w-full md:w-[700px] h-auto rounded-lg p-2 text-black"
            ></textarea>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-black text-white py-2 px-6 rounded-full mt-4 hover:bg-slate-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
      {/* Social Media Links */}
      <div className="flex mb-8 space-x-4">
        <a href={Links.linkdin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={25} className="text-black hover:text-blue-700" />
        </a>
        <a href={Links.github} target="_blank" rel="noopener noreferrer">
          <FaGithub size={25} className="text-black hover:text-gray-700" />
        </a>
        <a href={Links.twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter size={25} className="text-black hover:text-blue-500" />
        </a>
        <a href={Links.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare
            size={25}
            className="text-black hover:text-pink-500"
          />
        </a>
      </div>
    </section>
  );
};

export default Contact;
