import About from "@/components/About";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import TopBar from "@/components/TopBar";
import Work from "@/components/Work";
import React from "react";
export const metadata = {
  title: "Home Page",
  description: "Generated by create next app",
};

const Home = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Hero />
      {/* <About />
      <Stats />
      <Services />
      <Work />
      <Testimonials /> */}
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
