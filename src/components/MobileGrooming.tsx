import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Clock, Shield, Sparkles } from "lucide-react";
import mobileVanImage from "@/assets/mobile-grooming.jpg";

const benefits = [
  {
    icon: Clock,
    title: "Convenient Scheduling",
    description: "We work around your schedule, bringing professional grooming to your doorstep.",
  },
  {
    icon: Shield,
    title: "Stress-Free Experience",
    description: "Your pet stays in familiar surroundings, reducing anxiety and stress.",
  },
  {
    icon: Sparkles,
    title: "One-on-One Attention",
    description: "Your pet is the only focus, ensuring personalized care and attention.",
  },
];

const MobileGrooming = () => {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-coral-light/5 to-transparent" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={mobileVanImage}
                alt="Mobile pet grooming van"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 shadow-card">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-coral rounded-full flex items-center justify-center text-2xl shadow-coral">
                      🚐
                    </div>
                    <div>
                      <h4 className="font-display text-xl font-bold text-foreground">
                        We Come To You!
                      </h4>
                      <p className="text-muted-foreground">
                        Serving all of South Florida
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Shape */}
            <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full bg-gradient-teal rounded-3xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Mobile Grooming
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              We Take Pride <span className="text-gradient-teal">In Our Work</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Miami's Pet Grooming, we take pride in offering a wide range of premium 
              pet care solutions tailored to your pet's unique needs. Our dedicated team 
              of professionals specializes in expert grooming, ensuring that your furry 
              friend receives the best care possible.
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="teal" size="lg" asChild>
                <a href="https://miamispetgroominginc.curlypet.com/login" target="_blank" rel="noopener noreferrer">
                  Book Mobile Grooming
                </a>
              </Button>
              <Button variant="ghost" size="lg" className="text-foreground">
                <Check className="w-5 h-5 mr-2 text-secondary" />
                Free Quote Available
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileGrooming;
