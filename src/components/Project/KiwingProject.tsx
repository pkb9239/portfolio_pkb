import Link from 'next/link';
import Content from '../Content';
import { kiwingAccordionsContent, kiwingContent } from '@/constants/kiwing';
import Accordions from '../Accordions';

const KiwingProject = () => {
  return (
    <div className="flex flex-col gap-10">
      <Content
        category="팀 프로젝트"
        title={
          <Link
            href="https://kiwing.kr/"
            rel="noopener noreferrer"
            target="_blank"
            passHref
            className="font-bold underline transition-all duration-300 hover-gradient"
          >
            kiwing
          </Link>
        }
        introduce="사용자들에게 면접을 효율적이고 빠르게 준비할 수 있는 서비스를 개발하였습니다. 면접을 준비하는 과정에서 질문과 답변의 파편화에 불편함을 느껴 한 사이트에서 검색부터 질문, 답변 작성까지 한번에 같이 할 수 있으면 좋겠다 생각하여 기획하게 되었습니다."
        period="2024년 1월 - 진행중"
        content={kiwingContent}
        links={[
          <Link
            className="underline transition-all duration-300 hover-gradient"
            href="https://github.com/Team-kiwing/Team-3seco-kiwing-fe"
            rel="noopener noreferrer"
            target="_blank"
            passHref
          >
            GitHub Repository
          </Link>,
          <Link
            className="underline transition-all duration-300 hover-gradient"
            href="https://prgrms.notion.site/2794be1a25474d5a8ce0bed8b3191539"
            rel="noopener noreferrer"
            target="_blank"
            passHref
          >
            키윙 기획서 노션
          </Link>,
        ]}
        skill={<Accordions content={kiwingAccordionsContent} />}
      />
    </div>
  );
};

export default KiwingProject;
