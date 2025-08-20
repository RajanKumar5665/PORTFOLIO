import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div className="space-y-10">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-5 text-center text-green-600">
          About Me
        </h1>
        <p className="text-gray-700 text-justify leading-relaxed">
          Hello, I'm <span className="font-semibold text-green-600">Rajan</span>, a passionate{" "}
          <span className="font-semibold">Web Developer</span> with a keen eye
          for the MERN Stack. With a background in IT, I strive to create
          impactful and visually stunning software solutions that leave a
          lasting impression.
        </p>

        {/* Education */}
        <div className="bg-gray-100 shadow-md p-6 rounded-lg space-y-2">
          <h2 className="text-2xl font-semibold text-green-600">
            🎓 Education & Training
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <strong>B.Tech in Computer Science Engineering</strong>, Makaut
              University (Expected Graduation: May 2026)
            </li>
            <li>
              <strong>12th Standard (Science - PCM)</strong>, C.P.P College,
              2025
            </li>
            <li>
              <strong>Full Stack Development Bootcamp</strong>, BBIT
            </li>
          </ul>
        </div>

        {/* Skills */}
        <div className="bg-gray-100 shadow-md p-6 rounded-lg space-y-2">
          <h2 className="text-2xl font-semibold text-green-600">
            💻 Skills & Expertise
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Proficient in <strong>C++, HTML, CSS, JavaScript, React.js, Node.js,
            Express.js, SQL, MongoDB</strong>. <br />
            Experienced with <strong>VS Code, PyCharm, Replit, Postman, IntelliJ, Git</strong>. <br />
            Strong grasp of <strong>RESTful APIs, responsive design, and component-based architecture</strong>. <br />
            Excellent problem-solving skills and effective communicator.
          </p>
        </div>

        {/* Experience */}
        <div className="bg-gray-100 shadow-md p-6 rounded-lg space-y-2">
          <h2 className="text-2xl font-semibold text-green-600">
            🏢 Professional Experience
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Blog Application with Authentication (June 2025)</strong> <br />
              Tools: MongoDB, Express.js, React, Node.js, JWT, Bcrypt,
              Cloudinary, Tailwind CSS <br />
              Developed responsive frontend, RESTful API backend, JWT-based
              auth, and integrated Cloudinary for image storage.
            </li>
            <li>
              <strong>MERN Authentication System (March 2025)</strong> <br />
              Tools: MongoDB, Express.js, React, Node.js, JWT, Bcrypt <br />
              Built secure authentication with JWT & Bcrypt, Google OAuth 2.0,
              and a protected dashboard with role-based access.
            </li>
          </ul>
        </div>

        {/* Achievements */}
        <div className="bg-gray-100 shadow-md p-6 rounded-lg space-y-2">
          <h2 className="text-2xl font-semibold text-green-600">
            🏆 Achievements & Awards
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Solved <strong>100+ questions on LeetCode</strong> and{" "}
              <strong>200+ questions on GeeksforGeeks</strong>.
            </li>
            <li>
              Earned certification in <strong>Full Stack Development</strong>,
              demonstrating MERN stack proficiency.
            </li>
          </ul>
        </div>

        {/* Mission */}
        <div className="bg-gray-100 shadow-md p-6 rounded-lg space-y-2">
          <h2 className="text-2xl font-semibold text-green-600">
            🚀 Mission Statement
          </h2>
          <p className="text-gray-700 leading-relaxed">
            My mission is to leverage my skills and creativity to deliver
            innovative full stack development solutions that exceed client
            expectations and contribute positively to the digital landscape. I
            am committed to continuous learning and growth, always seeking new
            challenges and opportunities to expand my horizons.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
