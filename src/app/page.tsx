import Education from '@/components/Education';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MouseFollower from '@/components/MouseFollower';
import NavBar from '@/components/NavBar';
import Project from '@/components/Project';
import ScrollTopButton from '@/components/ScrollTopButton';
import Study from '@/components/Study';

const Home = () => {
  return (
    <main>
      <MouseFollower>
        <NavBar />
        <Header />
        <nav className="fixed md:right-12 md:bottom-12 right-5 bottom-5 flex justify-around items-center w-12 h-12 z-50">
          <ScrollTopButton />
        </nav>
        <section className="flex flex-col items-center md:py-16 py-0 md:gap-16 gap-6">
          <article
            id="project"
            className="flex flex-col md:w-3/5 w-full md:px-0 px-4"
          >
            <Project />
          </article>
          <article
            id="education"
            className="flex flex-col md:w-3/5 w-full md:px-0 px-4"
          >
            <Education />
          </article>
          <article
            id="study"
            className="flex flex-col md:w-3/5 w-full md:px-0 px-4"
          >
            <Study />
          </article>
        </section>
        <Footer />
      </MouseFollower>
    </main>
  );
};

export default Home;
