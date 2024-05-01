import DotPoint from '../DotPoint';

const Title = ({ text }: { text: string }) => {
  return (
    <>
      <div className="flex flex-col md:gap-6 gap-1">
        <div className="md:text-7xl text-3xl">
          {text}
          <DotPoint />
        </div>
        <div className="w-full md:border-t-8 border-t-4 border-slate-600"></div>
      </div>
    </>
  );
};

export default Title;
