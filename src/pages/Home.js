import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import FeaturesBlocks from "../components/FeaturesBlocks";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroHome from "../components/HeroHome";
import Newsletter from "../components/Newsletter";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="flex-grow">
        <HeroHome />
        <Features />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
      </main>

      <Banner />

      <Footer />
    </div>
  );
};

export default Home;
