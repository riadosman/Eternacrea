"use client";
import { useEffect, useState } from "react";
import Hero from "../components/about/Hero.jsx";
import OurVision from "./../components/about/OurVision";
import Mission from "./../components/about/Mission";
import Values from "./../components/about/Values";
import { motion } from "framer-motion";

function About() {
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    vision: false,
    mission: false,
    values: false,
  });

  // Function to handle visibility change
  const handleVisibilityChange = (entries) => {
    entries.forEach((entry) => {
      const sectionName = entry.target.getAttribute("data-section");
      if (entry.isIntersecting) {
        setVisibleSections((prev) => ({ ...prev, [sectionName]: true }));
      } else {
        setVisibleSections((prev) => ({ ...prev, [sectionName]: false }));
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleVisibilityChange, {
      threshold: 0.1, // Trigger when 10% of the section is visible
    });

    // Observe each section
    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup function to remove observer
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <motion.div
        initial="hidden"
        animate={visibleSections.hero ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="scroll-section"
        data-section="hero"
      >
        <Hero />
      </motion.div>

      <motion.div
        initial="hidden"
        animate={visibleSections.vision ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="scroll-section"
        data-section="vision"
      >
        <OurVision />
      </motion.div>

      <motion.div
        initial="hidden"
        animate={visibleSections.mission ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="scroll-section"
        data-section="mission"
      >
        <Mission />
      </motion.div>

      <motion.div
        initial="hidden"
        animate={visibleSections.values ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="scroll-section"
        data-section="values"
      >
        <Values />
      </motion.div>
    </div>
  );
}

export default About;
