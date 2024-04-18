'use client';

import { MOBILENAVBARHEIGHTOFFSET, PCNAVBARHEIGHTOFFSET } from '@/constants';
import useResize from '@/hooks/useResize';
import { Link } from 'react-scroll';
import AboutMe from '@/components/AboutMe';

const Header = () => {
  const { isMobile } = useResize();
  const navbarHeightOffset = isMobile
    ? MOBILENAVBARHEIGHTOFFSET
    : PCNAVBARHEIGHTOFFSET;

  return (
    <div
      id="about-me"
      className="flex md:flex-row flex-col"
    >
      <aside className="flex flex-col md:gap-5 gap-3 items-center md:w-1/5 w-full">
        <AboutMe />
      </aside>
      <article
        className="flex flex-col md:gap-5 gap-3 items-center md:w-4/5 w-full h-screen p-5 md:p-8 bg-fixed relative"
        style={{
          backgroundImage: "url('/images/pkb.jpeg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 backdrop-opacity-10 backdrop-invert bg-white/30"></div>
        <div className="flex flex-col w-full h-full relative z-10 items-center justify-center">
          <div className="flex flex-col items-center justify-center md:gap-10 gap-1.5 font-semibold">
            <div className="flex gap-1">
              <div className="animate-[wiggle_1s_ease-in-out_infinite] md:text-3xl text-xl font-semibold">
                👋🏻
              </div>
              <div className="md:text-3xl text-xl"> 안녕하세요.</div>
            </div>
            <p className="md:text-3xl text-xl">🌳 울창한 숲을 목표로</p>
            <p className="md:text-3xl text-xl">
              🪵 한 그루 한 그루 나무를 심는
            </p>
            <p className="md:text-3xl text-xl">
              🧑🏻‍💻 프론트엔드 개발자 박경빈입니다.
            </p>
            <Link
              to="first-content"
              smooth={true}
              offset={navbarHeightOffset}
              className="block px-2 py-2 text-sm cursor-pointer"
            >
              <svg
                className="animate-bounce w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <svg
                className="animate-bounce w-8 h-8 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Header;
