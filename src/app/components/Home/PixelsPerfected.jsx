import React from "react";
import { motion } from "framer-motion";

export default function PixelsPerfected() {
  const campaigns = [
    {
      img: "/assets/jeep.png",
      title:
        "Digital Marketing for Automobile Brands | Jeep India Independence Day Merchandise by Ayatiworks",
      sub: "",
      desc: "Discover how Ayatiworks transformed Jeep India’s Independence Day merchandise microsite , revamped UI/UX, catchy creatives, and a 3-day social sprint that translated likes into ₹240K+ in sales.",
      tags: [],
      cta: { label: "Read Case Study", path: "#" },
    },
    {
      img: "/assets/volvo-car.png",
      title: "The Wheels That Rolled In - Volvo",
      sub: "Driven by legacy, powered by performance. Just like our campaigns.",
      desc: "Ayatiworks crafted high-impact digital campaigns for Volvo, blending sleek creatives with sharp performance strategies, resulting in maximum visibility, engagement, and brand recall across premium audience segments.",
      tags: ["Performance Campaign", "Social Media"],
      cta: { label: "Read Case Study", path: "#" },
    },
    {
      img: "/assets/apex-hands.png",
      title: "The Steel Deal - Apex Dura TMT",
      sub: "Built for strength, branded for recall. A solid partnership in every sense.",
      desc: "As a 360° digital partner, we manage Apex Dura’s website, social media, creatives, and digital PR, building a durable digital foundation that matches the strength of their product.",
      tags: [],
      cta: { label: "Read Case Study", path: "#" },
    },
  ];

  return (
    <section className="bg-white section">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-container text-left relative mb-16"
      >
        <h2 className="section-title relative inline-block">
          Pixels Perfected
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-[180px] mt-3 origin-left rounded-full"
          />
        </h2>
      </motion.div>

      {/* Campaigns */}
      <div className="section-container space-y-20">
        {campaigns.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </motion.div>

            {/* Content */}
            <div className="w-full space-y-6">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="font-primary text-2xl md:text-3xl font-medium text-primary"
              >
                {item.title}
                <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-[180px] mt-3 origin-left rounded-full"
          />
              </motion.h3>

              {item.sub && (
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  viewport={{ once: true }}
                  className="text-black font-primary font-medium"
                >
                  {item.sub}
                </motion.p>
              )}

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-black/80 font-secondary leading-relaxed"
              >
                {item.desc}
              </motion.p>

              {/* Tags */}
              {item.tags.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 border border-blue-700 text-blue-700 text-sm rounded-full hover:bg-blue-700 hover:text-white transition"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              )}

              {/* CTA Button */}
              {item.cta && (
                <motion.a
                  href={item.cta.path}
                  className="inline-block mt-4 bg-secondary/90 hover:bg-secondary text-white font-primary text-lg md:text-xl font-medium py-2.5 px-8 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0px 12px 25px rgba(0,0,0,0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {item.cta.label}
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}

        {/* Global CTA (See More) */}
        {/* <div className="flex justify-center mt-10">
          <motion.a
            href="case-study"
            className="relative bg-secondary/90 hover:bg-secondary text-white font-primary text-lg md:text-xl font-medium py-3 px-10 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 12px 25px rgba(0,0,0,0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            SEE MORE
          </motion.a>
        </div> */}
      </div>
    </section>
  );
}
