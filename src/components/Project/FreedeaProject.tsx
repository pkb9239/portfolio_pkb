import Link from 'next/link';
import Content from '../Content';

import Accordions from '../Accordions';
import { freedeaAccordionsContent, freedeaContent } from '@/constants/freedea';

const FreedeaProject = () => {
  return (
    <article className="flex flex-col gap-10">
      <Content
        category="팀 프로젝트"
        title={
          <Link
            href="https://freedea.kim-vuelle.click/"
            rel="noopener noreferrer"
            target="_blank"
            passHref
            className="font-bold underline transition-all duration-300 hover-gradient"
          >
            프리디어
          </Link>
        }
        introduce="프리디어는 FREE IDEA 자유로운 아이디어 라는 뜻으로 일러스트, 핸드메이드, 영상 등 디자인 카테고리의 창작물을 판매 중개하는 플랫폼입니다."
        period="2024년 8월 - 진행중"
        content={freedeaContent}
        links={[
          <Link
            className="underline transition-all duration-300 hover-gradient"
            href="https://ossified-editorial-3b1.notion.site/e76a7f3fa8014dc0984b7a2504060a1d"
            rel="noopener noreferrer"
            target="_blank"
            passHref
          >
            프리디어 플랫폼 소개 노션
          </Link>,
        ]}
        skill={<Accordions content={freedeaAccordionsContent} />}
      />
    </article>
  );
};

export default FreedeaProject;
