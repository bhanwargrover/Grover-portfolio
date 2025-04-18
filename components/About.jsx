import Link from "next/link";
import { motion } from "framer-motion";

import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import EmailIcon from "./../public/assets/icons/email.svg";

function About() {
  return (
    <section
      className="md:my-36 md:w-2/3 w-full h-full xl:ml-36 lg:ml-12 p-8 md:mt-[40svh] xl:mt-[150px]"
      id="about"
    >
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={"sectionSubText text-gray-300"}>Introduction</p>
        <h2 className={"sectionHeadText text-white"}>Overview.</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-gray-300 text-[17px] w-full leading-[30px] flex flex-col justify-between gap-6"
      >
        <div>
          Hello! I&apos;m Bhanwar Grover, passionate and dedicated full-stack web developer currently learning and building projects with modern web technologies. My journey began with mastering the basics of HTML, CSS, and JavaScript, and I’ve been expanding my skills ever since.

          I&apos;m currently learning the MERN stack (MongoDB, Express.js, React.js, Node.js), along with Bootstrap for responsive design and Tailwind CSS for modern UI development. My goal is to create beautiful, user-friendly websites and applications that solve real-world problems. 
          <br className="sm:block hidden" />
          Let&apos;s collaborate to bring your ideas to life!
        </div>
      </motion.div>
    </section>
  );
}

export default About;
