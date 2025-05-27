import { motion, AnimatePresence } from 'framer-motion';
import { FaApple, FaAndroid, FaGlobe, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Hero = () => {
  // Carousel state and logic
  const mockupImages = [
    {
      src: "/assets/screenshots/custom_task.png",
      alt: "Voice Journey Custom Task",
      caption: "Create Custom Tasks"
    },
    {
      src: "/assets/screenshots/task_templates.png",
      alt: "Voice Journey Task Templates",
      caption: "Browse Task Templates"
    },
    {
      src: "/assets/screenshots/task_details.png", 
      alt: "Voice Journey Task Details",
      caption: "Task Instructions & Tips"
    },
    {
      src: "/assets/screenshots/create_report.png",
      alt: "Voice Journey Create Report",
      caption: "Generate Progress Reports"
    },
    {
      src: "/assets/screenshots/progress_tracking.png",
      alt: "Voice Journey Progress Tracking",
      caption: "Track Your Progress"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? mockupImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === mockupImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === mockupImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, mockupImages.length]);
  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-white py-20 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
              Voice Journey
            </h1>
            <p className="text-xl md:text-2xl text-dark/80 mb-8 font-medium">
              Build Speaking Confidence, One Challenge at a Time.
            </p>
            <div className="flex flex-wrap gap-4">
              {/* <button className="btn btn-primary flex items-center gap-2">
                <FaApple className="text-lg" />
                <span>iOS (Coming soon)</span>
              </button>
              <button className="btn btn-primary flex items-center gap-2">
                <FaAndroid className="text-lg" />
                <span>Android (Coming soon)</span>
              </button> */}
              <a 
                href="https://app.voicejourneyapp.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary flex items-center gap-2"
              >
                <FaGlobe className="text-lg" />
                <span>Web (Preview)</span>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* App mockup carousel container */}
            <div 
              className="relative w-[320px] h-[650px] bg-gray-200 rounded-3xl shadow-xl overflow-hidden group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Left Navigation Button */}
              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Previous image"
              >
                <FaChevronLeft className="text-sm" />
              </button>

              {/* Right Navigation Button */}
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Next image"
              >
                <FaChevronRight className="text-sm" />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  className="relative w-full h-full"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <img
                    src={mockupImages[currentImageIndex].src}
                    alt={mockupImages[currentImageIndex].alt}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-400">App Screenshot<br/>(320px × 650px)</div>`;
                    }}
                  />
                  
                  {/* Caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white text-sm font-medium text-center">
                      {mockupImages[currentImageIndex].caption}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Carousel indicators */}
            <div className="flex gap-2 mt-4">
              {mockupImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-primary' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;