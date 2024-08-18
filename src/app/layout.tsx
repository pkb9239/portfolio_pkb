import Head from 'next/head';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/global.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '박경빈 포트폴리오',
  description:
    '울창한 숲을 목표로 한그루 한그루 나무를 심는 프론트엔드 개발자 박경빈입니다.',
  icons: {
    icon: '/images/pkbpl.png',
  },

  metadataBase: new URL('https://portfolio-pkb-three.vercel.app/'),
  generator: 'Next.js',
  applicationName: '박경빈 포트폴리오',
  keywords: [
    '박경빈',
    '프론트엔드',
    '포트폴리오',
    '프론트엔드 포트폴리오',
    '개발자',
    '프론트엔드 박경빈',
  ],
  creator: '박경빈',
  authors: { name: '박경빈', url: 'https://github.com/pkb9239' },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: '박경빈 포트폴리오',
    description:
      '울창한 숲을 목표로 한그루 한그루 나무를 심는 프론트엔드 개발자 박경빈입니다.',
    url: 'https://portfolio-pkb-three.vercel.app/',
    siteName: '박경빈 포트폴리오',
    images: [
      {
        url: '/images/pkbpl.png',
        width: 800,
        height: 600,
        alt: '메인 사진',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '박경빈 포트폴리오',
    description:
      '울창한 숲을 목표로 한그루 한그루 나무를 심는 프론트엔드 개발자 박경빈입니다.',
    images: ['/images/pkbpl.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Head>
        <meta
          name="google-site-verification"
          content="iUAPQzkNb73HFU2jwwBY3nwxD7RvR8_oVCIMEezrsZ4"
        />
      </Head>
      <body className={inter.className}>
        <Theme
          accentColor="blue"
          grayColor="mauve"
          radius="large"
          scaling="90%"
        >
          {children}
        </Theme>
      </body>
    </html>
  );
}
