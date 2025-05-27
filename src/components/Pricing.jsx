import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const PricingCard = ({ title, price, features, popular, delay, isFree }) => {
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
        {!isFree && (
          <div className={`w-full py-2 text-center font-medium ${popular ? 'text-secondary' : 'text-primary'}`}>
            Includes all Free features + Purchase in App
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const freePlan = {
    title: "Free",
    price: "0",
    features: [
      "Create your own custom tasks",
      "Create your own reports",
      "Progress tracking",
      "18 basic task templates",
      "Phone Call, Ordering, Presentation, Conversation, Meeting, Introduction task types",
    ]
  };

  const individualPack = {
    title: "Individual Pack",
    price: "1.99",
    features: [
      "30 customizable templates per pack",
      "Different difficulty levels",
      "Starter phrases included",
      "Instructions for each scenario",
      "Progress tracking",
      "6 packs available: Phone Call, Ordering, Presentation, Conversation, Meeting, Introduction"
    ]
  };

  const bundle = {
    title: "Complete Bundle",
    price: "8.99",
    features: [
      "All 6 template packs included",
      "180 customizable templates total",
      "Different difficulty levels",
      "Starter phrases included",
      "Instructions for each scenario",
      "Progress tracking",
      "Save $3.95 compared to individual packs",
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
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard 
            title={freePlan.title}
            price={freePlan.price}
            features={freePlan.features}
            popular={false}
            delay={0.1}
            isFree={true}
          />
          <PricingCard 
            title={individualPack.title}
            price={individualPack.price}
            features={individualPack.features}
            popular={false}
            delay={0.2}
            isFree={false}
          />
          <PricingCard 
            title={bundle.title}
            price={bundle.price}
            features={bundle.features}
            popular={true}
            delay={0.3}
            isFree={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;