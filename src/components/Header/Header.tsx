'use client';

import { MOBILENAVBARHEIGHTOFFSET, PCNAVBARHEIGHTOFFSET } from '@/constants';
import useResize from '@/hooks/useResize';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const { isMobile } = useResize();

  const navbarHeightOffset = isMobile
    ? MOBILENAVBARHEIGHTOFFSET
    : PCNAVBARHEIGHTOFFSET;

  return (
    <div
      id="#"
      className="flex flex-col md:gap-5 gap-3 items-center w-full  h-full p-5 md:p-8 bg-slate-600"
    >
      <div className="md:text-4xl text-xl text-white">
        프론트엔드 개발자 l 박경빈
      </div>
      <div className="flex flex-col items-center justify-center md:gap-3 gap-1.5 text-white">
        <div className="flex gap-1">
          <div className="animate-[wiggle_1s_ease-in-out_infinite] md:text-xl text-l">
            👋🏻
          </div>
          <div className="md:text-xl text-l">안녕하세요.</div>
        </div>
        <p className="md:text-xl text-l">
          🌳 울창한 숲을 목표로 한 그루 한 그루 나무를 심는
        </p>
        <p className="md:text-xl text-l">🧑🏻‍💻 프론트엔드 개발자 박경빈입니다.</p>
        <Link
          to="about-me"
          smooth={true}
          offset={navbarHeightOffset}
          className="block px-2 py-2 text-sm cursor-pointer"
        >
          <svg
            className="animate-bounce w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <svg
            className="animate-bounce w-6 h-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Header;
