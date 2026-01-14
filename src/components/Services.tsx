import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dog, Cat, Sparkles, Scissors, Bath, Heart } from "lucide-react";

const services = [
  {
    icon: Dog,
    title: "Dog Grooming",
    tagline: "Life is short, treat your dog",
    description: "Full grooming services including bath, haircut, nail trim, ear cleaning, and more. We handle all breeds with love and expertise.",
    features: ["Full Bath & Dry", "Breed-Specific Cuts", "Nail Trimming", "Ear Cleaning"],
    gradient: "bg-gradient-coral",
    shadowClass: "shadow-coral",
  },
  {
    icon: Cat,
    title: "Cat Grooming",
    tagline: "Home is where the meow is",
    description: "Gentle grooming for your feline friends. Our experienced groomers know how to keep cats calm and comfortable.",
    features: ["Gentle Handling", "De-matting", "Sanitary Trim", "Nail Caps"],
    gradient: "bg-gradient-teal",
    shadowClass: "shadow-teal",
  },
  {
    icon: Sparkles,
    title: "Dental Care",
    tagline: "Oral Health = Overall Health",
    description: "Non-anesthetic dental cleaning to keep your pet's teeth healthy. Safe, affordable, and effective alternative to vet procedures.",
    features: ["No Anesthesia", "Plaque Removal", "Fresh Breath", "Starting at $180"],
    gradient: "bg-gradient-coral",
    shadowClass: "shadow-coral",
  },
];

const additionalServices = [
  { icon: Scissors, name: "Breed-Specific Styling" },
  { icon: Bath, name: "De-shedding Treatment" },
  { icon: Heart, name: "Senior Pet Care" },
  { icon: Sparkles, name: "Spa Treatments" },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-warm">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Top Quality <span className="text-gradient-coral">Grooming Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer the convenience of mobile pet grooming, delivering high-quality services 
            right to your doorstep. Our professional team is committed to providing your pets 
            with the highest level of care.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${service.gradient} rounded-2xl flex items-center justify-center mb-6 ${service.shadowClass} group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-primary font-medium text-sm mb-4">{service.tagline}</p>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-8 md:p-12 shadow-card"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                Additional Services
              </h3>
              <p className="text-muted-foreground">
                We offer a complete range of pet care services
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {additionalServices.map((service) => (
                <div
                  key={service.name}
                  className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-sm font-medium text-foreground"
                >
                  <service.icon className="w-4 h-4 text-primary" />
                  {service.name}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
