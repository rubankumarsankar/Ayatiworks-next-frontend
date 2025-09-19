import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSectionLayout() {
  return (
    <section className="bg-white py-10 md:pt-20">
      {/* 
        Mobile/Tablet: 2 cols
          - Videos span 2 cols (full width)
          - Images are 1 col each (2-up)
        Desktop (xl): 12 cols with fixed row heights (180 / 172 / 168)
      */}
      <div
        className="
          mx-auto max-w-[1440px]
          grid gap-2 px-2
          grid-cols-2 md:grid-cols-2 xl:grid-cols-12
          auto-rows-auto
          xl:h-[600px] xl:grid-rows-[180px_172px_168px]
        "
      >
        {/* 1) Top Wide Video (mobile: full width; desktop: cols 1–8, row 1) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="
            col-span-2 xl:col-start-1 xl:col-span-8
            xl:row-start-1
            rounded-3xl overflow-hidden 
            aspect-[16/9] xl:aspect-auto xl:h-full
          "
        >
          <video
            src="/assets/banner-01.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 2) Right Top Small (mobile image 1 of first pair; desktop: cols 9–12, row 1) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="
            col-span-1 xl:col-start-9 xl:col-span-4
            xl:row-start-1
            rounded-3xl overflow-hidden border border-gray-300
            aspect-[16/9] xl:aspect-auto xl:h-full
          "
        >
          <img
            src="/assets/banner-14.jpg"
            alt="Steel Rods"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* 3) Left Middle Small (mobile image 2 of first pair; desktop: cols 1–4, row 2) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="
            col-span-1 xl:col-start-1 xl:col-span-4
            xl:row-start-2
            rounded-3xl overflow-hidden 
            aspect-[16/9] xl:aspect-auto xl:h-full
          "
        >
          <img
            src="/assets/banner-19.jpg"
            alt="Kid with helmet"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* 4) Center Middle (mobile: second video; desktop: cols 5–8, row 2) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="
            col-span-2 xl:col-start-5 xl:col-span-4
            xl:row-start-2 border border-gray-300
            rounded-3xl overflow-hidden 
            aspect-[16/9] xl:aspect-auto xl:h-full
          "
        >
          <video
            src="/assets/banner-12.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 5) Right Middle (mobile image 1 of second pair; desktop: cols 9–12, row 2) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="
            col-span-1 xl:col-start-9 xl:col-span-4
            xl:row-start-2
            rounded-3xl overflow-hidden 
            aspect-[16/9] xl:aspect-auto xl:h-full
          "
        >
          <img
            src="/assets/banner-17.jpg"
            alt="Pens"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* 6) Left Bottom (mobile image 2 of second pair; desktop: cols 1–4, row 3) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="
            col-span-1 xl:col-start-1 xl:col-span-4
            xl:row-start-3 border border-gray-300
            rounded-3xl overflow-hidden 
            aspect-[16/9] xl:aspect-auto xl:h-full
          "
        >
          <img
            src="/assets/banner-16.jpg"
            alt="Gadget"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* 7) Right Bottom Wide (mobile: third video; desktop: cols 5–12, row 3) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="
            col-span-2 xl:col-start-5 xl:col-span-8
            xl:row-start-3
            rounded-3xl overflow-hidden 
            aspect-[16/9] xl:aspect-auto xl:h-full
          "
        >
          <video
            src="/assets/banner-bottem.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
