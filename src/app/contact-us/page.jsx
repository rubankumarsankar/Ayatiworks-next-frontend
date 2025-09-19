ContactPage 


// app/about-us/page.jsx

export const metadata = {
  title: "About Ayatiworks - Experts in Digital Marketing & Branding Chennai",
  description:
    "Discover top digital marketing & branding experts in Chennai. Unleash your brand’s potential with innovative strategies tailored for success!", 
};
import React from "react";
import HeroSection from "../components/Home/HeroSection";
import ContactInnerPage from "../components/Contact/ContactInnerPage";
import Form from "../components/Contact/Form";
import Address from "../components/Contact/Address";
import Digital from "../components/Contact/Digital";
import Brand from "../components/Contact/Brand";
import Map from "../components/Contact/Map";
import PartnersInClimb from "../components/Home/PartnersInClimb";
import Location from "../components/Contact/Location";
import Connection from "../components/Home/Connection";


export default function ContactPage() {
  return (
    <main className="section section-home">
      {/* Hero / Intro */}
      <HeroSection />
<ContactInnerPage />
      <Form />
      <Address />
      <Digital />
      <Brand />
      <Map />
      <PartnersInClimb />
      <Location />

      <Connection />

    </main>
  );
}
