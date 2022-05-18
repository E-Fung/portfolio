import React from 'react';
import { ProjectCard, AnimatedHeader } from './subcomponents';
import { pokedex, posture, nasa, ecommerce } from '../assets';

const projectString = ['Projects'];
const projectArray = [
  {
    imgSrc: ecommerce,
    title: 'E-Commerce',
    link: 'https://main.d1vtd4ggb2ko2v.amplifyapp.com/',
    githubLink: 'https://github.com/E-Fung/ecommerce',
    summary:
      'A responsive, full-stack application with OAuth functionality. I learned to design and manipulate database tables, redux states, server routes and more.',
    techStack: 'TailwindCSS Redux PostgresSql Sequelize JWT React',
  },
  {
    imgSrc: pokedex,
    title: 'Pokedex',
    link: 'https://e-fung.github.io/tsPokedex',
    githubLink: 'https://github.com/E-Fung/tsPokedex',
    summary:
      'An intuitive and aesthetic front-end Pokédex application using the PokéAPI. Only display a certain type of Pokémon, or go into detail about a specific Pokémon. Features sorting, canvas styling, promise tracking, and more.',
    techStack: 'TypeScript Material-UI React',
  },
  {
    imgSrc: posture,
    title: 'Posture Corrective Vest',
    link: 'https://colab.research.google.com/github/E-Fung/Classification_PCD/blob/main/PCD_Model_Creation.ipynb',
    githubLink: 'https://github.com/E-Fung/Classification_PCD',
    summary:
      'I created, tested, and deployed a deep learning model onto an Arduino Nano to identify different varients of bad posture. I setup IMU sensors for orientational sensing, designed a data collection protocol, and validated data',
    techStack: 'TensorFlow Keras Python Arduino',
  },
  {
    imgSrc: nasa,
    title: 'NASA APOD Gallery',
    link: 'https://main.d1xr7hntse7mza.amplifyapp.com/',
    githubLink: 'https://github.com/E-Fung/nasa_apod',
    summary:
      "A masonry layout gallery for NASA's 'Astronomy Picture of the Day' which features localstorage, 'saved liked' functionality as well as modals for more in depth information.",
    techStack: 'TypeScript Material-UI React',
  },
];

const Projects = () => {
  return (
    <section id='projects' className='flex flex-col justify-center min-h-screen w-full px-96 py-20 space-y-20 bg-background text-white select-none'>
      <div className='text-white font-bold text-3xl'>{/* <AnimatedHeader arrayOfStrings={projectString} /> */}Some Things I've Built</div>
      <ul className='space-y-20'>
        {projectArray.map((cardProps, index) => {
          return <ProjectCard key={cardProps.title} cardProps={cardProps} index={index} />;
        })}
      </ul>
    </section>
  );
};

export default Projects;
