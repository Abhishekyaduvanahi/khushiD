import React from "react";
import { highSchool } from "../constants/Detail";
import { enterSchool } from "../constants/Detail";
import { college } from "../constants/Detail";
// import projectImgae1 from "../assets/faceRecognition.webp";
// import projectImgae2 from "../assets/languageTranslator.png";
// import projectImgae3 from "../assets/resortManagementSystem.jpeg";

const Project = () => {
  return (
    <section id="projects" className="h-auto flex flex-col w-full   bg-white">
      <h1 className=" text-[40px] font-serif font-bold mx-auto mt-2">
        Education
      </h1>
      <div className="bg-colorText rounded-3xl p-4 m-4">
        {/* card main container */}
        <div className="flex flex-col items-center justify-center md:flex-row ">
          {/* 1st cardc for Graduation  */}
          <div className="bg-white flex flex-col w-[95%] h-auto items-center justify-center rounded-3xl  p-5 ">
            {/* <img className="h-[240px]" src={projectImgae1} alt="" /> */}
            {/* Degree Title  : */}
            <p className="text-[18px] font-bold">1. HIGH School</p>
            {/* College Name : */}
            <p className="text-[16px] ">{highSchool.school}</p>

            <p className="text-[16px] ">Location:{highSchool.address}</p>
            {/* <p className="text-[20px] font-bold">
            Branch : Information technolgy
          </p> */}
            <p className="text-[16px] ">CGPA / % :{highSchool.percentage}</p>
            <p className="text-[16px] ">
              Course Duration : {highSchool.duration}
            </p>

            {/* project Desription: */}

            {/* <p> source Code: </p>
          <p>preview link :</p> */}
          </div>
          {/* 2nd card */}
          <div className="bg-white flex flex-col w-[95%] h-auto items-center justify-center rounded-3xl m-2 p-5 ">
            {/* <img className="h-[240px]" src={projectImgae1} alt="" /> */}
            {/* Degree Title  : */}
            <p className="text-[18px] font-bold">2. {enterSchool.course}</p>
            {/* College Name : */}
            <p className="text-[16px] ">{enterSchool.school}</p>

            <p className="text-[16px] ">Location:{enterSchool.address}</p>
            <p className="text-[16px] ">Branch : {enterSchool.course}</p>
            <p className="text-[16px] ">CGPA / % :{enterSchool.percentage}</p>
            <p className="text-[16px] ">
              Course Duration : {enterSchool.duration}
            </p>

            {/* project Desription: */}

            {/* <p> source Code: </p>
          <p>preview link :</p> */}
          </div>
          {/* 3rd card for school */}
          <div className="bg-white flex flex-col w-full h-auto items-center justify-center rounded-3xl m-2 p-5 ">
            {/* <img className="h-[240px]" src={projectImgae1} alt="" /> */}
            {/* Degree Title  : */}
            <p className="text-[18px] font-bold">3. Graduation (B.tech)</p>
            {/* College Name : */}
            <p className="text-[16px] wrap mx-auto flex">{college.school}</p>

            <p className="text-[16px] ">Location:Kanpur</p>
            <p className="text-[16px] ">Branch : {college.course}</p>
            <p className="text-[16px] ">CGPA :{college.percentage}</p>
            <p className="text-[16px] ">Course Duration : {college.duration}</p>

            {/* project Desription: */}

            {/* <p> source Code: </p>
          <p>preview link :</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
