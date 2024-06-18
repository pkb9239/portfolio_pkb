'use client';

import {
  OPENMOBILENAVBARHEIGHTOFFSET,
  PCNAVBARHEIGHTOFFSET,
} from '@/constants';
import useResize from '@/hooks/useResize';
import classNames from 'classnames';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  const menuRef = useRef(null);
  const [isToggle, setIsToggle] = useState(false);

  const { isMobile } = useResize();

  const offset = isMobile ? OPENMOBILENAVBARHEIGHTOFFSET : PCNAVBARHEIGHTOFFSET;

  const handleClickOutside = (event: MouseEvent) => {
    if (isToggle) {
      if (
        menuRef.current &&
        !(menuRef.current as Element).contains(event.target as Node)
      ) {
        setIsToggle(false);
      }
    }
  };

  const handleIconClick = () => {
    setIsToggle((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isToggle]);

  return (
    <>
      <nav
        ref={menuRef}
        className="sticky top-0 z-50"
      >
        <div className="w-full flex flex-row md:justify-around justify-between items-center md:px-6 md:py-6 px-3 py-3 bg-white bg-opacity-50 backdrop-blur-md">
          <div className="flex items-center text-2xl">
            <Link
              to="about-me"
              smooth={true}
              offset={offset}
              className="hover:text-sky-700 hover:underline underline-offset-4 md:text-2xl text-base cursor-pointer"
            >
              PKB's Portfolio
            </Link>
          </div>
          <ul className="hidden md:flex flex-nowrap gap-5">
            <li className="basis-1/4 text-xl  text-nowrap">
              <Link
                to="about-me"
                smooth={true}
                offset={offset}
                className="hover:text-sky-700 hover:underline underline-offset-4 cursor-pointer"
              >
                About Me
              </Link>
            </li>
            <li className="basis-1/4 text-xl  text-nowrap">
              <Link
                to="project"
                smooth={true}
                offset={offset}
                className="hover:text-sky-700 hover:underline underline-offset-4 cursor-pointer"
              >
                Project
              </Link>
            </li>
            <li className="basis-1/4 text-xl  text-nowrap">
              <Link
                to="education"
                smooth={true}
                offset={offset}
                className="hover:text-sky-700 hover:underline underline-offset-4 cursor-pointer"
              >
                Education
              </Link>
            </li>
            <li className="basis-1/4 text-xl  text-nowrap">
              <Link
                to="study"
                smooth={true}
                offset={offset}
                className="hover:text-sky-700 hover:underline underline-offset-4 cursor-pointer"
              >
                Study
              </Link>
            </li>
          </ul>
          <div className="md:hidden flex items-center hover:text-sky-700">
            <button onClick={handleIconClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {isToggle ? (
          <div
            className={classNames(
              'sticky top-12 flex-row items-center z-10 px-3 bg-white bg-opacity-50 backdrop-blur-md',
              {
                hidden: !isToggle,
              }
            )}
          >
            <Link
              to="about-me"
              onClick={() => setIsToggle(false)}
              smooth={true}
              offset={offset}
              className="block px-2 py-2 text-sm hover:bg-gray-200 hover:text-sky-700"
            >
              About Me
            </Link>
            <Link
              to="project"
              onClick={() => setIsToggle(false)}
              smooth={true}
              offset={offset}
              className="block px-2 py-2 text-sm hover:bg-gray-200 hover:text-sky-700"
            >
              Project
            </Link>
            <Link
              to="education"
              onClick={() => setIsToggle(false)}
              smooth={true}
              offset={offset}
              className="block px-2 py-2 text-sm hover:bg-gray-200 hover:text-sky-700"
            >
              Education
            </Link>
            <Link
              to="study"
              onClick={() => setIsToggle(false)}
              smooth={true}
              offset={offset}
              className="block px-2 py-2 text-sm hover:bg-gray-200 hover:text-sky-700"
            >
              Study
            </Link>
          </div>
        ) : null}
      </nav>
    </>
  );
};

export default NavBar;
