import { DiFirebase, DiReact } from 'react-icons/di'
import { BiHardHat } from 'react-icons/bi'
import styles from '../styles';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#626f8c]`}
    >
      {/* <p className="font-bold text-[20px] text-white">
        {number}
      </p> */}
      {number === 1 ? <DiReact size='3rem' /> : number === 2 ? <DiFirebase size='3rem' /> : <BiHardHat size='3rem' />}
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#ffffff] leading-[32.4px]">
      {text}
    </p>
  </div>
);

export default StartSteps;

