import React from 'react';
import '/src/App.css'

const Landing = () => {
  return (
    <>
    <section className="relative h-screen flex items-center justify-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          className="object-cover hero"
          src="/bg1.jpg"
          alt="Background"
          height={400}
          width={"100%"}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide mb-4">
          Asfand Ali
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-semibold">
          Full-Stack Developer
        </p>
      </div>
    </section>

  </>
  );
};

export default Landing;
