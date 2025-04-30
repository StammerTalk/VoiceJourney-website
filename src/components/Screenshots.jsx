import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

const Screenshots = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Screenshot data - will use images from the /public/assets/screenshots folder
  const screenshots = [
    {
      src: "/assets/screenshots/tasks.png",
      alt: "Voice Journey App - Home Screen",
      caption: "Home screen with daily challenges",
      fallbackText: "Voice Journey Screenshot 1"
    },
    {
      src: "/assets/screenshots/task_details.png",
      alt: "Voice Journey App - Task Details",
      caption: "Detailed task view with instructions",
      fallbackText: "Voice Journey Screenshot 2"
    },
    {
      src: "/assets/screenshots/progress_tracking.png",
      alt: "Voice Journey App - Progress Tracking",
      caption: "Track your speaking confidence progress",
      fallbackText: "Voice Journey Screenshot 3"
    }
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? screenshots.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === screenshots.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section id="screenshots" className="section bg-white">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">App Screenshots</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-medium">
            Get a glimpse of the Voice Journey app experience.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => openLightbox(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="bg-gray-100 p-2 rounded-xl shadow-md mb-3">
                  <img 
                    src={screenshot.src} 
                    alt={screenshot.alt} 
                    className="rounded-lg w-full h-auto max-w-[300px]"
                    onError={(e) => {
                      e.target.onerror = null;
                      // Create a placeholder with the fallback text
                      const placeholder = document.createElement('div');
                      placeholder.className = "w-[300px] h-[600px] flex items-center justify-center text-center p-4 text-gray-500 bg-gray-100 rounded-lg";
                      placeholder.innerText = screenshot.fallbackText + "\n(300px × 600px)";
                      e.target.parentNode.replaceChild(placeholder, e.target);
                    }}
                  />
                </div>
                <p className="text-center text-medium">{screenshot.caption}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-3xl w-full">
              <button 
                onClick={closeLightbox}
                className="absolute right-0 top-0 -mt-12 text-white text-2xl p-2"
              >
                <FaTimes />
              </button>
              
              <div className="relative">
                <img 
                  src={screenshots[currentIndex].src} 
                  alt={screenshots[currentIndex].alt}
                  className="w-full max-h-[80vh] object-contain mx-auto"
                  onError={(e) => {
                    e.target.onerror = null;
                    // Create a placeholder with the fallback text
                    const placeholder = document.createElement('div');
                    placeholder.className = "w-full h-[600px] flex items-center justify-center text-center p-4 text-white bg-gray-800 rounded-lg";
                    placeholder.innerText = screenshots[currentIndex].fallbackText + "\n(High-resolution: 600px × 1200px)";
                    e.target.parentNode.replaceChild(placeholder, e.target);
                  }}
                />
                
                <button
                  onClick={goToPrevious}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full ml-2"
                >
                  <FaArrowLeft />
                </button>
                
                <button
                  onClick={goToNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full mr-2"
                >
                  <FaArrowRight />
                </button>
              </div>
              
              <p className="text-white text-center mt-4">
                {screenshots[currentIndex].caption}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Screenshots;