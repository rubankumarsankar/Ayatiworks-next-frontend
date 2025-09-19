import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function PartnersInClimb() {
  const controlsRow1 = useAnimation();
  const controlsRow2 = useAnimation();

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    controlsRow1.start({
      x: ["0%", "-100%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: 20, // speed row1
      },
    });

    controlsRow2.start({
      x: ["-100%", "0%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: 22, // speed row2 (slightly diff)
      },
    });
  };

  const stopAnimation = () => {
    controlsRow1.stop();
    controlsRow2.stop();
  };

  const partners = [
    { name: "Client 1", logo: "/logos/Client-1.webp" },
    { name: "Client 2", logo: "/logos/Client-2.webp" },
    { name: "Client 3", logo: "/logos/Client-3.webp" },
    { name: "Client 4", logo: "/logos/Client-4.webp" },
    { name: "Client 5", logo: "/logos/Client-5.webp" },
    { name: "Client 6", logo: "/logos/Client-6.webp" },
    { name: "Client 7", logo: "/logos/Client-7.webp" },
    { name: "Client 8", logo: "/logos/Client-8.webp" },
    { name: "Client 9", logo: "/logos/Client-9.webp" },
    { name: "Client 10", logo: "/logos/Client-10.webp" },
    { name: "Client 11", logo: "/logos/Client-11.webp" },
    { name: "Client 12", logo: "/logos/Client-12.webp" },
    { name: "Client 13", logo: "/logos/Client-13.webp" },
    { name: "Client 14", logo: "/logos/Client-14.webp" },
    { name: "Client 15", logo: "/logos/Client-15.webp" },
    { name: "Client 16", logo: "/logos/Client-16.webp" },
    { name: "Client 17", logo: "/logos/Client-17.webp" },
    { name: "Client 18", logo: "/logos/Client-18.webp" },
    { name: "Client 19", logo: "/logos/Client-19.webp" },
    { name: "Client 20", logo: "/logos/Client-20.webp" },
    { name: "Client 21", logo: "/logos/Client-21.webp" },
    { name: "Client 22", logo: "/logos/Client-22.webp" },
    { name: "Client 23", logo: "/logos/Client-23.webp" },
    { name: "Client 24", logo: "/logos/Client-24.webp" },
    { name: "Client 25", logo: "/logos/Client-25.webp" },
    { name: "Client 26", logo: "/logos/Client-26.webp" },
    { name: "Client 27", logo: "/logos/Client-27.webp" },
    { name: "Client 28", logo: "/logos/Client-28.webp" },
    // { name: "Client 29", logo: "/logos/Client-29.webp" },
    { name: "Client 30", logo: "/logos/Client-30.webp" },
    { name: "Client 31", logo: "/logos/Client-31.webp" },
    { name: "Client 32", logo: "/logos/Client-32.webp" },
    { name: "Client 33", logo: "/logos/Client-33.webp" },
    { name: "Client 34", logo: "/logos/Client-34.webp" },
    { name: "Client 35", logo: "/logos/Client-35.webp" },
    { name: "Client 36", logo: "/logos/Client-36.webp" },
    { name: "Client 37", logo: "/logos/Client-37.webp" },
    { name: "Client 38", logo: "/logos/Client-38.webp" },
    { name: "Client 39", logo: "/logos/Client-39.webp" },
    { name: "Client 40", logo: "/logos/Client-40.webp" },
    { name: "Client 41", logo: "/logos/Client-41.webp" },
  ];

  const partners2 = [
    
    { name: "Client 21", logo: "/logos/Client-21.webp" },
    { name: "Client 22", logo: "/logos/Client-22.webp" },
    { name: "Client 23", logo: "/logos/Client-23.webp" },
    { name: "Client 24", logo: "/logos/Client-24.webp" },
    { name: "Client 25", logo: "/logos/Client-25.webp" },
    { name: "Client 26", logo: "/logos/Client-26.webp" },
    { name: "Client 27", logo: "/logos/Client-27.webp" },
    { name: "Client 28", logo: "/logos/Client-28.webp" },
    // { name: "Client 29", logo: "/logos/Client-29.webp" },
    { name: "Client 30", logo: "/logos/Client-30.webp" },
    { name: "Client 31", logo: "/logos/Client-31.webp" },
    { name: "Client 32", logo: "/logos/Client-32.webp" },
    { name: "Client 33", logo: "/logos/Client-33.webp" },
    { name: "Client 34", logo: "/logos/Client-34.webp" },
    { name: "Client 35", logo: "/logos/Client-35.webp" },
    { name: "Client 36", logo: "/logos/Client-36.webp" },
    { name: "Client 37", logo: "/logos/Client-37.webp" },
    { name: "Client 38", logo: "/logos/Client-38.webp" },
    { name: "Client 39", logo: "/logos/Client-39.webp" },
    { name: "Client 40", logo: "/logos/Client-40.webp" },
    { name: "Client 41", logo: "/logos/Client-41.webp" },
    { name: "Client 1", logo: "/logos/Client-1.webp" },
    { name: "Client 2", logo: "/logos/Client-2.webp" },
    { name: "Client 3", logo: "/logos/Client-3.webp" },
    { name: "Client 4", logo: "/logos/Client-4.webp" },
    { name: "Client 5", logo: "/logos/Client-5.webp" },
    { name: "Client 6", logo: "/logos/Client-6.webp" },
    { name: "Client 7", logo: "/logos/Client-7.webp" },
    { name: "Client 8", logo: "/logos/Client-8.webp" },
    { name: "Client 9", logo: "/logos/Client-9.webp" },
    { name: "Client 10", logo: "/logos/Client-10.webp" },
    { name: "Client 11", logo: "/logos/Client-11.webp" },
    { name: "Client 12", logo: "/logos/Client-12.webp" },
    { name: "Client 13", logo: "/logos/Client-13.webp" },
    { name: "Client 14", logo: "/logos/Client-14.webp" },
    { name: "Client 15", logo: "/logos/Client-15.webp" },
    { name: "Client 16", logo: "/logos/Client-16.webp" },
    { name: "Client 17", logo: "/logos/Client-17.webp" },
    { name: "Client 18", logo: "/logos/Client-18.webp" },
    { name: "Client 19", logo: "/logos/Client-19.webp" },
    { name: "Client 20", logo: "/logos/Client-20.webp" },
  ];

  return (
    <section className="bg-white py-10">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 section-container"
      >
        <h2 className="section-title inline-block relative">
          Our Partners in Climb
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-[250px] mt-3 origin-left rounded-full"
          />
        </h2>
      </motion.div>

      {/* Row 1 */}
      <div
        className="relative w-full overflow-hidden mb-6 section-container"
        onMouseEnter={stopAnimation}
        onMouseLeave={startAnimation}
      >
        <motion.div className="flex gap-8" animate={controlsRow1}>
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`row1-${index}`}
              className="flex items-center justify-center min-w-[150px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 md:h-15 lg:h-20 object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 */}
      <div
        className="relative w-full overflow-hidden section-container"
        onMouseEnter={stopAnimation}
        onMouseLeave={startAnimation}
      >
        <motion.div className="flex gap-8" animate={controlsRow2}>
          {[...partners2, ...partners2].map((partner, index) => (
            <div
              key={`row2-${index}`}
              className="flex items-center justify-center min-w-[150px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-15 md:h-15 lg:h-20 object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="border-b border-black mt-10 section-container"
      />
    </section>
  );
}
