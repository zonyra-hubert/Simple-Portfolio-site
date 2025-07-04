
import {motion} from "framer-motion";
import Image from "next/image";
import  Link from "next/link";
import {FaLinkedin} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {Typewriter} from "react-simple-typewriter";

import hubert from "../assets/hubert2.jpg";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};
export default function HeroSection({contactMeRef}:{contactMeRef:unknown}   ) {


    const scroll = () => {
        // @ts-ignore
        contactMeRef.current?.scrollIntoView({ behavior: "smooth" });
    };


return (<motion.div
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    transition={{ duration: 0.8 }}
    className=" w-full lg:w-[400px] lg:fixed lg:h-screen  h-[50%] md:w-[400px] md:fixed md:h-screen z-10 "
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
                    "Software Engineer",
                    "React & Next.js, ExpressJs, Mongodb",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
            />
        </h2>

        <div className="flex gap-2 py-10  ">
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
            className=" mt-5 bottom-20 pb-5  "
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
)}