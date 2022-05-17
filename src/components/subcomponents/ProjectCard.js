import React from 'react';
import $ from 'jquery';

const ZZZ = () => {
  return (
    <div className='sleep absolute w-full h-full'>
      <div className='absolute font-ConcertOne right-3 pointer-events-none animate-zzz'>Z</div>
      <div className='absolute font-ConcertOne animation-delay-500 -right-6 pointer-events-none animate-zzz'>Z</div>
      <div className='absolute font-ConcertOne animation-delay-1000 right-0 pointer-events-none animate-zzz'>Z</div>
    </div>
  );
};

const ProjectCard = ({ imgSrc, title, link }) => {
  return (
    <div className='relative group shadow-lg bg-project rounded-lg w-1/2 flex hover:filter-none p-2 items-center flex-col items-center justify-between'>
      <a
        style={{ transition: 'all 0.5s ease' }}
        className='grayscale group-hover:filter-none w-full mix-blend-normal flex justify-center'
        href={link}
        target='_blank'
        rel='noreferrer noopener'
      >
        <img src={imgSrc} alt='' className='rounded-xl' />
      </a>
      <div style={{ transition: 'all 0.5s ease' }} className='text-3xl font-Manrope text-gray-400 group-hover:text-white'>
        {title}
      </div>
      <ZZZ />
    </div>
  );
};

$(window).on('load', function () {
  $('.sleep').mouseleave(function () {
    $(this).children().addClass('animate-zzz');
    $(this).children().removeClass('hidden');
  });

  $('.sleep').mouseenter(function () {
    // $(this).children().removeClass('animate-zzz');
    $(this)
      .children()
      .on('animationiteration webkitAnimationIteration', function () {
        $(this).removeClass('animate-zzz');
        $(this).addClass('hidden');
        $(this).off();
      });
  });
});

export default ProjectCard;
