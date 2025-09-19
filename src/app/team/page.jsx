
export const metadata = {
  title: "About Ayatiworks - Experts in Digital Marketing & Branding Chennai",
  description:
    "Discover top digital marketing & branding experts in Chennai. Unleash your brand’s potential with innovative strategies tailored for success!",
};
import React from "react";
import HeroSection from "../components/Home/HeroSection";

import Connection from "../components/Home/Connection";
import TeamIntro from "../components/Teams/TeamIntro";
import TeamMember from "../components/Teams/TeamMember";

export default function TeamPage() {
  return (
    <main className="section section-home">
      {/* Hero / Intro */}
      <HeroSection />
       <TeamIntro />
      <TeamMember />

      <Connection />
    </main>
  );
}
