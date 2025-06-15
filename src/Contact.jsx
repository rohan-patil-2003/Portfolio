import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
function Contact() {
useEffect(()=>{
        Aos.init({
          duration:1000,
          once:true,
        })
      },[])


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_y8gznad',     
      'template_default',    
      form.current,
      'oBd8fBAx3egYJs00u'     
    )
    .then(() => {
      alert('Message sent successfully!');
      form.current.reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert('Something went wrong. Please try again.');
    });
  };

  return (
    <div className="px-6 py-16  text-center" id='contact'>
      <h1 className="text-4xl font-bold  mb-4 underline decoration-pink-500"data-aos="slide-right">Connect With Me</h1>
      <p className="text-justify mb-10 max-w-xl mx-auto"data-aos="fade-up">
        Have a project in mind or just want to say hello? Fill out the form below to get in touch — I’ll get back to you soon!
      </p>

      <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"data-aos="fade-up">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        ></textarea>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
