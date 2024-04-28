import Link from 'next/link';
import Content from '../Content';
import Accordions from '../Accordions';
import { matNamAccordionsContent, matNamContent } from '@/constants/matNam';

const MatNamProject = () => {
  return (
    <div className="flex flex-col gap-10">
      <Content
        category="팀 프로젝트"
        title={
          <Link
            href="https://matnam.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            passHref
            className="underline transition-colors duration-300 hover:bg-main-color"
          >
            맛남의 길
          </Link>
        }
        introduce="맛남의 길은 광고나 마케팅이 아닌, 지역 사람들이 진심으로 추천하는 맛집을 찾는 데에 중점을 둔 서비스입니다."
        period="2023년 12월 - 2024년 1월"
        content={matNamContent}
        links={[
          <Link
            className="underline transition-colors duration-300 hover:bg-main-color"
            href="https://github.com/prgrms-fe-devcourse/FEDC5_MatNam_Ducki"
            rel="noopener noreferrer"
            target="_blank"
            passHref
          >
            GitHub Repository
          </Link>,
        ]}
        skill={<Accordions content={matNamAccordionsContent} />}
      />
    </div>
  );
};

export default MatNamProject;
