import React from 'react';

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
        Coming Soon
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-600 text-center mb-8">
        Our website is currently under construction. Stay tuned for updates!
      </p>
      <img
        src="/construction.svg" // Replace this with your construction image URL
        alt="Under Construction"
        className="max-w-lg"
      />
    </div>
  );
};

export default Projects;
