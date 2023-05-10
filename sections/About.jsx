'use client';

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion'

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="| About Me"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 0.8)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        I have experience in designing and developing beautiful and functional websites.
        I have always had a passion for technology and its ability to create innovative solutions to complex problems.
        Throughout my journey, I have worked on a wide variety of projects, from small level websites to complex social-media platforms.
        I have experience with a range of technologies including MERN stack, and I am constantly expanding my knowledge to stay up-to-date with the latest web development trends.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.35, 0.8)}
        src="/arrow-down.svg"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
