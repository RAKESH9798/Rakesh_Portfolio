import React from 'react'
import Footer from "./Components/Footer/Footer.jsx";
import Navigation from "./Components/Navigation/Navigation.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './Pages/Projects/Projects.jsx';
import Services from './Pages/Services/Services.jsx';
import Blogs from './Pages/Blogs/Blogs.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';


function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
