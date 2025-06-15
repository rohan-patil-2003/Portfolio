import React from "react";
import BackgroundBubbles from './BackgroundBubbles';
import Rohan from './assets/Rohan-removebg-preview.png';
import Rohan2 from './assets/Rohan5.jpg';
import Skill from "./Skills";
import Resume from "./Resume";
import Lonexa from './assets/Lonexa1.jpg';
import Todo from './assets/todo.jpg';
import Shopping from './assets/Shopping.jpg';
import 'remixicon/fonts/remixicon.css';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>

      {/* Hero Section */}
      <section className="relative px-6 md:px-16 py-20 bg-white text-gray-800 overflow-hidden">
        <BackgroundBubbles />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4">Hello<span className="text-red-500">.</span></h1>
            <h2 className="text-2xl font-bold font-serif mb-2">I'm <span className="font-extrabold text-red-400">ROHAN</span></h2>
            <h1 className="text-4xl md:text-5xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-6">
              Frontend Developer
            </h1>
            <div className="flex flex-row gap-10 justify-center md:justify-start items-center">
              <a
                href="/Rohan Resume.docx"
                download
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium transition duration-300 flex items-center gap-2"
              >
                Resume
                <motion.i
                  className="ri-arrow-down-circle-line text-xl"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                />
              </a>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
                className="inline-block"
              >
                <a
                  href="#contact"
                  className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-3 rounded-lg font-medium transition duration-300"
                >
                  Hire Me
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 md:w-96 md:h-96 bg-purple-500 rounded-full blur-2xl opacity-50"></div>
            </div>
            <img className="relative z-10 w-full h-full object-contain" src={Rohan} alt="Rohan" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 underline decoration-pink-500" data-aos="slide-right">About Me</h1>
        <p className="text-justify max-w-xl mx-auto mb-12 text-lg" data-aos="fade-up">
          A passionate frontend developer crafting responsive, user-focused web experiences.
        </p>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-16 max-w-6xl mx-auto" data-aos="fade-up">
          <div className="relative w-64 h-64 md:w-96 md:h-96" data-aos="slide-right">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 md:w-96 md:h-96 bg-purple-500 rounded-full blur-2xl opacity-50"></div>
            </div>
            <img className="relative z-10 w-full h-full rounded-full object-contain" src={Rohan2} alt="Rohan" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="font-bold text-2xl mb-4">Hi there 👋, <span className="text-3xl">I'm Rohan</span></h2>
            <p className="text-justify leading-relaxed mb-6">
              A dedicated and detail-oriented Frontend Developer with a strong interest in creating clean, responsive, and user-friendly web interfaces. I specialize in HTML, CSS, JavaScript, React.js, and Tailwind CSS, and I’m passionate about building visually appealing and accessible web experiences that deliver real value to users.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative px-6 py-16 text-white">
        <Skill />
        <Link to="/about">
          <button className="mt-8 mx-auto block bg-gradient-to-r from-purple-600 to-pink-500 border-2 border-white text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:from-pink-600 hover:to-purple-600 transition-transform duration-300" data-aos="zoom-in">
            View More
          </button>
        </Link>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-16 text-black ">
        <h1 className="text-3xl text-white font-bold text-center mb-12 underline decoration-pink-500" data-aos="slide-right">
          Projects
        </h1>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3" data-aos="fade-up">
          {[{ img: Lonexa, title: "Lonexa Villa Website", desc: "  A modern, responsive business website built with React and Tailwind CSS. It features clean UI, smooth navigation, and a professional layout designed to showcase services and build brand credibility." },
            { img: Todo, title: "To-do List App", desc: "A minimalist task management app built using React. It features full CRUD functionality, responsive design, and interactive icons — all managed through React state." },
            { img: Shopping, title: "Shopping Website", desc: " A user-friendly eCommerce front-end built with React and Tailwind CSS. It includes product listings, category filtering, and a clean layout — ready for future API and cart integration." }].map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-md p-4">
              <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h2 className="text-xl text-center font-black mb-2">{project.title}</h2>
                  <p className="text-sm  mb-4">{project.desc}</p>
                  <button className="px-4 py-2 ml-16 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/services">
          <button className="mt-10 bg-gradient-to-r from-pink-600 to-purple-600 border-2 border-white text-white px-6 py-3 rounded-full hover:scale-105 transition duration-300 mx-auto block" data-aos="zoom-in">
            View More
          </button>
        </Link>
      </section>

      {/* Resume Section */}
      <Resume />
    </div>
  );
}
