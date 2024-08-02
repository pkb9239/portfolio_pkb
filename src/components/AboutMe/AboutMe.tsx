import { AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';
import { SiVelog } from 'react-icons/si';
import { LiaBirthdayCakeSolid } from 'react-icons/lia';
import { FaRegStar } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineUpdate } from 'react-icons/md';
import { VscPreview } from 'react-icons/vsc';

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-aside-bg w-full h-full py-3">
      <div className="flex gap-2 items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-9 h-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
          />
        </svg>
        <span className="text-2xl font-semibold text-center">ABOUT ME</span>
      </div>
      <div className="w-4/5">
        <div className="w-full border-t-2 border-slate-600"></div>
        <div className="w-full flex flex-col md:py-5 md:gap-5 gap-2">
          <div className="flex gap-1 items-center justify-center py-2 transition-all duration-300 about-hover-gradient">
            <FaRegStar size={24} />
            <span className="text-xl">이름</span>
            <span className="text-xl">박경빈</span>
          </div>
          <div className="flex gap-1 items-center justify-center py-2 transition-all duration-300 about-hover-gradient">
            <VscPreview size={24} />
            <span className="text-xl">
              <Link href="/review">팀원 리뷰 보기</Link>
            </span>
          </div>

          <Link
            className="flex gap-1 items-center justify-center py-2 transition-all duration-300 about-hover-gradient"
            href="https://github.com/pkb9239"
            rel="noopener noreferrer"
            target="_blank"
            passHref
          >
            <AiFillGithub size={24} />
            <div className="text-xl">GitHub</div>
          </Link>

          <Link
            className="flex gap-1 items-center justify-center py-2 transition-all duration-300 about-hover-gradient"
            href="https://velog.io/@pkb0711/posts"
            rel="noopener noreferrer"
            target="_blank"
            passHref
          >
            <SiVelog size={24} />
            <div className="text-xl">Velog</div>
          </Link>

          <Link
            className="flex gap-1 items-center justify-center py-2 transition-all duration-300 about-hover-gradient"
            href="mailto:pkb8839@naver.com"
            target="_blank"
          >
            <HiOutlineMail size={24} />
            <span className="text-xl">이메일</span>
            <span className="text-xxl">pkb8839@naver.com</span>
          </Link>
          <div className="flex gap-1 items-center justify-center py-2 transition-all duration-300 about-hover-gradient">
            <MdOutlineUpdate size={24} />
            <span className="text-l">Last Update</span>
            <span className="text-xxl">2024.08.02</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
