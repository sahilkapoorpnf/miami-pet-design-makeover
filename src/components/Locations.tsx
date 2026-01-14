import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

const locations = [
  {
    name: "Country Walk",
    phone: "(305) 256-4499",
    address: "15816 SW 137th Avenue, Miami, FL 33177",
    hours: "Monday to Sunday: 8am-7pm",
    mapUrl: "https://maps.app.goo.gl/VGdFnZbkAgcrY5MS8",
  },
  {
    name: "Bird Road",
    phone: "(305) 221-5959",
    address: "9805 SW 40th St, Miami, FL 33165",
    hours: "Sun-Fri: 9am-5pm | Sat: 8am-6pm",
    mapUrl: "https://maps.app.goo.gl/Eop7FS4ZX9rJeS7eA",
  },
];

const Locations = () => {
  return (
    <section id="locations" className="py-24 bg-card">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Visit Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Prefer a Walk-In? <span className="text-gradient-teal">Try Our Stores!</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We have two convenient locations in Miami. Stop by and let our expert groomers 
            give your pet the pampering they deserve.
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-gradient-warm rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 border border-border"
            >
              {/* Location Badge */}
              <div className="absolute -top-4 left-8">
                <div className={`${index === 0 ? "bg-gradient-coral shadow-coral" : "bg-gradient-teal shadow-teal"} text-primary-foreground px-6 py-2 rounded-full font-bold text-sm`}>
                  {location.name}
                </div>
              </div>

              <div className="mt-4 space-y-6">
                {/* Phone */}
                <a
                  href={`tel:${location.phone.replace(/[^0-9]/g, "")}`}
                  className="flex items-center gap-4 group/link"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover/link:bg-primary group-hover/link:scale-110 transition-all">
                    <Phone className="w-5 h-5 text-primary group-hover/link:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call Us</p>
                    <p className="font-bold text-foreground text-lg group-hover/link:text-primary transition-colors">
                      {location.phone}
                    </p>
                  </div>
                </a>

                {/* Hours */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Hours</p>
                    <p className="font-semibold text-foreground">{location.hours}</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-semibold text-foreground">{location.address}</p>
                  </div>
                </div>

                {/* Get Directions Button */}
                <Button
                  variant={index === 0 ? "hero" : "teal"}
                  className="w-full mt-4"
                  asChild
                >
                  <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">
                    Get Directions
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Grooming CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-muted px-8 py-4 rounded-full">
            <span className="text-3xl">🚐</span>
            <span className="text-foreground font-medium">
              Can't make it? We'll come to you!{" "}
              <a href="https://miamispetgroominginc.curlypet.com/login" className="text-primary font-bold hover:underline">
                Book Mobile Grooming
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;
