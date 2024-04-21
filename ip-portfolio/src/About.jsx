import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="/p1.jpg"
              alt="Asif Qazi"
              className="Pro rounded-lg"
            />
          </div>
          <div>
            <p className="text-lg">
              I'm Asif Qazi, a passionate web developer. I love creating
              beautiful and functional websites using the latest technologies.
            </p>
            <p className="text-lg mt-4">
              With over 3 years of experience in web development, I have worked
              on various projects ranging from small business websites to
              large-scale web applications.
            </p>
            <p className="text-lg mt-4">
              My skills include HTML, CSS, JavaScript, React.js, and Node.js.
              I'm constantly learning and exploring new technologies to enhance
              my skills.
            </p>
            <p className="text-lg mt-4">
              Besides coding, I enjoy reading books, traveling, and playing
              guitar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

};

export default About;
