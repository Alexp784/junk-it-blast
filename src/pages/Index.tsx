import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContactStrip from "@/components/ContactStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import QuoteForm from "@/components/QuoteForm";
import ReadyCTA from "@/components/ReadyCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ContactStrip />
      <About />
      <Services />
      <WhyChooseUs />
      <Reviews />
      <QuoteForm />
      <ReadyCTA />
      <Footer />
    </div>
  );
};

export default Index;
