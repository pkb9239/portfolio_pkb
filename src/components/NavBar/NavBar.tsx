'use client';

import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const navbarHeightOffset = -80;
  const moBileNavbarHeightOffset = -230;
  return (
    <>
      <div className="sticky top-0 w-full flex md:justify-around justify-between items-center md:px-6 md:py-6 z-10 px-3 py-3 bg-white bg-opacity-50 backdrop-blur-md">
        <div className="flex items-center text-2xl">
          <Link
            to="#"
            smooth={true}
            offset={navbarHeightOffset}
            className="hover:text-sky-700 md:text-2xl text-base cursor-pointer"
          >
            PKB's Portfolio
          </Link>
        </div>
        <ul className="hidden md:flex flex-nowrap gap-5">
          <li className="basis-1/4 text-xl  text-nowrap">
            <Link
              to="about-me"
              smooth={true}
              offset={navbarHeightOffset}
              className="hover:text-sky-700 cursor-pointer"
            >
              About me
            </Link>
          </li>
          <li className="basis-1/4 text-xl  text-nowrap">
            <Link
              to="skills"
              className="hover:text-sky-700 cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li className="basis-1/4 text-xl  text-nowrap">
            <Link
              to="archiving"
              smooth={true}
              offset={navbarHeightOffset}
              className="hover:text-sky-700 cursor-pointer"
            >
              Archiving
            </Link>
          </li>
          <li className="basis-1/4 text-xl  text-nowrap">
            <Link
              to="project"
              smooth={true}
              offset={navbarHeightOffset}
              className="hover:text-sky-700 cursor-pointer"
            >
              Project
            </Link>
          </li>
          <li className="basis-1/4 text-xl  text-nowrap">
            <Link
              to="career"
              smooth={true}
              offset={navbarHeightOffset}
              className="hover:text-sky-700 cursor-pointer"
            >
              Career
            </Link>
          </li>
        </ul>
        <div className="md:hidden flex items-center hover:text-sky-700">
          <button onClick={() => setIsToggle(!isToggle)}>
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
            'sticky top-12 items-center z-10 px-3 bg-white bg-opacity-50 backdrop-blur-md',
            {
              hidden: !isToggle,
            }
          )}
        >
          <Link
            to="about-me"
            smooth={true}
            offset={moBileNavbarHeightOffset}
            className="block px-2 py-2 text-sm hover:bg-gray-200 hover:text-sky-700"
          >
            About me
          </Link>
          <Link
            to="skills"
            smooth={true}
            offset={moBileNavbarHeightOffset}
            className="block px-2 py-2 text-sm hover:bg-gray-200 hover:text-sky-700"
          >
            Skills
          </Link>
          <Link
            to="archiving"
            smooth={true}
            offset={moBileNavbarHeightOffset}
            className="block px-2 py-2 text-sm hover:bg-gray-200 hover:text-sky-700"
          >
            Archiving
          </Link>
          <Link
            to="project"
            smooth={true}
            offset={moBileNavbarHeightOffset}
            className="block px-2 py-2 text-sm hover:bg-gray-200 hover:text-sky-700"
          >
            Project
          </Link>
          <Link
            to="career"
            smooth={true}
            offset={moBileNavbarHeightOffset}
            className="block px-2 py-2 text-sm hover:bg-gray-200 hover:text-sky-700"
          >
            Career
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default NavBar;
