import { ReactNode } from 'react';
import { FaCheck } from 'react-icons/fa';
import { RiAttachment2 } from 'react-icons/ri';
import { BsStack } from 'react-icons/bs';
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
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-medium">{category}</div>
        <div className="text-4xl font-bold">{title}</div>
        {period && (
          <div>
            <div className="text-lg">{period}</div>
          </div>
        )}
        {introduce && (
          <div>
            <div className="text-lg font-medium">{introduce}</div>
          </div>
        )}
        <div>
          <ul>
            {content.map((item, index) => (
              <li
                className="flex gap-2 text-xl items-center pl-2"
                key={index}
              >
                <span>
                  <FaCheck
                    color="#3b81f6"
                    size={20}
                  />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {links && (
          <div>
            <div className="flex items-center text-2xl gap-1 font-bold pb-4">
              <span>
                <RiAttachment2 size={24} />
              </span>
              관련 링크
            </div>
            <ul>
              {links &&
                links.map((item, index) => (
                  <li
                    className="flex gap-2 text-xl items-center pl-2"
                    key={index}
                  >
                    <span>
                      <FaCheck
                        color="#3b81f6"
                        size={20}
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
            <div className="flex items-center gap-1 text-2xl font-bold pb-4">
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
