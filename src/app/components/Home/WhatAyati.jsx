"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function WhatAyati() {
  const router = useRouter();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const cards = [
    {
      title: "Digital Marketing Services",
      icon: "/assets/good-vibe.png",
      basePath: "/digital-marketing-services",
      list: [
        { label: "SEO Services", href: "/digital-marketing-services/seo" },
        { label: "Social Media Marketing", href: "/digital-marketing-services/social-media-marketing" },
        { label: "Email Marketing", href: "/digital-marketing-services/email-marketing" },
        { label: "Instagram Marketing", href: "/digital-marketing-services/instagram-marketing" },
        { label: "Affiliate Marketing", href: "/digital-marketing-services/affiliate-marketing" },
        { label: "Programmatic Marketing", href: "/digital-marketing-services/programmatic-marketing" },
        { label: "Video Marketing", href: "/digital-marketing-services/video-marketing" },
      ],
      cta: {
        label: "Explore Digital Marketing →",
        href: "/digital-marketing-services",
      },
    },
    {
      title: "Content as a Service",
      icon: "/icon/01.png",
      basePath: "/content-as-a-service",
      list: [
        { label: "Multi-lingual Marketing", href: "/content-as-a-service/multilingual-marketing" },
        { label: "Brand Consultant", href: "/content-as-a-service/brand-service" },
        { label: "Video Creation", href: "/content-as-a-service/video-creation" },
      ],
      cta: {
        label: "Explore Content Services →",
        href: "/content-as-a-service",
      },
    },
    {
      title: "Digital PR Service",
      icon: "/icon/02.png",
      basePath: "/digital-pr",
      list: [
        { label: "Digital PR", href: "/digital-pr/digital-pr-service" },
        { label: "Influencer Marketing", href: "/digital-pr/influencer-marketing" },
        { label: "Online Reputation & Media Outreach", href: "/digital-pr/online-reputation-media-outreach" },
      ],
      cta: { label: "Explore Digital PR →", href: "/digital-pr" },
    },
    {
      title: "Web & E-commerce",
      icon: "/icon/03.png",
      basePath: "/web-ecommerce",
      list: [
        { label: "UX/UI Design", href: "/web-ecommerce/ux-ui-design" },
        { label: "Web Development Services", href: "/web-ecommerce/web-development" },
        { label: "Web Maintenance Services", href: "/web-ecommerce/web-maintenance" },
        { label: "Shopify Development Services", href: "/web-ecommerce/shopify-development" },
        { label: "E-commerce", href: "/web-ecommerce" },
      ],
      cta: { label: "Explore Web & E-commerce →", href: "/web-ecommerce" },
    },
  ];

  return (
    <section className="w-full section">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-center section-container mb-10"
      >
        <h3 className="section-title">
          What Ayati Brews
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-[250px] mt-3 origin-left rounded-full"
          />
        </h3>
        <h3 className="text-secondary font-primary text-2xl sm:text-3xl lg:text-3xl text-center md:text-right">
          Fully Integrated Digital & Creative Agency
        </h3>
      </motion.div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, y: -5 }}
            onClick={() => router.push(card.basePath)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && router.push(card.basePath)}
            className="relative flex flex-col bg-white p-8 rounded-2xl shadow-lg h-[480px] transition-all duration-300 cursor-pointer"
          >
            {/* Title + Icon */}
            <div className="flex items-center gap-3 mb-4">
              <h3 className="font-primary text-secondary text-3xl flex-1">{card.title}</h3>
              <img
                src={card.icon}
                alt={`${card.title} icon`}
                className="w-16 h-16 object-contain"
                loading="lazy"
              />
            </div>

            {/* Services List */}
            <ul
              className="space-y-2 text-black/80 uppercase font-secondary font-semibold text-base flex-1 leading-relaxed text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {card.list.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-secondary transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-4" onClick={(e) => e.stopPropagation()}>
              <Link
                href={card.cta?.href || card.basePath}
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 bg-secondary text-white font-primary text-sm md:text-base shadow hover:opacity-90 transition"
              >
                {card.cta?.label || `Explore ${card.title} →`}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="border-b border-primary h-1 mt-8 sm:mt-10 section-container"
      />
    </section>
  );
}
