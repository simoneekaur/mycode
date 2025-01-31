import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import AboutUs from "./components/About.jsx";
import HomePage from "./components/Home.jsx";
import Courses from "./components/Courses.jsx";

function App() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <div className="pt-20 bg-gray-100">
                <HomePage />
                <AboutUs />
                <Courses />
            </div>


            <Footer />

            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed z-50 bottom-12 right-8 bg-gradient-to-br from-blue-500 to-pink-500 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                     aria-label="Scroll to Top"
                 >
                   <span className="text-sm font-bold">Top</span>
                 </button>
            )}
        </div>
    );
}

export default App;