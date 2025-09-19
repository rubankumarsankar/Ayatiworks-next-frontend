// app/page.jsx
"use client";

import HeroSection from "./components/Home/HeroSection";
import PromoHero from "./components/Home/PromoHero";
import WhatAyati from "./components/Home/WhatAyati";
import PartnersInClimb from "./components/Home/PartnersInClimb";
import PixelsPerfected from "./components/Home/PixelsPerfected";
import DottedWorldMap from "./components/Home/MapLocation";
import Connection from "./components/Home/Connection";
import AyatiAboutSection from "./components/Home/AyatiAboutSection";
import CaasEdgeSection from "./components/Home/CaasEdgeSection";
// optional sections
// import HeroSectionLayout from "@/components/Home/HeroSectionLayout";
// import BrandsMarquee from "@/components/Home/BrandsMarquee";
// import FocusSection from "@/components/Home/FocusSection";
// import { BenefitsTimeline } from "@/components/Home/BenefitsTimeline";
// import BenefitsFlow from "@/components/Home/BenefitCard";
// import WhatWeDo from "@/components/Home/WhatWeDo";
// import AwardsSection from "@/components/Home/AwardsSection";
// import HomeGridSection from "@/components/Home/HomeGrid";
import dynamic from "next/dynamic";

const HeroSectionLayout = dynamic(
  () => import("./components/Home/HeroSection"), 
  { ssr: false }
);


export default function HomePage() {
  return (
    <>
      

      <HeroSectionLayout />
      {/* <HeroSectionLayout /> */}
      <PromoHero />
      <AyatiAboutSection />
      <CaasEdgeSection />
      {/* <BrandsMarquee /> */}
      {/* <FocusSection /> */}
      {/* <BenefitsTimeline /> */}
      {/* <BenefitsFlow /> */}
      {/* <WhatWeDo /> */}
      <WhatAyati />
      <PartnersInClimb />
      <PixelsPerfected />
      <DottedWorldMap />
      {/* <HomeGridSection /> */}
      {/* <AwardsSection /> */}
      <Connection />
    </>
  );
}
