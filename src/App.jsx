import { useState } from "react";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";


import Slider from "react-slick";


export default function App() {
  const [theme, setTheme] = useState("default"); // "default", "light", "dark"

  const [selectedCert, setSelectedCert] = useState(null);

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
  {
    title: "QR Attendance System",
    image: "qr.png",
    description: "QR-based attendance marking system built with my team mates.",
    role: "Conducted requirement analysis and prepared technical documentation for system workflow.",
    technologies: "HTML, CSS, JavaScript, PHP, SQL",
    documentation: "https://docs.google.com/document/d/1u7QTZmdULE_U_CyzA3HyFlzS2lFcB85kdGFWuySHcmM/edit?usp=sharing",
    github: "https://github.com/Chamaracperera/Attendance-Marking-System.git",
  },
  {
    title: "Library Management System",
    image: "/lib.png",
    description: "A web app for managing library records and book lending built with my team mates.",
    role: "Business Analyst & Team Lead",
    tools: "HTML, CSS, JavaScript, PHP, SQL",
    view: "https://www.linkedin.com/posts/chamara-perera-b832762b7_librarysystem-webdev-softwareengineering-ugcPost-7359828250086260736-gUal?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD44V3sBZWmRSxtgWy2dSCIAIT9lElDb5Yc",
    github: "https://github.com/Chamaracperera/LMS.git",
  },
  {
    title: "Voice Point App",
    image: "/voicepoint.png",
    description: "A simple mobile app built with Android Studio (Java).",
    role: "Designed the UI and Documented development stages and maintained change logs.",
    tools: "Android Studio,Java,SQLite, Figma",
    documentation: "https://docs.google.com/document/d/1FZofdQ0kfb-uViUFMBxwJQAJIs8j32I5Fp-ef3cDZ3M/edit?usp=sharinghttps://docs.google.com/document/d/1FZofdQ0kfb-uViUFMBxwJQAJIs8j32I5Fp-ef3cDZ3M/edit?usp=sharing",
    github: "https://github.com/Chanuli-Sandanayake/My_voicepoint_newsapp.git",
  },
  {
    title: "UI/UX Design Project",
    image: "/uiux.png",
    description: "Self-learning project: Designed modern app/web UI in Figma.",
    role: "UI/UX Designer",
    tools: "Figma",
    view: "https://www.linkedin.com/posts/chanuli-sandanayake_uiuxdesign-figma-practiceproject-activity-7377368537989971968-M-DD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD44V3sBZWmRSxtgWy2dSCIAIT9lElDb5Yc",
    prototype: "https://www.figma.com/proto/yiJHBdPiSrTJXlRozCgilB/hotel-finder?node-id=17-2",
  },
  {
    title: "SereneStay Website",
    image: "/serenestay.png",
    description: "A website project designed for hotel booking and management.",
    role: "Business Analyst & Developer",
    tools: "HTML, CSS, JavaScript, Firebase, EmailJS",
    view: "https://www.linkedin.com/posts/chanuli-sandanayake_serenestay-hotel-finder-i-developed-activity-7377358203442860032-mI5Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD44V3sBZWmRSxtgWy2dSCIAIT9lElDb5Yc",
    github: "https://github.com/Chanuli-Sandanayake/Serenestay_HotelFinder.git",
  },
  {
    title: "My-Portfolio",
    image: "/portfolio.png",
    description: "A personal portfolio website to showcase my projects, experience, and skills with an interactive and responsive design.",
    role: "Designed and developed the entire portfolio using React.js with smooth animations and a responsive UI.",
    tools: "React.js, Tailwind CSS, Vite, React Slick, JavaScript",
    github: "https://github.com/Chanuli-Sandanayake/portfolio.git",
  },
];


  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7i5x6p7",   // replace with your actual Service ID
        "template_aghotrf",  // replace with your actual Template ID
        form.current,
        "q_Ig1dwBWfr5-2GJn"    // replace with your actual Public Key
      )
    .then(
      () => {
        setStatus("✅ Message sent successfully!");
        e.target.reset();
      },
      () => {
        setStatus("❌ Failed to send. Please try again.");
      }
    );
};

  return (
    <div className={theme === "dark" ? "dark" : theme === "light" ? "light" : ""}>

      <div className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">

        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 py-4 bg-blue-900 dark:bg-gray-800 text-white sticky top-0 shadow-lg z-50">
          <h1 className="text-2xl font-bold">Chanuli</h1>
          <div className="space-x-6 hidden md:flex">
            <a href="#projects" className="hover:text-yellow-300 transition-colors duration-300 hover:scale-110 transform inline-block">Projects</a>
            <a href="#skills" className="hover:text-yellow-300 transition-colors duration-300 hover:scale-110 transform inline-block">Skills</a>
            <a href="#certifications" className="hover:text-yellow-300 transition-colors duration-300 hover:scale-110 transform inline-block">Certifications</a>
            <a href="#contact" className="hover:text-yellow-300 transition-colors duration-300 hover:scale-110 transform inline-block">Contact</a>
          </div>
          <button
            onClick={() =>
              setTheme(theme === "default" ? "light" : theme === "light" ? "dark" : "default")
            }
            className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
          >
            {theme === "default" ? "☀ Light Mode" : theme === "light" ? "🌙 Dark Mode" : "🖌 Default"}
          </button>

        </nav>

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-center min-h-screen text-center md:text-left px-6 gap-10">
          {/* Profile Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full border-4 border-blue-500 dark:border-yellow-400 animate-pulseGlow"></div>
            <img
              src="/chanuli.jpg"
              alt="Chanuli"
              className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg border-4 border-blue-900 dark:border-yellow-400"
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-blue-900 dark:text-yellow-400">
              Hi, I'm Chanuli
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-6">
              Aspiring <span className="font-semibold">Business Analyst</span> &{" "}
              <span className="font-semibold">Project Manager</span> <br />
              Undergraduate – University of Colombo, Faculty of Technology (BICT Hons)
            </p>
            <div className="space-x-4">
              <a
                href="#projects"
                className="inline-block px-6 py-3 rounded-lg font-semibold
                            bg-blue-900 text-white 
                            dark:bg-yellow-400 dark:text-black
                            shadow-lg transform transition-transform duration-300 ease-in-out
                            hover:scale-110 hover:shadow-2xl"
              >
                View My Work
              </a>
              <a
                href="/Chanuli-CV.pdf"
                download
                className="inline-block px-6 py-3 rounded-lg font-semibold
                          bg-yellow-400 text-black 
                          dark:bg-blue-900 dark:text-white
                          shadow-lg transform transition-transform duration-300 ease-in-out
                          hover:scale-110 hover:shadow-2xl"
              >
                📄 Download CV
              </a>
            </div>
          </div>
        </section>




{/* Projects Section */}
<section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
  <h2 className="text-3xl font-bold text-center mb-10 text-blue-900 dark:text-yellow-400">
    My Projects
  </h2>

  {/* Project Details Modal */}
  {selectedProject && (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={() => setSelectedProject(null)}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-lg mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-2 right-3 text-2xl font-bold text-gray-700 dark:text-gray-100 hover:text-red-400"
        >
          ×
        </button>
        <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-52 object-cover rounded-lg mb-4" />
        <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-3">{selectedProject.description}</p>
        <p className="text-sm text-gray-500 mb-4">
          <strong>Role:</strong> {selectedProject.role}<br />
          <strong>Technologies:</strong> {selectedProject.tools}
        </p>
        <div className="flex gap-3 flex-wrap">
          {selectedProject.documentation && (
            <a
              href={selectedProject.documentation}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-900 dark:bg-yellow-400 text-white dark:text-black rounded-lg hover:scale-105 transition"
            >
              📄 Documentation
            </a>
          )}
          {selectedProject.prototype && (
            <a
              href={selectedProject.prototype}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-700 dark:bg-yellow-500 text-white dark:text-black rounded-lg hover:scale-105 transition"
            >
              🎨 Prototype
            </a>
          )}
          {selectedProject.view && (
            <a
              href={selectedProject.view}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-700 dark:bg-blue-500 text-white rounded-lg hover:scale-105 transition"
            >
              🔗 View Project
            </a>
          )}
          {selectedProject.github && (
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 dark:bg-blue-500 text-white rounded-lg hover:scale-105 transition"
            >
              💻 GitHub
            </a>
          )}

        </div>

      </div>
    </div>
  )}

  <Slider
  dots={true}
  infinite={true}
  speed={500}
  slidesToShow={2}
  slidesToScroll={1}
  responsive={[
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
      },
    },
  ]}
>

      {projects.map((project, index) => (
        <div key={index} className="px-4">
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105">
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">{project.description}</p>
              <button
                onClick={() => setSelectedProject(project)}
                className="px-4 py-2 bg-blue-900 dark:bg-yellow-400 text-white dark:text-black rounded-lg hover:scale-105 transition"
              >
               See More
              </button>
            </div>
          </div>
        </div>
      ))}
  </Slider>
</section>


        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white dark:bg-gray-900">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-900 dark:text-yellow-400">
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-5xl mx-auto">
            {/* Soft Skills with Progress Bars */}
            <div className="skill-card bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
              <div className="space-y-4">
                {[
                  { skill: "Team Work", level: 90 },
                  { skill: "Communication", level: 80 },
                  { skill: "Critical Thinking", level: 85 },
                  { skill: "Time Management", level: 85 },
                  { skill: "Problem Solving", level: 85 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span>{item.skill}</span>
                      <span className="text-sm font-medium">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-3">
                      <div
                        className="bg-blue-600 dark:bg-yellow-400 h-3 rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills with Effects */}
            <div className="skill-card bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">Technical & Tools</h3>
              <div className="grid grid-cols-2 gap-6 text-center">
                
                {/* Reusable function */}
                {[
                  { category: "Development", skills: ["C", "Java", "Python", "JS (React + Vite)", "PHP"] },
                  { category: "Backend & DB", skills: ["MySQL", "Firebase", "PHP"] },
                  { category: "Design & Frontend", skills: ["React.js", "Tailwind","Java Script", "HTML","CSS", "Figma"] },
                  { category: "PM & Collaboration", skills: ["Jira", "Confluence", "Microsoft Project"] },
                  { category: "Analytics", skills: ["Power BI", "Excel"] },
                  { category: "Platforms", skills: ["Android Studio", "EmailJS"] },
                ].map((block, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold mb-2">{block.category}</h4>
                    <div className="flex flex-wrap justify-center gap-3">
                      {block.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded-full text-sm font-medium
                                    transition transform duration-300 hover:scale-110 hover:shadow-lg hover:bg-blue-200 dark:hover:bg-yellow-500
                                    animate-fadeIn"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>



{/* Certifications Section */}
<section id="certifications" className="py-20 bg-gray-100 dark:bg-gray-800">
  <h2 className="text-3xl font-bold text-center mb-10 text-blue-900 dark:text-yellow-400">
    Certifications
  </h2>

  
  <Slider
  dots={true}
  infinite={true}
  speed={500}
  slidesToShow={2}
  slidesToScroll={1}
  responsive={[
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
      },
    },
  ]}
 >

      {[
        {
          src: "/certificates/agile.jpg",
          alt: "Agile Fundamentals Certificate",
          caption: "Agile Project Management offered by CODL,University of Moratuwa",
        },
        {
          src: "/certificates/pm.jpg",
          alt: "Project Management Certificate",
          caption: "Foundations of Project Management offered by CODL,University of Moratuwa",
        },
        {
          src: "/certificates/dataanalytics.jpg",
          alt: "Data Analytics Certificate",
          caption: "Data Analytics with AI offered by SkillUp",
        },
        {
          src: "/certificates/GenerativeAI.jpg",
          alt: "Generative AI Certificate",
          caption: "Generative AI Overview for Project Managers offered by Project Management Institute",
        },
        {
          src: "/certificates/powerbi.jpg", 
          alt: "Power BI Certificate",
          caption: "Power BI Data Modelling Basics offered by SkillUp",
        },
        {
          src: "/certificates/agilescrummaster.jpg", 
          alt: "scrum Certificate",
          caption: "Agile Scrum Master offered by SkillUp",
        },
      ].map((cert, idx) => (
        <div key={idx} className="px-4">
          <div
            className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            onClick={() => setSelectedCert(cert.src)}
          >
            <img
              src={cert.src}
              alt={cert.alt}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{cert.caption}</h3>
            </div>
          </div>
        </div>
      ))}
    </Slider>
    

  {/* Modal */}
  {selectedCert && (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={() => setSelectedCert(null)}
    >
      <div
        className="relative max-w-3xl mx-auto transform transition-all duration-500 scale-95 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSelectedCert(null)}
          className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-400"
        >
          ×
        </button>
        <img
          src={selectedCert}
          alt="Certificate"
          className="rounded-lg shadow-lg max-h-[80vh] max-w-[90vw]"
        />
      </div>
    </div>
  )}
</section>



        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-900 dark:text-yellow-400">
            Get in Touch
          </h2>
          <p className="text-center mb-10 text-gray-600 dark:text-gray-300">
            Let’s connect! Feel free to reach out for collaborations or opportunities.
          </p>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="max-w-md mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-xl space-y-4"
          >
            <div>
              <label className="block mb-2 font-semibold">Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                          bg-gray-50 dark:bg-gray-700 
                          text-gray-900 dark:text-gray-100
                          focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                          bg-gray-50 dark:bg-gray-700 
                          text-gray-900 dark:text-gray-100
                          focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                          bg-gray-50 dark:bg-gray-700 
                          text-gray-900 dark:text-gray-100
                          focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-900 to-blue-700 dark:from-yellow-400 dark:to-yellow-500 text-white dark:text-black font-semibold rounded-lg shadow-md transform transition duration-300 hover:scale-105"
            >
               Send Message
            </button>
          </form>

          {/* Status Message */}
          {status && (
            <p className="mt-6 text-center font-medium">{status}</p>
          )}

          {/* Contact Info */}
          <div className="flex justify-center gap-6 mt-10 flex-wrap">
            <a
              href="mailto:chanulisandanayake8@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-blue-900 dark:bg-yellow-500 text-white dark:text-black rounded-lg shadow-md transition hover:scale-105"
            >
              <FaEnvelope size={20} />
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/chanuli-sandanayake-137715251"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-900 dark:bg-yellow-500 text-white dark:text-black rounded-lg shadow-md transition hover:scale-105"
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Chanuli-Sandanayake"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-900 dark:bg-yellow-500 text-white dark:text-black rounded-lg shadow-md transition hover:scale-105"
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
          </div>

        </section>


        {/* Footer */}
        <footer className="py-6 text-center bg-blue-900 dark:bg-gray-800 text-white">
          © {new Date().getFullYear()} Chanuli – All Rights Reserved
        </footer>
      </div>
    </div>
  );
}
