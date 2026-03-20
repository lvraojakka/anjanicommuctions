import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQsSection";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ReviewsSection />
    <ServicesSection />
    <WhyChooseUsSection />
    <FAQSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
