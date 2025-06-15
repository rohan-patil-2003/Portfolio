import React from "react";
import { useEffect } from "react";
import Logo from './assets/react.svg';
import HTML from './assets/HtmlLogo.jpg';
import CSS from './assets/CssLogo.jpg';
import Tailwindcss from './assets/tailwindcssLogo.jpg';
import Git from './assets/GithubLogo.jpg';
import Frontend from './assets/front-end.jpg';
import Web from './assets/WebLogo.jpg';
import Soft from './assets/SoftskillsLogo.jpg';
import Ai from './assets/ai-tools.jpg';
import Aos from "aos";
import 'aos/dist/aos.css'


const skills = [
  {
    img: Logo,
    title: "React.js",
    desc: "I use React.js because it helps me build websites faster and in a cleaner way. With reusable components, I don’t have to repeat code. It also runs fast and has a big community, which makes it easier to find help and grow as a developer."
  },
  {
    img: HTML,
    title: "HTML5",
    desc: "I use HTML5 to create the structure of websites. It’s the foundation of every web page and allows me to build well-organized and accessible content."
  },
  {
    img: CSS,
    title: "CSS3",
    desc: "I use CSS3 to style websites and make them look beautiful. It helps me design responsive layouts, animations, and modern UI that enhances user experience."
  },
  {
    img: Tailwindcss,
    title: "Tailwind CSS",
    desc: "I use Tailwind CSS because it lets me build custom designs quickly using utility classes. It speeds up development and keeps my styles consistent and clean."
  },
  {
    img: Git,
    title: "Git & GitHub",
    desc: "I use Git and GitHub to track changes in my projects, collaborate with others, and manage versions efficiently. It's essential for working in teams and open-source."
  },
  {
  img: Ai,
  title: "AI Tools",
  desc: "I use AI tools like ChatGPT and GitHub Copilot to boost my productivity, solve coding challenges, and speed up development. They help me generate code, fix bugs, write documentation, and stay up-to-date with best practices — making my workflow faster, smarter, and more efficient."
},

  {
    img: Frontend,
    title: "Frontend Development",
    desc: "I enjoy frontend development because I love bringing designs to life and building interactive user experiences using HTML, CSS, JavaScript, and frameworks like React."
  },
  {
    img: Web,
    title: "Web Development",
    desc: "I chose web development because it combines creativity and logic. It allows me to build real-world solutions that people can use online from anywhere."
  },
  {
    img: Soft,
    title: "Soft Skills",
    desc: "I focus on soft skills like communication, teamwork, and problem-solving because they are equally important as technical skills in professional growth and success."
  },
  
];

function Skill() {
  useEffect(()=>{
    Aos.init({
      duration:1000,
      once:true,
    })
  },[])
  return (
    <div className="p-8  min-h-screen">
      <h1 className="text-3xl font-bold mb-10 text-center underline decoration-pink-500" data-aos="slide-right">My Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto" data-aos="fade-up">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-900 shadow-lg rounded-xl p-6 text-justify">
            <img src={skill.img} alt={`${skill.title} Logo`} className="w-20 h-20 mx-auto mb-4 border-4 border-rounderd-full border-black rounded-full object-cover" />
            <h2 className="text-xl text-white text-center font-semibold mb-2">{skill.title}</h2>
            <p className="text-white text-sm">{skill.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
