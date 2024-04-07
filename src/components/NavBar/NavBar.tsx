'use client';

import classNames from 'classnames';
import { useState } from 'react';

const NavBar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const hello = () => {
    console.log('hio');
  };
  return (
    <>
      <div className="sticky top-0 w-full flex md:justify-around justify-between items-center md:px-6 md:py-6 z-10 px-3 py-3 bg-white bg-opacity-50 backdrop-blur-md">
        <div className="flex items-center text-2xl">
          <a
            href="#"
            className="hover:text-sky-700 md:text-2xl text-base "
          >
            PKB's Portfolio
          </a>
        </div>
        <ul className="hidden md:flex flex-nowrap gap-5">
          <li className="basis-1/4 text-xl  text-nowrap">
            <a
              href="#"
              className="hover:text-sky-700"
            >
              About me
            </a>
          </li>
          <li className="basis-1/4 text-xl  text-nowrap">
            <a
              href="#"
              className="hover:text-sky-700"
            >
              Skills
            </a>
          </li>
          <li className="basis-1/4 text-xl  text-nowrap">
            <a
              href="#"
              className="hover:text-sky-700"
            >
              Archiving
            </a>
          </li>
          <li className="basis-1/4 text-xl  text-nowrap">
            <a
              href="#"
              className="hover:text-sky-700"
            >
              Project
            </a>
          </li>
          <li className="basis-1/4 text-xl  text-nowrap">
            <a
              href="#"
              className="hover:text-sky-700"
            >
              Career
            </a>
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
        <div className={classNames('md:hidden', { hidden: !isToggle })}>
          <a
            href="#"
            className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-sky-700"
          >
            About me
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-sky-700"
          >
            Skills
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-sky-700"
          >
            Archiving
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-sky-700"
          >
            Project
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-sm hover:bg-gray-200 hover:text-sky-700"
          >
            Career
          </a>
        </div>
      ) : null}
    </>
  );
};

export default NavBar;
