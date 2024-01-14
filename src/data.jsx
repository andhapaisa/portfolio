import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/curry-g5ff3af663_1280.jpg';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },


  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Aman',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Kasaudhan',
  },
   {
    id:3,
    title:'Birthday : ',
    description:'11 Jan 2004'
   },
  {
    id: 4,
    title: 'Age : ',
    description: '20 Years',
  },

  {
    id: 5,
    title: 'Studying : ',
    description: 'B.Tech. (Mech. Eng.)',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Ayodhya,UP',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '8471022320',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'amankasaudhanak07@gmail.com',
  },

];





export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '60',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'MongoDB',
    percentage: '66',
  },

  {
    id: 5,
    title: 'PostgreSQL',
    percentage: '85',
  },

  {
    id: 6,
    title: 'React',
    percentage: '55',
  },

  {
    id: 7,
    title: 'C,C++',
    percentage: '85',
  },

  {
    id: 8,
    title: 'DSA',
    percentage: '15',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Recipe Finder',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Languages : ',
        desc: 'HTML,CSS,JS,MongoDB',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://amanak7.github.io/amanak7/login.html',
      },
    ],
  },
  // {
  //   id: 2,
  //   img: Work2,
  //   title: 'Recipe Finder',
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: 'Project : ',
  //       desc: 'Website',
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: 'Client : ',
  //       desc: 'Dribble',
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: 'Language : ',
  //       desc: 'ReactJS',
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: 'Preview : ',
  //       desc: 'www.dribble.com',
  //     },
  //   ],
  // },
];
