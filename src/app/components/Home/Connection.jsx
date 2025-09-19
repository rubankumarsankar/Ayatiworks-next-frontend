"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
export default function Connection() {
  const router = useRouter();
  
    const goToContact = () => {
      router.push("/contact-us"); // 👈 works like navigate("/contact-us")
    };
  return (
    <section className="section py-20 bg-white overflow-hidden">
      <div className="section-container mx-auto text-center px-4">
        {/* Subtitle */}
        <motion.p
          className="text-xs tracking-[0.3em] text-black/80 font-secondary mb-4 uppercase"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          LET CURIOSITY LEAD THE WAY
        </motion.p>

        {/* Title */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-primary font-semibold text-black mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Open Inbox, Open Possibilities
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-black/80 font-secondary  mx-auto mb-14 text-sm sm:text-base leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Got questions, goals, or big ideas? Let’s talk strategy, scale, and
          digital moves. <br />Drop us a message and we’ll get back faster than your
          next scroll.
        </motion.p>

        {/* Button */}
        <motion.button
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
          onClick={goToContact}
        >
          SPARK A CONNECTION
        </motion.button>
      </div>
    </section>
  );
}
