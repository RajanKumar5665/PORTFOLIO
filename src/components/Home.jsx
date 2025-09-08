import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import pic from "../assets/profile_photo.jpg"; 

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <motion.div
            className="md:w-1/2 mt-12 md:mt-24 space-y-6 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-medium text-gray-700">
              Welcome In My Feed
            </span>

            <div className="flex space-x-2 text-2xl md:text-4xl font-semibold">
              <h1>Hello, I'm a </h1>
              <ReactTyped
                className="text-green-600 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>

            <p className="text-sm md:text-md text-justify text-gray-700">
              As a dedicated MERN stack developer, I create smooth web
              experiences using MongoDB, Express.js, React, and Node.js. I turn
              ideas into user-friendly, scalable web applications. My focus is
              on delivering high-quality, responsive solutions that help
              businesses grow. With a blend of creativity and technical skills,
              I build modern web apps that perform well and are easy to use. I
              ensure each project is robust and meets unique needs from start to
              finish.
            </p>

            {/* Resume Button */}
            <motion.a
              href="/resume.pdf" 
              download="Rajan_Resume.pdf"
              className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📄 Download Resume
            </motion.a>

            {/* Social Media */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h1 className="font-bold text-gray-800">Available on</h1>
                <ul className="flex space-x-5 text-gray-700">
                  <li>
                    <a href="https://www.facebook.com/" target="blank">
                      <FaSquareFacebook className="text-2xl hover:text-green-600 transition cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/feed/" target="blank">
                      <FaLinkedin className="text-2xl hover:text-green-600 transition cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="blank">
                      <FaSquareInstagram className="text-2xl hover:text-green-600 transition cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/" target="blank">
                      <FaGithub className="text-2xl hover:text-green-600 transition cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </motion.div>

              {/* Skills */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h1 className="font-bold text-gray-800">Currently Working On</h1>
                <div className="flex space-x-5 text-gray-700">
                  <DiMongodb className="text-3xl hover:scale-110 duration-200 rounded-full border-2 p-1" />
                  <SiExpress className="text-3xl hover:scale-110 duration-200 rounded-full border-2 p-1" />
                  <FaReact className="text-3xl hover:scale-110 duration-200 rounded-full border-2 p-1" />
                  <FaNodeJs className="text-3xl hover:scale-110 duration-200 rounded-full border-2 p-1" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="md:w-1/2 flex justify-center order-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={pic}
              className="rounded-full md:w-[400px] md:h-[400px] shadow-xl hover:scale-105 transition duration-300"
              alt="profile"
            />
          </motion.div>
        </div>
      </div>

      <hr className="border-gray-300 mt-10" />
    </>
  );
};

export default Home;
