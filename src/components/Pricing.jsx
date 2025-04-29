import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const PricingCard = ({ title, price, features, popular, delay }) => {
  return (
    <motion.div 
      className={`bg-white rounded-lg shadow-md overflow-hidden ${popular ? 'border-2 border-secondary' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {popular && (
        <div className="bg-secondary text-dark py-1 text-center font-medium">
          Best Value
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="text-3xl font-bold text-primary mb-4">${price}</div>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <FaCheck className="text-accent mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button className={`w-full py-2 rounded-md font-medium ${popular ? 'bg-secondary text-dark' : 'bg-primary text-white'}`}>
          Purchase Now
        </button>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const [showBundle, setShowBundle] = useState(true);

  const individualPacks = [
    {
      title: "Phone Call Pack",
      price: "1.99",
      features: [
        "50 customizable templates",
        "Different difficulty levels",
        "Starter phrases included",
        "Instructions for each scenario",
        "Progress tracking"
      ]
    },
    {
      title: "Ordering Pack",
      price: "1.99",
      features: [
        "50 customizable templates",
        "Different difficulty levels",
        "Starter phrases included",
        "Instructions for each scenario",
        "Progress tracking"
      ]
    },
    {
      title: "Presentation Pack",
      price: "1.99",
      features: [
        "50 customizable templates",
        "Different difficulty levels",
        "Starter phrases included",
        "Instructions for each scenario",
        "Progress tracking"
      ]
    }
  ];

  const otherPacks = [
    {
      title: "Conversation Pack",
      price: "1.99",
      features: [
        "50 customizable templates",
        "Different difficulty levels",
        "Starter phrases included",
        "Instructions for each scenario",
        "Progress tracking"
      ]
    },
    {
      title: "Meeting Pack",
      price: "1.99",
      features: [
        "50 customizable templates",
        "Different difficulty levels",
        "Starter phrases included",
        "Instructions for each scenario",
        "Progress tracking"
      ]
    },
    {
      title: "Introduction Pack",
      price: "1.99",
      features: [
        "50 customizable templates",
        "Different difficulty levels",
        "Starter phrases included",
        "Instructions for each scenario",
        "Progress tracking"
      ]
    }
  ];

  const bundle = {
    title: "Complete Bundle",
    price: "8.99",
    features: [
      "All 6 template packs included",
      "300 customizable templates total",
      "Save $3.95 compared to individual packs",
      "Free updates for new templates",
      "Priority support"
    ]
  };

  return (
    <section id="pricing" className="section bg-off-white">
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Pricing</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-medium mb-6">
            Choose individual template packs or get the complete bundle for the best value.
          </p>
          
          <div className="flex justify-center space-x-4 mb-8">
            <button 
              className={`px-6 py-2 rounded-md ${showBundle ? 'bg-secondary text-dark' : 'bg-gray-200'}`}
              onClick={() => setShowBundle(true)}
            >
              Bundle
            </button>
            <button 
              className={`px-6 py-2 rounded-md ${!showBundle ? 'bg-secondary text-dark' : 'bg-gray-200'}`}
              onClick={() => setShowBundle(false)}
            >
              Individual Packs
            </button>
          </div>
        </motion.div>

        {showBundle ? (
          <div className="flex justify-center">
            <div className="max-w-md w-full">
              <PricingCard 
                title={bundle.title}
                price={bundle.price}
                features={bundle.features}
                popular={true}
                delay={0.1}
              />
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {individualPacks.map((pack, index) => (
              <PricingCard 
                key={index}
                title={pack.title}
                price={pack.price}
                features={pack.features}
                popular={false}
                delay={index * 0.1}
              />
            ))}
            {otherPacks.map((pack, index) => (
              <PricingCard 
                key={index}
                title={pack.title}
                price={pack.price}
                features={pack.features}
                popular={false}
                delay={(index + 3) * 0.1}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Pricing;