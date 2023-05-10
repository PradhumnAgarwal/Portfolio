'use client';

import { motion } from "framer-motion";

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion'

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(0.8)} className={`${styles.heroHeading} tracking-tighter`}>
          Pradhumn
        </motion.h1>

        <motion.div variants={textVariant(0.9)} className="flex flex-row justify-center items-center">
          <h1 className={`${styles.heroHeading} tracking-wider`}>Agarwal</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 0.7)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[30px] hero-gradient rounded-l-[140px] z-0 -top-[10px]" />

      </motion.div>

    </motion.div>
  </section>
);

export default Hero;
