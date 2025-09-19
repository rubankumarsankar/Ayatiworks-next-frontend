"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";

/* ===== data (yours) ===== */
const teamMembers = [
  {
    name: "Upendran Nandakumar",
    title: "Founder & CEO",
    img: "/assets/teams/upendran.svg",
    highlight: true,
    FaLinkedinIn: "https://www.FaLinkedinIn.com/in/upendrannandakumar",
  },
  {
    name: "Anbu",
    title: "Business Head",
    img: "/assets/teams/anbu.svg",
    highlight: true,
  },
  {
    name: "Solomon",
    title: "Chief Creative Officer",
    img: "/assets/teams/solomon.svg",
    highlight: true,
  },
  {
    name: "Tasmin",
    title: "Brand Services Director",
    img: "/assets/teams/tasmin.svg",
    highlight: true,
  },
  {
    name: "Gopi",
    title: "Assistant Vice President",
    img: "/assets/teams/gopinath.png",
    highlight: true,
  },
  {
    name: "Selva",
    title: "Content - Head",
    img: "/assets/teams/selva.svg",
    highlight: true,
  },
  {
    name: "Terence",
    title: "Chief Human Resource Officer",
    img: "/assets/teams/terence.png",
    highlight: true,
  },
  {
    name: "Rajan",
    title: "Sr. Art Director",
    img: "/assets/teams/rajan.png",
    highlight: true,
  },
  {
    name: "Daniel Joseph",
    title: "Senior SEO Content Strategist & Writer",
    img: "/assets/teams/daniel.png",
    highlight: true,
  },
  {
    name: "Palani Muthukumaran",
    title: "SEO Manager",
    img: "/assets/teams/palani.png",
    highlight: true,
  },
  {
    name: "Hari",
    title: "Accounts and Financer",
    img: "/assets/teams/hari.png",
    highlight: true,
  },
  {
    name: "Sridhar",
    title: "Digital Marketing Manager",
    img: "/assets/teams/male.png",
    highlight: true,
  },
  {
    name: "Jamal",
    title: "Digital Marketing Associate",
    img: "/assets/teams/jamal.png",
    highlight: true,
  },
  {
    name: "Srirangan M",
    title: "Senior Graphic Designer",
    img: "/assets/teams/srirangan.png",
    highlight: true,
  },
  {
    name: "Gopi R",
    title: "Senior Graphic Designer",
    img: "/assets/teams/gopi-r.png",
    highlight: true,
  },
  {
    name: "Srinath",
    title: "Junior UI/UX Designer",
    img: "/assets/teams/male.png",
    highlight: true,
  },
  {
    name: "Rufus",
    title: "Production Manager",
    img: "/assets/teams/male.png",
    highlight: true,
  },
  {
    name: "Ramya",
    title: "Web Developer",
    img: "/assets/teams/female.png",
    highlight: true,
  },
  {
    name: "Rubankumar S",
    title: "Full stack Devloper ",
    img: "/assets/teams/ruban.png",
    highlight: true,
    FaLinkedinIn: "https://www.FaLinkedinIn.com/in/rubankumar-sankar",
  },
  {
    name: "Pushpa",
    title: "Junior Digital Marketing Associate",
    img: "/assets/teams/pushpa.png",
    highlight: true,
  },
];

/* ===== Motion variants ===== */
const gridVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.02 },
  }),
};

export default function TeamMember() {
  return (
    <section className="bg-white section">
      <div className="section-container mx-auto">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-8"
          variants={gridVariant}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {teamMembers.map((member, idx) => (
            <motion.article
              key={`${member.name}-${idx}`}
              className={`
    group relative overflow-hidden rounded-2xl
    ring-1 ring-black/5 shadow-sm hover:shadow-lg
    bg-white h-[420px] transition-all duration-300
    ${member.highlight ? "ring-2 ring-secondary" : ""}
  `}
              custom={idx}
              variants={cardVariant}
              whileHover={{ y: -8 }}
            >
              {/* Full-cover image */}
              <img
                src={member.img}
                alt={
                  member.name
                    ? `${member.name} – ${member.title ?? "Team"}`
                    : "Team member"
                }
                className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-500 hover:bg-primary"
                loading="lazy"
              />

              {/* 👇 Image-only primary tint (no card bg change) */}
              <div
                className="
      absolute inset-0 z-10 pointer-events-none
      bg-primary/70 opacity-0 transition-opacity duration-300
      
    "
              />

              {/* Optional: if you prefer a softer photo tint, use multiply instead of opacity:
      className="absolute inset-0 z-10 pointer-events-none bg-primary mix-blend-multiply opacity-0 transition-opacity duration-300 group-hover:opacity-100"
   */}

              {/* FaLinkedinIn button (unchanged) */}
              {member.FaLinkedinIn && (
                <a
                  href={member.FaLinkedinIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open FaLinkedinIn profile of ${member.name}`}
                  className="
        absolute z-30 top-3 right-3 inline-flex h-10 w-10 items-center justify-center
        rounded-full bg-white text-[#0A66C2] ring-1 ring-black/5 shadow
        opacity-0 translate-y-1 transition-all duration-300
        group-hover:opacity-100 group-hover:translate-y-0
        focus-visible:opacity-100 focus-visible:translate-y-0
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70
      "
                >
                  <FaLinkedinIn className="h-5 w-5" />
                  <span className="sr-only">FaLinkedinIn</span>
                </a>
              )}

              {/* Bottom content chip */}
              <div className="absolute inset-x-0 bottom-0 z-20 p-4 md:p-5">
                <div className="rounded-xl bg-primary px-4 py-3 shadow-md transition-colors duration-300 group-hover:bg-white">
                  <h3 className="font-primary font-medium text-lg md:text-xl text-white transition-colors group-hover:text-primary">
                    {member.name}
                  </h3>
                  {member.title && (
                    <p className="mt-1 text-sm font-medium  uppercase font-secondary text-white/80 transition-colors group-hover:text-primary/80">
                      {member.title}
                    </p>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
