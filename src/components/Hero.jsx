import { motion } from 'framer-motion';
import { FaApple, FaAndroid, FaGlobe } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-white py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
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
              <button className="btn btn-primary flex items-center gap-2">
                <FaApple className="text-lg" />
                <span>Download for iOS</span>
              </button>
              <button className="btn btn-primary flex items-center gap-2">
                <FaAndroid className="text-lg" />
                <span>Download for Android</span>
              </button>
              <button className="btn btn-secondary flex items-center gap-2">
                <FaGlobe className="text-lg" />
                <span>Try Web Version</span>
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* App mockup image - recommended size 320px × 650px (640px × 1300px for retina) */}
            <div className="w-[320px] h-[650px] bg-gray-200 rounded-3xl shadow-xl flex items-center justify-center text-gray-400 overflow-hidden">
              <img 
                src="/assets/mockups/app_mockup.png" 
                alt="Voice Journey App Mockup" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.parentElement.innerHTML = "App Mockup Image<br/>(320px × 650px)";
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;