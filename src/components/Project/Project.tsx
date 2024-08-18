'use client';

import Title from '../Title';
import KiwingProject from './KiwingProject';
import MatNamProject from './MatNamProject';
import PortfolioProject from './PortfolioProject';

const Project = () => {
  return (
    <>
      <article className="flex flex-col md:gap-12 gap-8">
        <Title text="Project" />
        <PortfolioProject />
        <KiwingProject />
        <MatNamProject />
      </article>
    </>
  );
};

export default Project;
