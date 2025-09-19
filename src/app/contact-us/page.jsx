export const metadata = {
  title: "Contact Us",
  description:
    "Ready to grow your brand? Connect with Chennai’s top digital marketing experts today for tailored solutions that drive results! Reach out now!", 
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
