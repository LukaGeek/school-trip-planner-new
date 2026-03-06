import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import RegistrationPreview from "@/components/RegistrationPreview";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Destinations />
      <Services />
      <HowItWorks />
      <RegistrationPreview />
      <Footer />
    </div>
  );
}
