import React from "react";
import Rohan from './assets/Rohan-removebg-preview.png';
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

function Resume() {
  useEffect(()=>{
          Aos.init({
            duration:1000,
            once:true,
          })
        },[])
  return (
    <div className="px-6 py-16 b text-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold uderline-none md:underline md:decoration-pink-500 mb-10"data-aos="slide-right">
        Why You Should Hire Me for Your Next Project
      </h1>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        
        <div className="w-full md:w-1/3"data-aos="zoom-in">
          <img src={Rohan} alt="Rohan" className="w-full max-w-xs mx-auto" />
        </div>

        {/* Text and Buttons */}
        <div className="w-full md:w-2/3 text-justify md:text-left"data-aos="fade-up">
          <p className=" text-lg mb-8 max-w-2xl mx-auto md:mx-0">
            I'm a passionate frontend developer who builds clean, responsive, and user-friendly websites using React.js and Tailwind CSS. I bring a combination of technical skill, creativity, and communication that ensures your project is in the right hands.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="/Rohan Resume.docx"
              download
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-3 rounded-lg font-medium transition duration-300"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
