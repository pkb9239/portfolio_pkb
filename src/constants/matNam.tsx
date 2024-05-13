import Link from 'next/link';

export const matNamAccordionsContent = [
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
    text: 'recoil',
    answer:
      '함수나 객체에 들어가는 구조에 타입을 정의함으로써 인자나 프로퍼티의 자동완성으로 개발 진행할 때 편의성을 얻을 수 있습니다. 또한 함수, 객체의 값들을 실행 전에 타입이 틀린 부분을 발견하여 실행 후에 에러를 방지할 수 있습니다.',
  },
  {
    id: '6',
    text: 'Emotion',
    answer:
      'CSS-in-JS를 사용한 이유는 공통 컴포넌트가 많기에 프로젝트가 UI 인터렉션 위주가 아닌 컴포넌트 위주의 프로젝트가 진행될 가능성이 커서 선택했습니다. 컴포넌트 위주의 프로젝트에서 개발 효율성을 중요시 하고, 필요한 CSS 스타일 요소만 로딩하기 때문에 사용하게 되었습니다.',
  },
  {
    id: '7',
    text: 'axios',
    answer:
      'axios는 HTTP 클라이언트 라이브러리로, 데이터 요청과 응답 처리를 간편하게 할 수 있습니다. 강력한 설정 옵션과 인터셉터 기능을 제공하여, 요청과 응답에 대한 처리를 쉽게 구현할 수 있습니다. 또한, Promise 기반의 API를 사용하므로 비동기 코드를 깔끔하게 관리할 수 있습니다.',
  },
];

const SOLVE =
  '유저 프로필 페이지 개발 과정에서 랜더링 시 깜빡거리는 현상을 해결하기위해 토큰을 통한 유저의 정보를 recoil을 이용하여 상태관리하여 이를 ';

export const matNamContent = [
  <div className="flex">
    로그인이나 회원가입을 하였을 때&nbsp;
    <span>
      <span className="font-bold">토큰을 저장하는 flow를 담당</span>하였습니다.
    </span>
  </div>,
  <div className="flex">
    <span>
      <Link
        className="font-bold underline transition-colors duration-300 hover:bg-main-color"
        href="https://github.com/prgrms-fe-devcourse/FEDC5_MatNam_Ducki/pull/78"
        rel="noopener noreferrer"
        target="_blank"
        passHref
      >
        액세스 토큰의 존재 여부와 값에 따라 자신의 프로필 또는 다른 사용자의
        프로필을 구분
      </Link>
      하는 로직을 구현하였습니다.
    </span>
  </div>,
  <div className="flex">
    <span>
      프로필 페이지의 렌더링 과정에서&nbsp;
      <Link
        className="font-bold underline transition-colors duration-300 hover:bg-main-color"
        href="https://github.com/prgrms-fe-devcourse/FEDC5_MatNam_Ducki/pull/150"
        rel="noopener noreferrer"
        target="_blank"
        passHref
      >
        깜빡거리는 현상을 해결
      </Link>
      하기 위해,
      <span className="font-bold">
        &nbsp;recoil 상태 관리 라이브러리를 사용하여 토큰을 통한 사용자 정보를
        효율적으로 관리
      </span>
      하고, 페이지를 렌더링할 때 깜빡거리는 현상을 방지하였습니다.
    </span>
  </div>,
  <div className="flex">
    <span>
      <Link
        className="font-bold underline transition-colors duration-300 hover:bg-main-color"
        href="https://github.com/prgrms-fe-devcourse/FEDC5_MatNam_Ducki/pull/106"
        rel="noopener noreferrer"
        target="_blank"
        passHref
      >
        Spinner 컴포넌트를 구현하여 사용자에게 로딩 상태를 시각적으로 표시
      </Link>
      하고, React의 Suspense를 활용하여 API fetch 상태를&nbsp;
      <span className="font-bold">자동으로 관리하여 사용자 경험을 개선</span>
      했으며,
      <span className="font-bold">
        &nbsp;데이터 로딩 시간 동안 더 나은 피드백
      </span>
      을 제공했습니다.
    </span>
  </div>,
  <div className="flex">
    <span>
      <span className="font-bold">
        팀장을 맡아 원할하고 적극적인 커뮤니케이션을 이끌었고 전체적인 일정 및
        스프린트를 관리
      </span>
      하였습니다.
    </span>
  </div>,
];
