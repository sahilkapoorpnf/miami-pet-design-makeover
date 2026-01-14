import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, Star, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-dog.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-warm">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-coral-light/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-light/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Paw Prints */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-coral/20 text-4xl"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🐾
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Pampering Your Pets Since '98
              <Star className="w-4 h-4 fill-gold text-gold" />
            </motion.div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              Professional{" "}
              <span className="text-gradient-coral">Mobile</span>{" "}
              <br className="hidden sm:block" />
              Pet Grooming
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              South Florida's trusted pet grooming experts. We bring premium grooming services 
              right to your doorstep or visit our Miami locations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild>
                <a href="https://miamispetgroominginc.curlypet.com/login" target="_blank" rel="noopener noreferrer">
                  Book Your Appointment
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#locations">
                  <MapPin className="w-5 h-5 mr-2" />
                  Find a Location
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <span className="font-semibold">5.0 Rating</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">25+</span> Years Experience
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground">10,000+</span> Happy Pets
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={heroImage}
                  alt="Happy groomed dog"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>

              {/* Floating Card - Mobile Grooming */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-20 bg-card p-4 rounded-2xl shadow-card z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-teal rounded-full flex items-center justify-center text-2xl">
                    🚐
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Mobile Service</p>
                    <p className="text-sm text-muted-foreground">We come to you!</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card - Rating */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 bottom-32 bg-card p-4 rounded-2xl shadow-card z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="font-bold text-foreground">500+ Reviews</span>
                </div>
              </motion.div>

              {/* Background Decoration */}
              <div className="absolute -z-10 top-10 right-10 w-full h-full bg-gradient-coral rounded-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
