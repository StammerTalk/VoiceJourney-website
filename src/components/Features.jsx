import { motion } from 'framer-motion';
import { FaCalendarAlt, FaLayerGroup, FaEdit, FaChartLine, FaWifi } from 'react-icons/fa';

const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="text-primary text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-medium">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <FaCalendarAlt />,
      title: 'Daily Challenges',
      description: 'Create and complete speaking tasks customized to your needs and comfort level.'
    },
    {
      icon: <FaLayerGroup />,
      title: 'Structured Templates',
      description: 'Choose from various scenario types with different difficulty levels.'
    },
    {
      icon: <FaEdit />,
      title: 'Personalized Support',
      description: 'Get helpful instructions, starter phrases, and targeted speaking skills for each challenge.'
    },
    {
      icon: <FaChartLine />,
      title: 'Track Your Progress',
      description: 'Rate your experience, reflect on your performance, and watch your confidence grow over time.'
    }
    // {
    //   icon: <FaWifi />,
    //   title: 'Offline Access',
    //   description: 'Use the app anywhere, even without an internet connection.'
    // }
  ];

  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Key Features</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-medium">
            Designed to help you improve your communication skills step by step.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;