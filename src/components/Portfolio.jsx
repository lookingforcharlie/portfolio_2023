import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import Title from './Title';

function Portfolio() {
  return (
    <>
      <div className='text-center mb-10'>
        <Title>{`<Projects Hub />`}</Title>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8'>
          {portfolio.map((project) => (
            <PortfolioItem
              key={project.title}
              title={project.title}
              imgUrl={project.imgUrl}
              stack={project.stack}
              linkLive={project.linkLive}
              linkGit={project.linkGit}
              linkDemo={project.demo}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
