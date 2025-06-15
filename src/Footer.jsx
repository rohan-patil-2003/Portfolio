import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Aos from "aos";
import 'aos/dist/aos.css';
import PhoneIcon from './assets/phoneLogo.png'
import Instagram from './assets/instagram.png';
import Twitter from './assets/twitter.png';
import LinkedIn from './assets/linkedin.png';
import GitHub from './assets/GithubLogo.jpg';

export default function Footer() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="bg-gray-900 text-white px-6 py-10" data-aos="fade-up">
      <div className="flex flex-col md:flex-row justify-between gap-10 max-w-6xl mx-auto">

        {/* Education Section */}
        <div className="border-l-4 border-r-4 border-red-500 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-center mb-4 underline decoration-red-500">Education</h2>
          <p className="text-sm">
            Bachelor of Computer Applications (BCA)<br />
            Chhatrapati Shivaji Maharaj University<br />
            2022 – 2025
          </p>
          <p className="text-sm mt-3">
            Higher Secondary Certificate (HSC)<br />
            South Indians' Welfare Society College (S.I.W.S)<br />
            2020 – 2022
          </p>
          <p className="text-sm mt-3">
            Secondary School Certificate (SSC)<br />
            Matoshree Vidyamandir<br />
            2019 – 2020
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 underline decoration-red-500">Quick Links</h2>
          <ul className="grid grid-cols-2 gap-4">
            <Link to='/'><li className="cursor-pointer hover:text-red-500">Home</li></Link>
            <Link to='/about'><li className="cursor-pointer hover:text-red-500">About</li></Link>
            <Link to='/services'><li className="cursor-pointer hover:text-red-500">Projects</li></Link>
            <Link to='/contact'><li className="cursor-pointer hover:text-red-500">Contact</li></Link>
          </ul>
        </div>

        {/* Social Media Icons Section */}
        {/* Social Media Icons Section */}
<div>
  <h2 className="text-xl font-semibold mb-4 underline decoration-red-500 text-center md:text-left">Connect With Me</h2>
  <ul className="flex flex-wrap gap-6 justify-center md:justify-start items-center">
    {/* Phone */}
    <li>
      <a href="tel:+919876543210">
        <motion.img
          src={PhoneIcon}
          alt="Call Me"
          className="w-10 h-10"
          whileHover={{ scale: 1.2, rotate: 5 }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </a>
    </li>

    {/* LinkedIn */}
    <li>
      <a
        href="https://www.linkedin.com/in/rohan-patil-0986102b8"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.img
          src={LinkedIn}
          alt="LinkedIn"
          className="w-10 h-10"
          whileHover={{ scale: 1.2, rotate: 5 }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </a>
    </li>

    {/* Instagram */}
    <li>
      <a
        href="https://www.instagram.com/rohanpatil8831"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.img
          src={Instagram}
          alt="Instagram"
          className="w-10 h-10"
          whileHover={{ scale: 1.2, rotate: -5 }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </a>
    </li>

    {/* Twitter */}
    <li>
      <a
        href="https://x.com/RohanPatil40197?t=unoG3kvf2TTLICZnhPNWfA&s=09"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.img
          src={Twitter}
          alt="Twitter"
          className="w-10 h-10"
          whileHover={{ scale: 1.2, rotate: 6 }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </a>
    </li>

    {/* GitHub */}
    <li>
      <a
        href="https://github.com/rohan-patil-2003"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.img
          src={GitHub}
          alt="GitHub"
          className="w-10 h-10"
          whileHover={{ scale: 1.2, rotate: -6 }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </a>
    </li>
  </ul>
</div>

      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Rohan Rajaram Patil. All rights reserved.
      </div>
    </footer>
  );
}
