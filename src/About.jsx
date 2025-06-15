import React from "react";
import Rohan from './assets/Rohan5.jpg';
import skill from './assets/Skills.png'
import Skill from "./Skills";
import { useEffect,useState } from "react";
import 'remixicon/fonts/remixicon.css'
import Aos from "aos";
import 'aos/dist/aos.css'


 const faqData = [
      {
      question:"How was my school life",
      answer:"I started school in 2007 and completed 10th grade in 2020. I was a curious student,always excited about computers and how things work. It laid the foundation for my interest in technology.",
    },
    {
      question:"What has my academic journey been like ?",
      answer:"I began school in 2007 and completed my 10th in 2020. After that, I pursued the science stream in junior college (2020–2022), even though Computer Science wasn’t one of my core subjects. However, my interest in technology grew during this time — I started watching YouTube tutorials, learning from friends, and exploring web development out of curiosity.      In 2022, I enrolled in the Bachelor of Computer Applications (BCA) program at Chhatrapati Shivaji Maharaj University. Over these three years, I’ve gained both theoretical and practical knowledge of programming, software development, and real-world tech projects — all of which solidified my path toward becoming a frontend developer.",
    },
    {
      question:"What are my hobbies?",
      answer:"I enjoy reading tech blogs,solving logic puzzles,exploring new frontend tools,and working on ui designs. I also going to the gym and listening to music to relex and recharge.",
    },
  
    {
      question:"What inspired me to become a frontend developer ?",
      answer:"During my junior college years, I stumbled upon a YouTube tutorial on HTML and CSS. I was amazed that just a few lines of code could bring a web page to life. That curiosity led me to explore JavaScript and eventually React. The idea that I could build something real — something others can use — made me fall in love with frontend development.",
    },
    {
      question:"What technologies am I currently working with ?",
      answer:" I'm currently focused on building web projects using HTML, CSS, and JavaScript as my foundation. I use React.js for developing component-based user interfaces and Tailwind CSS for efficient and responsive styling. I manage my code with Git and GitHub and work with APIs to handle dynamic data. Additionally, I’ve started exploring tools like Framer Motion for animations and Firebase for backend integration and real-time database features."
    },
    {
      question:"How do I keep learning and improving my skills ?",
      answer:"I believe in learning by doing. I regularly build small projects to practice what I learn. I follow tech YouTubers, read documentation, and explore platforms like freeCodeCamp, W3Schools, and MDN. I also learn a lot by debugging my own mistakes — that’s where real learning happens.",
    },
    {
      question:"What are some of the projects I'm proud of ?",
      answer:"One of the projects I’m most proud of is a Student Attendance System using RFID, which I developed using React. This project automates student attendance by integrating RFID technology with a clean and responsive frontend interface. It allows for quick, accurate attendance tracking and reduces manual effort significantly. I also built my Personal Portfolio Website using React and Tailwind CSS to showcase my skills, journey, and work in a visually appealing format. Another project I created is a To-do List App, a simple yet effective React application that demonstrates CRUD functionality, icon integration, and efficient state management. These projects reflect my ability to turn ideas into practical, user-friendly web applications.",
    },
    {
      question:"What challenges have I overcome while learning to code ?",
      answer:"In the beginning, I struggled with understanding logic, especially with JavaScript loops and conditionals. I also lacked confidence to build projects. But by breaking problems down, staying consistent, and celebrating small wins, I slowly got better. Getting stuck used to frustrate me — now it excites me, because it means I’m about to learn something new.",
    },
    {
      question:"What are my future goals in tech ?",
      answer:"My current goals include landing a remote paid internship to gain hands-on industry experience and work in a collaborative team environment. I aim to master React.js thoroughly, then move on to Next.js and backend integration to build more robust full-stack applications. I’m passionate about creating real-world web apps that solve meaningful problems and deliver real value to users. I'm also interested in exploring AI integration within frontend applications to build smarter, more interactive user experiences. In the long run, I aspire to contribute to open-source projects and become an active part of the developer community.",
    },
    {
      question:"What does a typical productive day look like for me ?",
      answer:"My day usually starts with a bit of reading — sometimes a blog or documentation. I then spend a few hours coding, revising what I’ve learned, or building a feature. I also take time to write notes, explore projects on GitHub, and occasionally share updates on LinkedIn. I try to stay balanced with a workout or walk in the evening.",
    },
    {
      question:"What soft skills do I bring to the table ?",
      answer:"I bring a range of valuable soft skills to the table. I enjoy problem-solving, especially breaking down complex challenges into manageable parts and finding efficient solutions. My consistency is one of my strengths—I make it a habit to code daily and reflect on my progress regularly. I value clear communication and often explain what I’ve learned through written notes or discussions with peers. With strong time management skills, I plan my learning goals thoughtfully and hold myself accountable to them. I’ve also developed solid teamwork abilities through college projects, where I collaborated effectively and contributed meaningfully to group outcomes.",
    },
      
   ];

export default function About() {
    useEffect(()=>{
      Aos.init({
        duration:1000,
        once:true,
      })
    },[])
  
 const [openIndex, setOpenIndex] = useState(null);
  
 const toggle=(index)=>{
  setOpenIndex(openIndex===index ? null:index)
 }

 const [arrow, setArrow] = useState(false);
 const handleClick = () => {
     setArrow(!arrow);
 }
 return (
    <>
      <section className="px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 underline decoration-pink-500" data-aos="slide-right">About Me</h1>
        <p className="text-center max-w-xl mx-auto mb-12 text-lg" data-aos="fade-up">
          A passionate frontend developer crafting responsive, user-focused web experiences.
        </p>

        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-16 max-w-6xl mx-auto">
           <div className="relative w-64 h-64 md:w-96 md:h-96" data-aos="fade-up">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 md:w-96 md:h-96 bg-purple-500 rounded-full blur-2xl opacity-50"></div>
            </div>
            <img
              className="relative z-10 w-full h-full   rounded-full object-contain"
              src={Rohan}
              alt="Rohan"
            />
          </div>
          

          <div className="md:w-1/2 text-center md:text-left"data-aos="fade-up">
            <h2 className="font-bold text-2xl mb-4">Hi there 👋, <span className="text-3xl">I'm Rohan</span></h2>
            <p className="text-base leading-relaxed mb-6">
              A dedicated and detail-oriented Frontend Developer with a strong interest in creating clean,
              responsive, and user-friendly web interfaces. I specialize in HTML, CSS, JavaScript, React.js,
              and Tailwind CSS, and I’m passionate about building visually appealing and accessible web experiences
              that deliver real value to users.
            </p>

            <h3 className="font-bold text-xl mb-2"data-aos="fade-up">Currently, I’m focused on:</h3>
            <ul className="list-disc list-inside text-left"data-aos="fade-up">
              <li>Building modern, real-world web applications</li>
              <li>Expanding my knowledge of web technologies and tools</li>
              <li>Collaborating in team environments to solve meaningful problems</li>
            </ul>
          </div>
         
        </div>
         
      </section>
      <section className="max-w-3xl mx-auto  px-4 py-16" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-10">Get to Know Me</h2>
        {faqData.map((item,index)=>(
          <div key={index} className="mb-4 border border-gray-200 rounded-lg shadow-md shadow-gray-100">
            <button onClick={()=>toggle(index)}  className="w-full flex items-center justify-between p-4 font-medium text-white text-lg bg-gray-900 hover:bg-purple-800 transition"
  data-aos="fade-up">{item.question}{openIndex === index ?<i className="ri-arrow-up-s-line "></i> : <i className="ri-arrow-down-s-line "></i>}</button>
            {openIndex === index && (
            <div className="p-4 text-white text-bold bg-gray-900 border-1 border-gray-200">{item.answer}</div>
            )}
          </div>
        ))}
      </section>
        <section className="py-10 px-4 ">
          <h1 className="text-3xl font-bold mb-10 text-white text-center underline decoration-pink-500">My Skills</h1>
        <div className=" flex flex-col md:flex-row items-center justify-center gap-8"data-aos="fade-up">
            <img src={skill} className="w-48 h-48 md:w-96 md:h-96 md:ml-24 object-contain transition-transform duration-300 hover:scale-105"></img>
  <div className="flex flex-wrap justify-center gap-4 w-96 max-h-full text-center mx-auto"data-aos="fade-up">
    <span className="bg-gray-400 px-5 py-2 rounded">HTML</span>
    <span className="bg-gray-400 px-5 py-2 rounded">CSS</span>
    <span className="bg-gray-400 px-5 py-2 rounded">JavaScript</span>
    <span className="bg-gray-400 px-5 py-2 rounded">React</span>
    <span className="bg-gray-400 px-5 py-2 rounded">Tailwind CSS</span>
    <span className="bg-gray-400 px-5 py-2 rounded">Git & GitHub</span>
    <span className="bg-gray-400 px-5 py-2 rounded">AI Tools</span>
    <span className="bg-gray-400 px-5 py-2 rounded">Frontend Development</span>
    <span className="bg-gray-400 px-5 py-2 rounded">Web Development</span>
  </div>
  </div>
</section>
    </>
  );
}
