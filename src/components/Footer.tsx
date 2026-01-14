import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-coral rounded-full flex items-center justify-center">
                <span className="text-xl">🐾</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">Miami's Pet</h3>
                <p className="text-coral-light text-sm font-semibold -mt-1">Grooming</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-6">
              Pampering your pets since '98. South Florida's trusted pet grooming experts 
              with 25+ years of experience.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-coral transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-coral transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Dog Grooming", href: "#services" },
                { label: "Cat Grooming", href: "#services" },
                { label: "Dental Care", href: "#services" },
                { label: "Mobile Grooming", href: "#about" },
                { label: "Locations", href: "#locations" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-coral transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:7862220592"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-coral transition-colors"
                >
                  <Phone className="w-5 h-5 text-coral" />
                  (786) 222-0592
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@miamispetgrooming.com"
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-coral transition-colors"
                >
                  <Mail className="w-5 h-5 text-coral" />
                  info@miamispetgrooming.com
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Locations</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-coral shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Country Walk</p>
                  <p className="text-sm text-primary-foreground/70">
                    15816 SW 137th Avenue<br />
                    Miami, FL 33177
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-coral shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Bird Road</p>
                  <p className="text-sm text-primary-foreground/70">
                    9805 SW 40th St<br />
                    Miami, FL 33165
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Miami's Pet Grooming. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-coral transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-coral transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
