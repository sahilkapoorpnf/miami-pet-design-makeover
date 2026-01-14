import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Virginia G.",
    pet: "Luna",
    image: "🐕",
    rating: 5,
    text: "What impressed me most about the grooming was how well Luna was treated. With her being older and a bit more sensitive, the groomer handled her with such kindness. She looked absolutely adorable and fluffy. I'm definitely going to recommend this service!",
  },
  {
    name: "Robert J.",
    pet: "Bingo",
    image: "🐕‍🦺",
    rating: 5,
    text: "Bingo's grooming experience was fantastic! The convenience of having the groomer come to us was a game changer. They worked quickly and efficiently, and Bingo looked amazing afterward. I appreciate the expertise; it really shows in the results!",
  },
  {
    name: "Susan R.",
    pet: "Suki",
    image: "🐱",
    rating: 5,
    text: "Suki's grooming session was fantastic! The convenience of their service was a game changer. They worked with such attention to detail, and Suki looked perfect afterward with a cute bow. Their 25 years of expertise really shows in the results!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-warm relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-coral-light/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-light/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Our Satisfied <span className="text-gradient-coral">Customers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what pet parents across South Florida 
            have to say about their experience with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative bg-card rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-coral rounded-full flex items-center justify-center shadow-coral">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-8 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">Pet parent of {testimonial.pet}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "25+", label: "Years Experience" },
            { value: "10,000+", label: "Happy Pets" },
            { value: "5.0", label: "Star Rating" },
            { value: "2", label: "Locations" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient-coral">
                {stat.value}
              </div>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
