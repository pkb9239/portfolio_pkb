import { ReviewCardProps } from './ReviewCard.type';
import { ImQuotesLeft } from 'react-icons/im';
import { ImQuotesRight } from 'react-icons/im';

const ReviewCard = ({ name, content, belong, position }: ReviewCardProps) => {
  const nameArray = name.split('');
  nameArray.length <= 3 ? (nameArray[1] = '*') : (nameArray[2] = '*');
  const modifiedName = nameArray.join('');

  return (
    <div className="flex flex-col gap-2 p-5 rounded-md h-full bg-white/80 hover:bg-white/100 transition-all">
      <div className="flex justify-start">
        <ImQuotesLeft />
      </div>
      <div className="flex flex-col h-full gap-3 justify-between">
        <div className="text-base font-medium">{content}</div>
        <div className="flex gap-1">
          <span className="text-slate-500 font-medium">
            {modifiedName}
            {position === 'mentor' ? ' 멘토님' : '님'}
          </span>
          <span className="text-slate-500 font-medium">@{belong}</span>
        </div>
      </div>
      <div className="flex justify-end">
        <ImQuotesRight />
      </div>
    </div>
  );
};

export default ReviewCard;
