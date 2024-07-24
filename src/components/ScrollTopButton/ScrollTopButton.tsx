'use client';

import {
  OPENMOBILENAVBARHEIGHTOFFSET,
  PCNAVBARHEIGHTOFFSET,
} from '@/constants';
import useResize from '@/hooks/useResize';
import { Link } from 'react-scroll';

const ScrollTopButton = () => {
  const { isMobile } = useResize();
  const offset = isMobile ? OPENMOBILENAVBARHEIGHTOFFSET : PCNAVBARHEIGHTOFFSET;
  return (
    <div>
      <Link
        to="about-me"
        smooth={true}
        offset={offset}
        onClick={() => {
          console.log('ho');
        }}
        className="flex justify-around items-center w-10 h-10 md:w-14 md:h-14  md:transition md:duration-300 rounded-3xl bg-chat-button-bg hover:shadow-x cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          color="#ffffff"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="md:w-9 md:h-9 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </Link>
    </div>
  );
};

export default ScrollTopButton;
