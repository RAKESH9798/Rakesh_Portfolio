import React, { useEffect, useState } from "react";
import "./About.css";
import codingImage from "../../Assets/coding.png";
import songImage from "../../Assets/music.webp";
import readingImage from "../../Assets/reader.jpg";
import hiking from "../../Assets/beach.jpg";
import beach from "../../Assets/hiking.jpg";
import travel from "../../Assets/travel.jpg";
import enjoy from "../../Assets/enjoy.jpg";

const About = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const hobbies = [
    {
      image: codingImage,
      title: "Coding",
      description:
        "It helps me improve my coding skills and I follow this for developing projects.",
    },
    {
      image: songImage,
      title: "Listening to Songs",
      description:
        "This is my favorite hobby and I follow it daily for at least 30 minutes to get fun.",
    },
    {
      image: readingImage,
      title: "Reading Books",
      description:
        "It helps to enhance my knowledge and improve my insights and attitude.",
    },
    {
      image: beach, 
      title: "Beach Relaxation",
      description: "Enjoying a sunny day at the beach, soaking up the sun and relaxing by the waves.",
    },
    {
      image: hiking, 
      title: "Hiking Adventures",
      description: "Exploring nature trails and mountains, hiking to beautiful vistas and reconnecting with nature.",
    },
    {
      image: travel,
      title: "Traveling the World",
      description: "Visiting new countries, discovering diverse cultures, and experiencing unique traditions around the globe.",
    },
    {
      image: enjoy,
      title: "Enjoying Life",
      description: "Finding joy in the little moments, whether it's with friends, family, or solo activities.",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((index) =>{
      if (index > 0){
        return index-1;
      }else{
        return hobbies.length-1;
      }
  });
  };

  
  const handleNext = () => {
    setCurrentIndex((index) =>{
      const newIndex = (index + 1) % hobbies.length;
      return newIndex;
    });
  };

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setCurrentIndex((index)=>(index+1)%hobbies.length);
    },2000)
    return ()=>clearInterval(intervalId);
  },[hobbies.length]);

  return (
    <div className="about">
      <div className="videoPlay">
        <iframe width="300" height="300" src="https://www.youtube.com/embed/8GyRZuAkRkM" title="How i speak english?" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
      <div className="container">
        <h2>
          <b>About me</b>
        </h2>
        <h4>
          <b>Aspiring Software Engineer</b>
        </h4>
        <p className="aboutPara">
          "Hello! I'm Rakesh, a dedicated software engineer passionate about crafting efficient and user-centered solutions. With a solid foundation in Java, Android, SQL, JavaScript, and DSA, I enjoy translating complex challenges into elegant code. My drive for continuous learning fuels my ability to stay at the forefront of industry trends, ensuring I create impactful and future-ready applications. Let's collaborate and turn your ideas into reality!"
        </p>

        <h4>
          <b>Education</b>
        </h4>
        <div className="colleges container">
          <div className="college">
            <h5 className="degree">B.Tech</h5>
            <p className="about-college">
              I am a student of Dr. MGR University in the IT branch, learning new technologies such as AI & ML, data science, and deep learning, and applying these in my projects.
            </p>
            <a href="https://www.drmgrdu.ac.in/" className="btn btn-primary">Visit College site</a>
          </div>
          <div className="college">
            <h5 className="degree">UG Diploma</h5>
            <p className="about-college">
              I have done Intermediate in science from BBM COLLEGE, where I learned the core of science fields such as PCM.
            </p>
            <a href="https://bbmmahavidyalayaokari.com/" className="btn btn-primary">Visit College site</a>
          </div>
        </div>

        <h4>
          <b>Online Learning</b>
        </h4>
        <div className="institutes container">
          <div className="institute">
            <h5 className="course">Software Development</h5>
            <p className="about-course">
              I am a student of Bosscoder Academy in the SDE course, where I am focused on mastering data structures, algorithms, and computer science fundamentals. I engage in practical, industry-related tasks to prepare for real-world tech challenges.
            </p>
            <a href="https://www.bosscoderacademy.com/" className="btn btn-primary">Visit Institute site</a>
          </div>
          <div className="institute">
            <h5 className="course">Web Development</h5>
            <p className="about-course">
              I have completed Web Development from London App Brewery, covering HTML, CSS, JavaScript, Node.js, React, and more. I built a portfolio of 32+ projects, gaining hands-on experience in modern web technologies.
            </p>
            <a href="https://appbrewery.com/" className="btn btn-primary">Visit Institute site</a>
          </div>
        </div>
      </div>

      <div className="hobbies container">
        <h4>
          <b>Hobbies</b>
        </h4>
        <div className="carousel">
          <div className="carousel-content">
            <img
              src={hobbies[currentIndex].image}
              alt={hobbies[currentIndex].title}
            />
            <div className="carousel-caption">
              <h5>{hobbies[currentIndex].title}</h5>
              <p>{hobbies[currentIndex].description}</p>
            </div>
          </div>
          <button className="prev-btn" onClick={handlePrev}>
            &#10094;
          </button>
          <button className="next-btn" onClick={handleNext}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
