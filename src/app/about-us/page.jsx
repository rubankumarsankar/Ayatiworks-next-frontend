// app/about-us/page.jsx

export const metadata = {
  title: "About Ayatiworks - Experts in Digital Marketing & Branding Chennai",
  description:
    "Discover top digital marketing & branding experts in Chennai. Unleash your brand’s potential with innovative strategies tailored for success!", 
};
import React from "react";
import HeroSection from "../components/Home/HeroSection";
import YearSlider from "../components/About/YearSlider";
import Connection from "../components/Home/Connection";
import AboutSection from "../components/About/AboutSection";
import HowWeDoIt from "../components/About/HowWeDo";
import WhatWeDoIt from "../components/About/WhatWeDo";



export default function AboutUsPage() {
  return (
    <main className="section section-home">
      {/* Hero / Intro */}
      <HeroSection />

      {/* About Company Overview */}
      <AboutSection />

      {/* Timeline / Journey */}
      <YearSlider />

      {/* What We Do */}
      <WhatWeDoIt />

      {/* How We Do It */}
      <HowWeDoIt />

      {/* Contact / CTA */}
      <Connection />
    </main>
  );
}
