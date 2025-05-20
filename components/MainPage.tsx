"use client";
import Image from "next/image";
import hubert from "../assets/hubert2.jpg";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import CircleLne from "./CircleLne";
import Divider from "./Divider";
import SkillBars from "./Skills";
import Experience from "./Experience";
import ContactPage from "./ContactME";
import { motion } from "framer-motion";
import Edditer from "./Edditer";
import { useRef } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const MainPage = () => {
  const contactMeRef = useRef<HTMLDivElement>(null);

  const scroll = () => {
    contactMeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="lg:flex h-screen md:flex shadow-lg py-15 lg:py-0 md:py-0 xl:py-0 2xl:py-0">
      {/* Sidebar */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
        className=" w-full lg:w-[400px] lg:fixed lg:h-screen md:w-[400px] md:fixed md:h-screen z-10 "
      >
        <div className="flex flex-col items-center justify-center text-center w-full lg:pt-3">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Image
              src={hubert}
              width={200}
              height={100}
              alt="Hubert"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
          <h1 className="lg:text-2xl md:text-2xl  font-bold mt-4 text-xl text-green-600">
            Hubert Zonyra
          </h1>
          <h2 className="font-bold text-lg">
            <Typewriter
              words={[
                "Frontend Engineer",
                "FullStack Web Developer",
                "React & Next.js Enthusiast",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <div className="flex gap-2 absolute bottom-35 ">
            <motion.a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Download CV
            </motion.a>
            <motion.button
              onClick={scroll}
              className="inline-block mt-4 px-6 py-2 cursor-pointer bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Contact Me
            </motion.button>
          </div>
          <motion.div
            className="absolute bottom-20 pb-5  "
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex space-x-4  ">
              <Link href="https://github.com/zonyra-hubert" target="_blank">
                <FaGithub className="w-6 h-6 text-gray-700 hover:text-white" />
              </Link>
              <Link
                href="https://linkedin.com/in/zonyra-hubert"
                target="_blank"
              >
                <FaLinkedin className="w-6 h-6 text-blue-600 hover:text-blue-800" />
              </Link>
              <Link href="https://instagram.com/your-profile" target="_blank">
                <FaInstagram className="w-6 h-6 text-pink-500 hover:text-pink-700" />
              </Link>
              <Link href="https://twitter.com/ZonyraHubert" target="_blank">
                <FaTwitter className="w-6 h-6 text-blue-500 hover:text-blue-700" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scrollable Content */}
      <motion.div
        className="lg:ml-[400px] md:ml-[400px] bg-[#1c2b3a] flex-1 overflow-y-auto mt-[280px] lg:mt-0 p-3 md:mt-0"
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
            <Edditer />
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default MainPage;
