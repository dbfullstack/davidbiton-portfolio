import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RollingCards from "@/components/RollingCards";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import LiveWork from "@/components/LiveWork";
import Products from "@/components/Products";
import Stack from "@/components/Stack";
import Testimonials from "@/components/Testimonials";
import HowWeWork from "@/components/HowWeWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <RollingCards />
        <About />
        <CaseStudies />
        <LiveWork />
        <Products />
        <Stack />
        <Testimonials />
        <HowWeWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
