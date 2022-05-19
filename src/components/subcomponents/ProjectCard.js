import React from 'react';
import $ from 'jquery';

// group shadow-lg bg-project rounded-lg min-w-full flex hover:filter-none p-2 items-center flex-col items-center justify-between
const ProjectCard = ({ cardProps, index }) => {
  const { imgSrc, title, link, githubLink, summary, techStack } = cardProps;
  const even = index % 2;
  const ZZZ = () => {
    return (
      <div className='absolute w-full h-full top-0 right-0'>
        <div className={`sleep-Z absolute font-ConcertOne ${even ? 'right-3' : 'left-3'} pointer-events-none animate-zzz`}>Z</div>
        <div className={`sleep-Z absolute font-ConcertOne animation-delay-500 ${even ? '-right-6' : '-left-6'} pointer-events-none animate-zzz`}>Z</div>
        <div className={`sleep-Z absolute font-ConcertOne animation-delay-1000 ${even ? 'right-0' : 'left-0'} pointer-events-none animate-zzz`}>Z</div>
      </div>
    );
  };
  return (
    <li className='sleep grid group grid-cols-12 gap-4'>
      <a
        href={link}
        target='_blank'
        rel='noreferrer noopener'
        className={`flex items-center relative grayscale group-hover:filter-none ${
          even ? 'row-start-1 col-start-6' : 'row-start-1 col-start-1'
        } col-span-7 transition`}
      >
        <img src={imgSrc} alt='' className='rounded-xl' />
        {/* <ZZZ /> */}
      </a>
      <div className={`flex flex-col justify-center space-y-2 row-start-1 ${even ? 'col-start-1 text-left' : 'col-start-7 text-right'} col-span-6 `}>
        <div className='font-OpenSans text-highlight text-sm'>Featured Project</div>
        <div className='font-Manrope text-3xl'>{title}</div>
        <div className='font-Manrope text-gray-400 p-4 border-highlight border-x-2 rounded-lg bg-gradient-to-l from-black via-neutral-900 bg-black z-50 hover:text-gray-300 transition'>
          {summary}
        </div>
        <div className={`font-OpenSans text-gray-400 flex space-x-3 ${even ? 'justify-start' : 'justify-end'}`}>
          {techStack.split(' ').map((tech) => (
            <div className='hover:text-white transition'>{tech}</div>
          ))}
        </div>
        <div className={`flex pt-2 space-x-4 ${even ? 'justify-begin' : 'justify-end'}`}>
          <a href={githubLink} target='_blank' rel='noreferrer noopener' className='fill-gray-300 stroke-gray-300 hover:fill-highlight hover:stroke-highlight'>
            <svg width='20px' height='20px' viewBox='0 0 24 24' fill='none' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
              <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22' />
            </svg>
          </a>
          <a href={link} target='_blank' rel='noreferrer noopener' className='fill-gray-300 stroke-gray-300 hover:fill-highlight hover:stroke-highlight'>
            <svg width='20px' height='20px' version='1.1' id='Capa_1' viewBox='0 0 194.818 194.818'>
              <path
                d='M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728
		c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04
		C194.818,6.19,190.789,2.161,185.818,2.161z'
              />
              <path
                d='M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140
		c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z'
              />
            </svg>
          </a>
        </div>
      </div>
    </li>
  );
};

$(window).on('load', function () {
  $('.sleep').mouseout(function () {
    $(this).children().find('.sleep-Z').off().removeClass('group-hover:hidden').addClass('animate-zzz');
  });

  $('.sleep').mouseenter(function () {
    $(this)
      .children()
      .find('.sleep-Z')
      .on('animationiteration webkitAnimationIteration', function () {
        $(this).removeClass('animate-zzz');
        $(this).addClass('group-hover:hidden');
      });
  });
});

export default ProjectCard;
