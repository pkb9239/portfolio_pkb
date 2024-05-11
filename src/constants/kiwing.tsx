import Link from 'next/link';

export const kiwingAccordionsContent = [
  {
    id: '1',
    text: 'React',
    answer:
      'UI 개발에 집중할 수 있습니다. 컴포넌트를 이용해서 재사용 가능하고, 논리적으로 파일을 나누어서 개발 진행을 할 수 있습니다. 또한 JSX 문법을 이용해서 조금 더 직관적으로 템플릿을 구성할 수 있어서 사용했습니다. 그리고 커뮤니티가 방대해서 자료 찾기도 편합니다.',
  },
  {
    id: '2',
    text: 'TypeScript',
    answer:
      '함수나 객체에 들어가는 구조에 타입을 정의함으로써 인자나 프로퍼티의 자동완성으로 개발 진행할 때 편의성을 얻을 수 있습니다. 또한 함수, 객체의 값들을 실행 전에 타입이 틀린 부분을 발견하여 실행 후에 에러를 방지할 수 있습니다.',
  },
  {
    id: '3',
    text: 'react-router-dom',
    answer:
      'SPA인 React에서 라우팅을 구현하기 위해서 사용했습니다. 라우팅을 서버에서 관리하는 것이 아닌 클라이언트가 구현함으로써 SPA가 깜빡임 없이 페이지 이동을 구현할 수 있게 합니다.',
  },
  {
    id: '4',
    text: 'react-query',
    answer:
      'react-query는 서버 데이터를 캐싱하고, 관리하는 데 있어 강력한 도구입니다. 데이터 요청, 캐싱, 오류 처리 등을 자동으로 처리해주므로 개발자가 이에 집중하지 않고 UI 개발에 더 집중할 수 있게 해줍니다. 또한, 서버와의 데이터 통신을 효율적으로 관리하여 네트워크 요청을 최적화합니다.',
  },
  {
    id: '5',
    text: 'zustand',
    answer:
      '함수나 객체에 들어가는 구조에 타입을 정의함으로써 인자나 프로퍼티의 자동완성으로 개발 진행할 때 편의성을 얻을 수 있습니다. 또한 함수, 객체의 값들을 실행 전에 타입이 틀린 부분을 발견하여 실행 후에 에러를 방지할 수 있습니다.',
  },
  {
    id: '6',
    text: 'styled-components',
    answer:
      'CSS-in-JS를 사용한 이유는 공통 컴포넌트가 많기에 프로젝트가 UI 인터렉션 위주가 아닌 컴포넌트 위주의 프로젝트가 진행될 가능성이 커서 선택했습니다. 컴포넌트 위주의 프로젝트에서 개발 효율성을 중요시 하고, 필요한 CSS 스타일 요소만 로딩하기 때문에 사용하게 되었습니다.',
  },
  {
    id: '7',
    text: 'axios',
    answer:
      'axios는 HTTP 클라이언트 라이브러리로, 데이터 요청과 응답 처리를 간편하게 할 수 있습니다. 강력한 설정 옵션과 인터셉터 기능을 제공하여, 요청과 응답에 대한 처리를 쉽게 구현할 수 있습니다. 또한, Promise 기반의 API를 사용하므로 비동기 코드를 깔끔하게 관리할 수 있습니다.',
  },
  {
    id: '8',
    text: 'Mock Service Worker',
    answer:
      'MSW는 API mocking을 위한 도구입니다. 실제 서버 없이도 개발 환경에서 모의 API를 구축하고, 테스트 데이터를 제공할 수 있습니다. 이를 통해 프론트엔드 개발을 빠르게 진행할 수 있으며, API 변경에 따른 테스트 및 개발의 유연성을 높입니다.',
  },
];

export const kiwingContent = [
  <div className="flex">
    <span>
      공통 컴포넌트의 세밀한 분류와 조합으로 재사용성을 높였습니다. 컴포넌트는
      기능과 디자인에 따라 분류되어 조합되었으며,&nbsp;
      <span className="font-bold">전체 컴포넌트의 58%가</span>
      <Link
        className="font-bold underline transition-colors duration-300 hover:bg-main-color"
        href="https://github.com/Team-kiwing/Team-3seco-kiwing-fe/tree/dev/src/components/common"
        rel="noopener noreferrer"
        target="_blank"
        passHref
      >
        &nbsp;공통 컴포넌트
      </Link>
      로 활용됐습니다. 이로써 개발 시간은 &nbsp;
      <span className="font-bold">약 20%이상 단축</span>
      되었고, 코드 중복이 줄어들어&nbsp;
      <span className="font-bold">유지보수성이 향상</span>되었습니다.
      팀원들과&nbsp;
      <span className="font-bold">공통 컴포넌트를 공유</span>하며&nbsp;
      <span className="font-bold">코드 리뷰</span>를 통해
      <span className="font-bold">&nbsp;품질을 유지</span>했습니다.
    </span>
  </div>,
  <div className="flex">
    <span>
      <Link
        className="font-bold underline transition-colors duration-300 hover:bg-main-color"
        href="https://github.com/Team-kiwing/Team-3seco-kiwing-fe/pull/51"
        rel="noopener noreferrer"
        target="_blank"
        passHref
      >
        MSW를 활용하여
      </Link>
      <span className="font-bold">&nbsp;FE/BE 개발을 병렬적으로 진행</span>
      하여, 실제 백엔드 API가 준비되지 않은 상황에서도 개발을 진행할 수
      있었습니다. 이는 <span className="font-bold">독립적인 개발을 가능</span>케
      하고, 가상 데이터를 활용하여 UI를 개발하고 테스트할 수 있어, 실제 데이터를
      기다리지 않고도 개발을 진행할 수 있었습니다.
    </span>
  </div>,
  <div className="flex">
    <span>
      <Link
        className="font-bold underline transition-colors duration-300 hover:bg-main-color"
        href="https://github.com/Team-kiwing/Team-3seco-kiwing-fe/pull/321"
        rel="noopener noreferrer"
        target="_blank"
        passHref
      >
        무한 스크롤을 적용
      </Link>
      하기 위해&nbsp;
      <span className="font-bold">useInfiniteQuery 를 사용</span>
      했습니다. 이는&nbsp;
      <span className="font-bold">
        페이징된 데이터를 자동으로 가져오고 관리
      </span>
      하여 사용자가 스크롤을 내릴 때 새로운 데이터를 로드하는 작업을&nbsp;
      <span>간편</span>하게 해줍니다. 이를 통해 사용자는&nbsp;
      <span className="font-bold">자연스럽게 콘텐츠를 탐색</span>할 수 있습니다.
    </span>
  </div>,
  <div className="flex">
    <span>
      <Link
        className="font-bold underline transition-colors duration-300 hover:bg-main-color"
        href="https://www.notion.so/prgrms/query-Key-c4af6ec051c648fa930b048d34051b34"
        rel="noopener noreferrer"
        target="_blank"
        passHref
      >
        동적 query key로 인한 버그 문제를 해결
      </Link>
      함으로써 어떻게 <span className="font-bold">query key</span>를
      사용해야할지&nbsp;
      <span className="font-bold">명확</span>하게 알게되었습니다.
    </span>
  </div>,
  <div className="flex">
    <span>
      <span className="font-bold">PWA를 도입</span>
      하여 개발 생산성을 <span className="font-bold">향상</span>했습니다. 이는
      오프라인 상황에서도 접근이 가능하며, 앱 스토어에 의존하지 않고 배포할 수
      있어
      <span className="font-bold">사용자 경험을 개선</span>하는데 많은 시간을
      할애할 수 있었습니다.
    </span>
  </div>,
  <div className="flex">
    <span>
      웹 접근성, 검색 엔진 <span className="font-bold">최적화</span>를
      위해&nbsp;
      <span className="font-bold">시멘틱 태그</span>로 마이그레이션 하였습니다.
    </span>
  </div>,
  <div className="flex">
    <span>
      <span className="font-bold">hotjar 도입</span>을 통해 실제 사용자의
      웹사이트 행동 분석 및 피드백 데이터를 수집하여 프로젝트를 보완하였습니다.
    </span>
  </div>,
  <div className="flex">
    <span>
      <span className="font-bold">공유된 꾸러미 페이지</span>와&nbsp;
      <span className="font-bold">공유된 상세 꾸러미</span>를 담당하였습니다.
    </span>
  </div>,
];
