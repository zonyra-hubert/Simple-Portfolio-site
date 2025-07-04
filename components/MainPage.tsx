/* The above code is a TypeScript React component for a personal portfolio website. It consists of two
main sections: the Sidebar and the Scrollable Content. */
"use client";
import CircleLne from "./CircleLne";
import Divider from "./Divider";
import SkillBars from "./Skills";
import Experience from "./Experience";
import ContactPage from "./ContactME";
import { motion } from "framer-motion";

import { useRef } from "react";
import HeroSection from "@/components/HeroSection";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const MainPage = () => {
  const contactMeRef = useRef<HTMLDivElement>(null);

  return (
    <main

        className="lg:flex h-screen md:flex shadow-lg py-15 lg:py-0 md:py-0 xl:py-0 2xl:py-0 bg-blue-950 z-0">
      {/* Sidebar */}
<HeroSection contactMeRef={contactMeRef}/>
      {/* Scrollable Content */}
      <motion.div
        className="lg:ml-[400px] md:ml-[400px] bg-[#1c2b3a] flex-1 overflow-y-auto mt-[280px] lg:mt-0 p-3 md:mt-0 z-0"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <div className="space-y-6 text-white">
          <section>
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <CircleLne />
            <motion.p
              variants={fadeIn}
              transition={{ delay: 0.3 }}
              className="pl-4"
            >
              I&rsquo;m a passionate and detail-oriented Frontend Engineer and
              Full-Stack Web Developer with a strong foundation in modern web
              technologies. I specialize in building responsive,
              high-performance web applications using React, Next.js, Tailwind
              CSS, and TypeScript. My goal is to craft clean, efficient code and
              intuitive user experiences that bring real value to users and
              businesses alike. With a continuous learning mindset, I stay up to
              date with the latest industry trends and best practices. Whether
              working independently or collaboratively, I bring a
              problem-solving attitude and a deep commitment to delivering
              quality work on time.
            </motion.p>
          </section>
          <section>
            <div className="flex gap-10 pl-4">
              <div>
                <p className="p-2">
                  <span className="text-green-600 font-bold">Name:</span> Zonyra
                  Hubert
                </p>
                <p className="p-2">
                  <span className="text-green-600 font-bold">Degree:</span>{" "}
                  Computer Science
                </p>
                <p className="p-2">
                  <span className="text-green-600 font-bold ">Phone:</span>{" "}
                  <a href="tel:+233553724521">+233553724521</a>
                </p>

                <p className="p-2">
                  <span className="text-green-600 font-bold ">Email:</span>{" "}
                  <a href="mailto:danileshubert9@gmail.com" className="">
                    danielshubert9@gmail.com
                  </a>
                </p>
              </div>
              {/* <div></div> */}
            </div>
            <Divider />
          </section>
          <section>
            <h1 className="text-4xl font-bold mb-4 ">Skill</h1>
            <CircleLne />
            <SkillBars />
          </section>
          <Divider />
          <section>
            <h1 className="text-4xl font-bold mb-4">Experience</h1>
            <CircleLne />
            <Experience />
          </section>
          <Divider />
          <div ref={contactMeRef} id="contact-me">
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <CircleLne />
            <ContactPage />
            {/* <Edditer /> */}
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default MainPage;
