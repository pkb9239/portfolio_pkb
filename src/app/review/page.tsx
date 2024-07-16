import ReviewCard from '@/components/ReviewCard';
import { ImCancelCircle } from 'react-icons/im';
import Link from 'next/link';
import { reviewContents } from '@/constants/review';

export default function reviewPage() {
  return (
    <main className="grid relative grid-cols-3 grid-row-3 gap-4 md:p-[3rem] p-[1rem] h-auto w-full max-md:grid-cols-1 max-lg:grid-cols-1 max-xl:grid-cols-2 bg-black">
      <Link
        href="/"
        className="fixed md:right-1 md:top-3 flex right-2 top-2 justify-around items-center w-12 h-12 z-50"
      >
        <ImCancelCircle
          color="white"
          size={25}
        />
      </Link>
      {reviewContents.map((review) => (
        <ReviewCard
          name={review.name}
          content={review.content}
          position={review.position}
          belong={review.belong}
        />
      ))}
    </main>
  );
}
