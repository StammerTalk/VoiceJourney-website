import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section bg-off-white">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-medium mb-8">
            Have questions? We're here to help!
          </p>
          
          <motion.div
            className="py-8 px-6 bg-white rounded-lg shadow-md max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <FaEnvelope className="text-primary text-3xl" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-center mb-2">Email Us</h3>
            <p className="text-center mb-6">
              Send us your questions or feedback, and we'll get back to you as soon as possible.
            </p>
            <div className="text-center">
              <a 
                href="mailto:contact@voicejourneyapp.com"
                className="inline-block btn btn-primary"
              >
                contact@voicejourneyapp.com
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;