import React from 'react';
import { ProjectCard, AnimatedHeader } from './subcomponents';
import { pokedex, deepLearning, posture, PCD } from '../assets';

const projectString = ['Projects'];
const projectArray = [
  [pokedex, 'Pokedex', 'https://e-fung.github.io/tsPokedex'],
  [posture, 'Posture Corrective Vest'],
];

const Projects = () => {
  return (
    <section id='projects' className='justify-center h-screen w-full px-36 flex bg-background text-white select-none flex-col space-y-10 '>
      <div className=''>
        <div className='text-highlight pb-24 flex justify-center'>
          <AnimatedHeader arrayOfStrings={projectString} />
        </div>
        <div className='flex space-x-20'>
          {projectArray.map(([imgSrc, title, link]) => {
            return <ProjectCard imgSrc={imgSrc} title={title} link={link} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
