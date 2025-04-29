import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section bg-off-white">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Voice Journey</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">The Problem</h3>
            <p className="mb-4">
              Many people struggle with speaking confidently in various social situations, whether due to anxiety, 
              stuttering, or simply a lack of practice.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-8">Our Solution</h3>
            <p className="mb-4">
              Voice Journey provides structured daily speaking challenges that help you gradually build confidence 
              and improve communication skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Designed For</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mr-3">1</div>
                <div>
                  <h4 className="font-bold">Social Anxiety</h4>
                  <p className="text-medium">Gradually build confidence in social interactions</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mr-3">2</div>
                <div>
                  <h4 className="font-bold">Stuttering</h4>
                  <p className="text-medium">Practice techniques in real-world scenarios</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mr-3">3</div>
                <div>
                  <h4 className="font-bold">Communication Difficulties</h4>
                  <p className="text-medium">Improve clarity and confidence in everyday situations</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mr-3">4</div>
                <div>
                  <h4 className="font-bold">Assertiveness Practice</h4>
                  <p className="text-medium">Learn to express yourself clearly and confidently</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mr-3">5</div>
                <div>
                  <h4 className="font-bold">Therapy Support</h4>
                  <p className="text-medium">Complement speech therapy with structured practice</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;