import React, { useMemo } from 'react';
import { landing, me } from '../assets/';
import './Overview.css';
import $ from 'jquery';

const Overview = () => {
  const myString = useMemo(() => {
    return [
      ['stringHi', 'Hi,'],
      ['stringName', "I'm Eric,"],
      ['stringTitle', 'web developer'],
    ];
  }, []);
  return (
    <section id='overview' className='relative py-10 pl-20 pr-32 h-screen items-center flex bg-background justify-between text-white select-none'>
      <div className='absolute top-0 left-0 py-10 pl-20'>
        <p className='text-gray-500 text-md font-LBA tracking-widest relative -left-6 slide-in-top slide-in-top-html'>{`<html>`}</p>
        <p className='text-gray-500 text-md font-LBA tracking-widest relative -left-4 slide-in-top slide-in-top-body'>{`<body>`}</p>
      </div>
      <div className='font-semibold flex flex-col'>
        <p className='text-gray-500 text-md font-LBA tracking-widest relative -left-2 slide-in-top slide-in-top-h1'>{`<h1>`}</p>
        <h1 after='hi' className='flex flex-col text-8xl font-Manrope animate-fadein animation-delay-2000'>
          {myString.map(([className, currString]) => {
            return (
              <div className={`flex -space-x-1`}>
                {currString.split('').map((char, index) => {
                  console.log(char);
                  if (char === ' ') {
                    return <div key={index}>&nbsp;</div>;
                  }
                  if (char === "'") {
                    return <div key={index}>&#8217;</div>;
                  }
                  return (
                    <div key={index} className='char-animation hover:text-highlight'>
                      {char}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </h1>
        <p className='text-gray-500 text-md font-LBA tracking-widest relative -left-2 slide-in-top slide-in-top-h1'>{`<h1>`}</p>
        <div className='flex mt-4'>
          <div>
            <p className='text-gray-500 text-md font-LBA tracking-widest relative -left-2 slide-in-top slide-in-top-p'>{`<p>`}</p>
            <p className='typed-out text-gray-400 text-lg tracking-widest font-OpenSans font-normal'>Front-End Developer / Mechatronics Graduate</p>
            <p className='text-gray-500 text-md font-LBA tracking-widest relative -left-2 slide-in-top slide-in-top-p'>{`</p>`}</p>
          </div>
        </div>
        <div className='flex mt-8'>
          <button className='border border-highlight py-3 px-14 fourth hover:text-black fade-in-bottom'>
            <div className='tracking-widest font-OpenSans'>Contact me!</div>
          </button>
        </div>
      </div>
      <div className='h-128'>
        <img src={landing} alt='' className='max-h-full fadein fadein-picture rounded-full' />
        {/* <div className='absolute'>
          <img src={me} alt='' className='fadein fadein-me' />
        </div> */}
      </div>
      <div className='flex absolute bottom-0 right-0 scroll-down flex flex-col items-center space-y-2 p-2'>
        <span className='animate-shakeVertical py-2'>scroll down</span>
        <svg className='w-2' aria-hidden='true' focusable='false' data-icon='arrow-down' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
          <path
            fill='currentColor'
            d='M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z'
            class=''
          ></path>
        </svg>
      </div>
      <div className='flex absolute bottom-0 left-0 scroll-down flex flex-col items-center space-y-2 p-2'>
        <span className='animate-shakeVertical py-2'>scroll down</span>
        <svg className='w-2' aria-hidden='true' focusable='false' data-icon='arrow-down' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
          <path
            fill='currentColor'
            d='M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z'
            class=''
          ></path>
        </svg>
      </div>
    </section>
  );
};

$(window).on('load', function () {
  $('.char-animation').bind('webkitAnimationEnd mozAnimationEnd animationend', function () {
    $(this).removeClass('jelloHorizontal');
  });

  $('.char-animation').hover(function () {
    $(this).addClass('jelloHorizontal');
  });
});
export default Overview;
