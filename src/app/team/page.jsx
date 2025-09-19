
export const metadata = {
  title: "Teams - Ayatiworks",
  description:
    "Meet the creative minds behind your brand’s success! Our Chennai-based experts craft strategies to elevate your digital presence. Explore now!",
};
import React from "react";
import HeroSection from "../components/Home/HeroSection";

import TeamIntro from "../components/Teams/TeamIntro";
import TeamMember from "../components/Teams/TeamMember";
import Connection from "../components/Teams/Connection";

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
