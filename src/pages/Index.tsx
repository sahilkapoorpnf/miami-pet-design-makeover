import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MobileGrooming from "@/components/MobileGrooming";
import Testimonials from "@/components/Testimonials";
import Locations from "@/components/Locations";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <MobileGrooming />
      <Testimonials />
      <Locations />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
