import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Demo from './Demo'
const App = () => {
  return (
    <>
    <Router>
     <center className="flex-shrink-0 flex items-center bg-dark">
        <img className="block lg:hidden h-8 w-auto" src="/Asfi Qazi.png" alt="Logo" />
     </center>
    
      <Demo/>
   
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </Router>
       <footer className="bg-gray-800 text-gray-300 py-4 text-center">
       <center className="container mx-auto flex justify-center foot">
         <p>&copy; {new Date().getFullYear()} Asfand Ali. All rights reserved.</p>
       </center>
     </footer>
     </>
  );
};

export default App;
