import Education from '@/components/Education';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import Project from '@/components/Project';
import ScrollTopButton from '@/components/ScrollTopButton';
import Study from '@/components/Study';

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <div className="fixed md:right-12 md:bottom-12 right-5 bottom-5 flex justify-around items-center w-12 h-12 z-50">
        <ScrollTopButton />
      </div>
      <div className="flex flex-col items-center md:py-16 py-0 md:gap-16 gap-6 pb-8">
        <div
          id="project"
          className="flex flex-col md:w-3/5 w-full md:px-0 px-4"
        >
          <Project />
        </div>
        <div
          id="education"
          className="flex flex-col md:w-3/5 w-full md:px-0 px-4"
        >
          <Education />
        </div>
        <div
          id="study"
          className="flex flex-col md:w-3/5 w-full md:px-0 px-4"
        >
          <Study />
        </div>
      </div>
    </>
  );
}
