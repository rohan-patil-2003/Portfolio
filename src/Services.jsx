import React from "react";
import Resume from "./Resume";
import Lonexa from './assets/Lonexa1.jpg'
import Todo from './assets/todo.jpg'
import Shopping from './assets/Shopping.jpg'
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

function Services() {
    useEffect(()=>{
              Aos.init({
                duration:1000,
                once:true,
              })
            },[])
  return (
    <div>
     <section className="px-6 py-16  text-gray-800">
  <h1 className="text-3xl  text-white font-bold text-center mb-12 underline decoration-pink-500"data-aos="slide-right">
    Projects
  </h1>

  <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3" >
    <div className="bg-gray-900 rounded-md p-4">
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"data-aos="fade-up">
      <img src={Lonexa} alt="Lonexa Villa Website" className="w-full h-48 object-cover" />
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2">Lonexa Villa Website</h2>
        <p className="text-sm mb-4">
          A modern, responsive business website built with React and Tailwind CSS. It features clean UI, smooth navigation, and a professional layout designed to showcase services and build brand credibility.
        </p>
        <button className="px-4 py-2 ml-16 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition">
          View Details
        </button>
      </div>
    </div>
    </div>

    
    <div className="bg-gray-900 rounded-md p-4">
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"data-aos="fade-up">
      <img src={Todo} alt="To-do List App" className="w-full h-48 object-cover" />
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2">To-do List App</h2>
        <p className="text-sm mb-4">
          A minimalist task management app built using React. It features full CRUD functionality, responsive design, and interactive icons — all managed through React state.
        </p>
        <button className="px-4 py-2 ml-16 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition">
          View Details
      </button>
    </div>
  </div>
</div>
  
    <div className="bg-gray-900 rounded-md p-4">
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"data-aos="fade-up">
      <img src={Shopping} alt="Shopping Website" className="w-full h-48 object-cover" />
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2">Shopping Website</h2>
        <p className="text-sm mb-4">
          A user-friendly eCommerce front-end built with React and Tailwind CSS. It includes product listings, category filtering, and a clean layout — ready for future API and cart integration.
        </p>
        <button className="px-4 py-2 ml-16 bg-pink-500  text-white rounded-md hover:bg-pink-600 transition">
          View Details
        </button>
      </div>
    </div>
  </div>
</div>
</section>

      <section>
    <div className="px-6 py-12  ">
      <h1 className="text-3xl font-bold text-center mb-10 underline decoration-pink-500"data-aos="slide-right">Services</h1>

      <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
      
        <div className="bg-gray-900 shadow-md rounded-lg p-6"data-aos="fade-up">
          <h2 className="text-2xl text-white text-center font-semibold mb-4">What I Can Do</h2>
          <ul className="space-y-2 text-white list-disc ml-3 text-sm">
            <li>💻 Build responsive and modern frontend web apps</li>
            <li>⚛️ Create reusable React components</li>
            <li>🎨 Design clean UIs with Tailwind CSS</li>
            <li>🌐 Integrate APIs and fetch real-time data</li>
            <li>🛠 Use Git & GitHub for version control</li>
            <li>📱 Make responsive designs for all screen sizes</li>
          </ul>
        </div>

        
        <div className="bg-gray-900 shadow-md rounded-lg p-6"data-aos="fade-up">
          <h2 className="text-2xl text-white text-center font-semibold mb-4">My Role as a Developer</h2>
          <ul className="list-disc list-inside space-y-2 text-white text-sm">
            <li>Turning UI/UX designs into working websites</li>
            <li>Writing clean, modular code using React.js</li>
            <li>Optimizing apps for speed and performance</li>
            <li>Collaborating via GitHub and managing code history</li>
            <li>Debugging and improving existing codebases</li>
          </ul>
        </div>
       <div className="px-6 py-12 bg-gray-900 shadow-md  rounded-lg"data-aos="fade-up">
  <h1 className="text-3xl font-bold text-center text-white mb-6">
    Available for Collaboration
  </h1>

  <div className="max-w-3xl mx-auto border-l-4 border-red-500 p-6 rounded-lg shadow-md">
    <p className="text-white text-lg leading-relaxed">
      I’m currently focused on building my skills and projects. <br />
      In the near future, I’ll be open to freelance work and collaborations. <br />
      If you're working on something interesting, feel free to reach out!
    </p>
  </div>
</div>

      </div>
    </div>
    </section>
    <Resume />

    </div>
  );
}

export default Services;
