import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Check, MessageSquare, Mail } from "lucide-react";
import { Navbar } from '@/components/Navbar';
import Map from '@/components/Map';

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
                initial={{ opacity: 0, y: index === 1 ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-display font-bold mb-6">{plan.price} <span className="text-lg">{plan.priceSubtext}</span></p>
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

      {/* Contact Widgets Section */}
      <section id="contact" className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">Get in touch with our specialists</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.a
              href="https://wa.me/358451333953"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-2xl flex items-center gap-4 cursor-pointer"
            >
              <div className="h-12 w-12 bg-green-500/10 rounded-full flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold">WhatsApp</h3>
                <p className="text-muted-foreground text-sm">+358 45 1333953</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:mamatovviacheslav@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-2xl flex items-center gap-4 cursor-pointer"
            >
              <div className="h-12 w-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Email</h3>
                <p className="text-muted-foreground text-sm">mamatovviacheslav@gmail.com</p>
              </div>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-4 rounded-2xl"
          >
            <Map />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Facial Aesthetics",
    description: "Advanced facial treatments to enhance your natural beauty",
    image: "https://www.instyle.com/thmb/mr2z_GefR-T7RDn1_ud2GFRA1xc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ZendayaShortHairSocial-735b64b84f53470f93fc6b21dd783f08.jpg",
  },
  {
    title: "Dental Care",
    description: "Complete dental transformation for a perfect smile",
    image: "https://gp-assets-1.growthplug.com/website_files/4790/bigstock-Woman-smile-and-teeth-Dental--25845860.jpg",
  },
  {
    title: "Body Contouring",
    description: "Sculpt and shape your body to perfection",
    image: "https://st5.depositphotos.com/16122460/78405/i/450/depositphotos_784056240-stock-photo-chocolate-body-wrap-spa-worker.jpg",
  },
];

const pricingPlans = [
  {
    name: "Basic plan",
    price: "$299",
    priceSubtext: "starting from",
    features: [
      "Initial Consultation",
      "Design and production",
      "Hosting on Your server",
      "Simple website design",
    ],
  },
  {
    name: "Advanced plan",
    price: "$599",
    priceSubtext: "starting from",
    features: [
      "Ready to go solution",
      "3 Updates a year for FREE",
      "1 year FREE hosted server included",
      "SEO with 3 FREE blog posts a month",
      "Better digital presence ",
      "Advanced website design"
    ],
    featured: true,
  },
  {
    name: "VIP Experience",
    price: "$999",
    priceSubtext: "starting from",
    features: [
      "Everything in Advanced, PLUS",
      "Premium domain included",
      "Unlimited updates on request",
      "AI Chatbot Integration",
      "Superior website design",
      "Users authentication",
      "2 years of hosting",
    ],
    featured: true,
  },
];

export default Index;
