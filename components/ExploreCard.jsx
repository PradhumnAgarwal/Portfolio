'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, link, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.25, 0.7)}
    className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} flex items-center justify-center min-w-[170px] h-[570px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => { handleClick(id); }}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[20px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-[24px] ">
        <div className={`${styles.flexCenter} w-[40px] h-[40px] rounded-[16px] glassmorphism mb-[16px]`}>
          <a href={link} className="w-1/2 h-1/2">
            <img src="/headset.svg"
              className="w-full h-full object-contain"
            />
          </a>
        </div>
        <p className="font-normal text-[14px] md:leading-[0px] leading-[17px] text-white uppercase">View on Github</p>
        <h2 className="mt-[8px] font-semibold sm:text-[32px] text-[20px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
