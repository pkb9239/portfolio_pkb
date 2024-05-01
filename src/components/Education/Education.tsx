import Link from 'next/link';
import Content from '../Content';
import Title from '../Title';

const Education = () => {
  return (
    <div className="flex flex-col gap-12">
      <Title text="Education" />
      <Content
        category="대학교"
        title="중부대학교"
        content={['소프트웨어학부 학사 졸업', '학점 3.85 / 4.5']}
      />
      <Content
        category="교육"
        period="2023년 9월 - 2024년 3월"
        title={
          <Link
            href="https://school.programmers.co.kr/learn/courses/17920/17920-5%EA%B8%B0-k-digital-training-%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%94%8C%EB%9E%AB%ED%8F%BC-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81"
            rel="noopener noreferrer"
            target="_blank"
            passHref
            className="underline transition-colors duration-300 hover:bg-main-color"
          >
            프로그래머스 웹 데브코스 프론트엔드 5기
          </Link>
        }
        content={[
          '자바스크립트 코어와 타입스크립트 동작 원리 및 문법을 학습했습니다.',
          '함수형 프로그래밍에 대해 학습했습니다.',
          'VanillaJS로 프로젝트를 진행했습니다',
          'React, Vue 학습 및 프로젝트를 진행했습니다.',
        ]}
      />
      <Content
        category="동아리"
        period="2023년 3월 - 2023년 8월"
        title={
          <Link
            href="https://github.com/LikeLion-11th-JBU"
            rel="noopener noreferrer"
            target="_blank"
            passHref
            className="underline transition-colors duration-300 hover:bg-main-color"
          >
            멋쟁이 사자처럼 11기
          </Link>
        }
        content={[
          '웹 개발 기초를 다졌습니다.',
          'HTML/CSS, Javascript, React를 다양한 과제를 수행하면서 실력을 향상시켰습니다.',
          <Link
            href="https://github.com/LikeLion-11th-JBU/elgineer-team-be"
            rel="noopener noreferrer"
            target="_blank"
            passHref
            className="underline transition-colors duration-300 hover:bg-main-color"
          >
            중앙 해커톤에 참가하여 웹 서비스를 구축하는 경험을 하였습니다.
          </Link>,
        ]}
      />
    </div>
  );
};

export default Education;
