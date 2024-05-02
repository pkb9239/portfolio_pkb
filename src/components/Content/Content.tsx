'use client';

import { ReactNode } from 'react';
import { FaCheck } from 'react-icons/fa';
import { RiAttachment2 } from 'react-icons/ri';
import { BsStack } from 'react-icons/bs';
import useResize from '@/hooks/useResize';
interface ContentProps {
  category: string;
  title: ReactNode;
  introduce?: string;
  period?: string;
  content: ReactNode[];
  links?: ReactNode[];
  skill?: ReactNode;
}

const Content = ({
  category,
  title,
  introduce,
  period,
  content,
  skill,
  links,
}: ContentProps) => {
  const { isMobile } = useResize();
  return (
    <>
      <div className="flex flex-col md:gap-4 gap-3">
        <div className="md:text-2xl text-xl font-medium">{category}</div>
        <div className="md:text-4xl text-2xl font-bold">{title}</div>
        {period && (
          <div>
            <div className="md:text-lg text-base">{period}</div>
          </div>
        )}
        {introduce && (
          <div>
            <div className="md:text-lg text-base font-medium">{introduce}</div>
          </div>
        )}
        <div>
          <ul>
            {content.map((item, index) => (
              <li
                className="flex gap-2 md:text-xl text-base items-start md:pl-2 pl-1"
                key={index}
              >
                <span className="pt-1">
                  <FaCheck
                    color="#3b81f6"
                    size={isMobile ? 14 : 20}
                  />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {links && (
          <div>
            <div className="flex items-center md:text-2xl text-lg gap-1 font-bold md:pb-4 pb-2">
              <span>
                <RiAttachment2 size={24} />
              </span>
              관련 링크
            </div>
            <ul>
              {links &&
                links.map((item, index) => (
                  <li
                    className="flex gap-2 md:text-xl text-base items-center md:pl-2 pl-1"
                    key={index}
                  >
                    <span>
                      <FaCheck
                        color="#3b81f6"
                        size={isMobile ? 14 : 20}
                      />
                    </span>
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        )}
        {skill && (
          <div>
            <div className="flex items-center gap-1 md:text-2xl text-lg font-bold pb-4">
              <span>
                <BsStack size={22} />
              </span>
              기술 스택
            </div>
            <div>{skill}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Content;
