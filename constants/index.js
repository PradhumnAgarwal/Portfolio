import { DiFirebase, DiReact } from "react-icons/di"
import { BiHardHat } from "react-icons/bi"

export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: '/planet-1.png',
    title: 'Chatting Website',
    link: 'https://github.com/PradhumnAgarwal/ChatApp'
  },
  {
    id: 'world-2',
    imgUrl: '/planet-2.png',
    title: 'Social Media',
    link: 'https://github.com/PradhumnAgarwal/SocialMedia'
  },
  {
    id: 'world-3',
    imgUrl: '/planet-3.png',
    title: 'Terminal Portfolio',
    link: 'https://github.com/PradhumnAgarwal/terminal-portfolio'
  },
  {
    id: 'world-4',
    imgUrl: '/planet-4.png',
    title: 'Decentralised Drive',
    link: 'https://github.com/PradhumnAgarwal/DeDrive'
  },
  {
    id: 'world-5',
    imgUrl: '/planet-5.png',
    title: 'More on GitHub',
    link: 'https://github.com/PradhumnAgarwal'
  },
];

// export const startingFeatures = [
//   'Frontend technologies like ReactJS, NextJS, Tailwind CSS, Material UI etc. ',
//   'Backend and Databases like NodeJs, MongoDB, PostgresSQL, Firebase. ',
//   'Web-3 technologies like Hardhat, Goerli, IPFS etc.',
// ];

export const startingFeatures = [
  {
    number: <DiReact size='3rem' />,
    text: 'Frontend technologies like ReactJS, NextJS, Tailwind CSS, Material UI etc. ',
  },
  {
    number: <DiFirebase size='3rem' />,
    text: 'Backend and Databases like NodeJs, MongoDB, PostgresSQL, Firebase. ',
  },
  {
    number: <BiHardHat size='3rem' />,
    text: 'Web-3 technologies like Hardhat, Goerli, IPFS etc.',
  },


];


export const socials = [

  {
    name: 'linkedin',
    url: '/linkedin.svg',
    link: 'https://www.linkedin.com/in/pradhumn-agarwal-365ba2229/'
  },
  {
    name: 'github',
    url: '/github.svg',
    link: 'https://github.com/PradhumnAgarwal'
  },
];
