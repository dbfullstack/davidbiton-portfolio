import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import LiveWork from "@/components/LiveWork";
import Products from "@/components/Products";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <CaseStudies />
        <LiveWork />
        <Products />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
