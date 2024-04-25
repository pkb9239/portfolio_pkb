import Link from 'next/link';
import Content from '../Content';
import Accordions from '../Accordions';
import {
  portfolioAccordionsContent,
  portfolioContent,
} from '@/constants/portfolio';

const Portfolio = () => {
  return (
    <div className="flex flex-col gap-10">
      <Content
        category="개인 프로젝트"
        title="나만의 포트폴리오"
        introduce="나만의 포트폴리오 만들기"
        period="2024년 3월 - 진행중"
        content={portfolioContent}
        links={[
          <Link
            className="underline transition-colors duration-300 hover:bg-main-color"
            href="https://github.com/pkb9239/portfolio_pkb"
            rel="noopener noreferrer"
            target="_blank"
            passHref
          >
            GitHub Repository
          </Link>,
        ]}
        skill={<Accordions content={portfolioAccordionsContent} />}
      />
    </div>
  );
};

export default Portfolio;
