import Link from 'next/link';
import Content from '../Content';
import Title from '../Title';

const Study = () => {
  return (
    <div className="flex flex-col md:gap-12 gap-8">
      <Title text="Study" />
      <Content
        category="스터디"
        title="모던 자바스크립트 딥다이브 스터디"
        period="2023년 9월 - 2024년 1월"
        content={[
          <div className="flex">
            <span>
              <Link
                href="https://www.yes24.com/Product/Goods/92742567"
                rel="noopener noreferrer"
                target="_blank"
                passHref
                className="underline transition-all duration-300 hover-gradient"
              >
                모던 자바스크립트 딥다이브
              </Link>
              책으로 진행하는 발표 중심형 스터디를 진행하였습니다.
            </span>
          </div>,
          '분량을 정하여 매주 2회 씩 서로 공부한 것을 각자 블로그나 노션에 정리하여 발표 및 지식 공유했습니다.',
        ]}
        links={[
          <Link
            className="underline transition-all duration-300 hover-gradient"
            href="https://velog.io/@pkb0711/series/%EB%AA%A8%EB%8D%98-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%94%A5%EB%8B%A4%EC%9D%B4%EB%B8%8C"
            rel="noopener noreferrer"
            target="_blank"
            passHref
          >
            매주 공부한 내용을 블로그에 정리하였습니다.
          </Link>,
          <Link
            className="underline transition-all duration-300 hover-gradient"
            href="https://github.com/prgrms-web-devcourse/FEDC5_DeepDive-Study"
            rel="noopener noreferrer"
            target="_blank"
            passHref
          >
            스터디 진행 GitHub Repository
          </Link>,
        ]}
      />
    </div>
  );
};

export default Study;
