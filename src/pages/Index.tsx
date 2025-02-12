
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center section-padding relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2400&q=80"
            alt="Beauty Clinic"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <span className="text-sm font-medium text-primary/80 mb-4 block">
            Welcome to Beauty Clinic
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Transform Your Beauty
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience world-class plastic surgery and dental care services
          </p>
          <Button className="rounded-full px-8 py-6">
            Book Consultation
          </Button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground">Discover our range of premium beauty treatments</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-6 rounded-2xl"
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">Pricing</h2>
            <p className="text-muted-foreground">Transparent pricing for our services</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-display font-bold mb-6">{plan.price}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-4 w-4" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.featured ? 'default' : 'outline'}>
                  Select Plan
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Facial Aesthetics",
    description: "Advanced facial treatments to enhance your natural beauty",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Dental Care",
    description: "Complete dental transformation for a perfect smile",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Body Contouring",
    description: "Sculpt and shape your body to perfection",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
];

const pricingPlans = [
  {
    name: "Basic Care",
    price: "$999",
    features: [
      "Initial Consultation",
      "Basic Treatment Plan",
      "3 Follow-up Sessions",
      "Basic Care Products",
    ],
  },
  {
    name: "Premium Care",
    price: "$2999",
    features: [
      "Priority Consultation",
      "Comprehensive Treatment",
      "6 Follow-up Sessions",
      "Premium Care Products",
      "24/7 Support",
    ],
    featured: true,
  },
  {
    name: "VIP Experience",
    price: "$4999",
    features: [
      "Immediate Consultation",
      "Full Treatment Package",
      "Unlimited Follow-ups",
      "Luxury Care Products",
      "Dedicated Specialist",
      "Priority Booking",
    ],
  },
];

export default Index;
