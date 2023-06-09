'use client';

import { motion } from "framer-motion";
import { StartSteps, TitleText, TypingText } from "../components";

import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion'
import { startingFeatures } from '../constants'

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-[0.9] ${styles.flexCenter}`}>
        <img src="/started.png" className="w-[100%] h-[100%] object-contain" />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 0.8)}
        className="flex-[0.75] flex-justify-center flex-col"
      >
        <TypingText title='| Technologies' />
        <TitleText title={<>My experience includes </>} />
        <div className="mt-[32px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={index}
              number={feature.number}
              text={feature.text}
            />
          ))}

        </div>
      </motion.div>

    </motion.div>
  </section>
);

export default GetStarted;
