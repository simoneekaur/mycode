import React, { useState, useEffect } from "react";
import AboutImg from "/public/About.png";
import About1Img from "/public/About1.png";
import About3Img from "/public/About3.png";
import About4Img from "/public/About4.webp";

const AboutUs = () => {
  const images = [
    AboutImg,
    About1Img,
    About3Img,
    About4Img,
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setSelectedImageIndex(randomIndex);
  }, []);

  const imageWidth = 600;
  const imageHeight = 400;
  const aspectRatio = imageHeight / imageWidth;

  return (
    <section
      id="about"
      className="bg-gradient-to-br from-gray-100 to-gray-200 py-16 relative overflow-hidden"
    >
      {/* Background Circles */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-around pointer-events-none">
        <div className="absolute w-[150px] h-[150px] rounded-full bg-blue-200 opacity-10 blur-xl top-1/4 -left-10"></div>
        <div className="absolute w-[300px] h-[300px] rounded-full bg-purple-200 opacity-10 blur-xl top-1/2 -right-20"></div>
        <div className="absolute w-[100px] h-[100px] rounded-full bg-pink-200 opacity-10 blur-xl bottom-1/4 left-1/4"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8 shadow-2xl px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl transform hover:scale-105 transition duration-300 inline-block">
          About Cosmos Creative Academy
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image  */}
          <div className="lg:w-1/2 flex flex-col items-center">
            <div
              className="relative overflow-hidden rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{
                paddingBottom: `${aspectRatio * 100}%`,
                maxWidth: "450px",
              }}
            >
              <img
                src={images[selectedImageIndex]}
                alt="About Us"
                className="w-full h-full object-cover rounded-xl absolute top-0 left-0"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-center text-gray-700">
            <p className="text-lg mb-4 leading-relaxed">
              Is it your dream to breathe life into characters that until now only
              existed in your imagination? Are you passionate about making your
              characters move, talk, and tell a story, giving them a real-life
              spark? Are you looking to upskill your creativity or break into the
              animation industry? Then you are in the right place!
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              Cosmos Creative Academy provides a training platform for all future
              creative enthusiasts who are looking to make it big in the world of
              animation. Backed by 27+ years of studio legacy, and having created
              India’s finest animated shows like <strong>‘Motu Patlu’</strong> and
              <strong>‘Vir The Robot Boy’</strong>, our mentors have specially
              curated these courses using their unparalleled knowledge.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 self-start transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;