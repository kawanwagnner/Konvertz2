import { useEffect } from "react";
import AOS from "aos";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Advantages from "./components/Advantages/Advantages";
import Process from "./components/Process/Process";
import FormSection from "./components/FormSection/FormSection";
import LeiSection from "./components/LeiSection/LeiSection";
import ProvasSection from "./components/ProvasSection/ProvasSection";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="font-sans bg-gray-100">
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Process />
        <FormSection />
        <LeiSection />
        <ProvasSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
