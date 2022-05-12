import React, { useMemo } from 'react';
import { landing } from '../assets/';
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
    <section id='overview' className='relative py-10 pl-10 pr-24 h-screen items-center flex bg-background justify-between text-white'>
      <div className='font-semibold flex flex-col space-y-8'>
        <h1 className='flex flex-col text-8xl headerText'>
          {myString.map(([className, currString]) => {
            return (
              <div className={`flex fadein fadein-${className}`}>
                {currString.split('').map((char, index) => {
                  console.log(char);
                  if (char === ' ') {
                    return <div key={index}>&nbsp;</div>;
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
        <div className='flex'>
          <div>
            <p className='typed-out '>React Developer</p>
          </div>
        </div>
        <div className='flex'>
          <div className='border border-highlight py-2 px-8 fourth hover:text-black fadein fadein-contactMe'>
            <button className=''>Contact me!</button>
          </div>
        </div>
      </div>
      <div className='space-y-8 '>
        <div className='h-96 '>
          <img src={landing} alt='' className='max-h-full fadein fadein-picture rounded-full' />
        </div>
      </div>
      <div className='flex absolute bottom-0 right-0 scroll-down flex flex-col items-center space-y-2'>
        <span>scroll down</span>
        <svg className='w-2' aria-hidden='true' focusable='false' data-icon='arrow-down' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
          <path
            fill='currentColor'
            d='M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z'
            class=''
          ></path>
        </svg>
      </div>
      <div className='flex absolute bottom-0 left-0 scroll-down flex flex-col items-center space-y-2'>
        <span>scroll down</span>
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
    $(this).removeClass('jello-horizontal');
  });

  $('.char-animation').hover(function () {
    $(this).addClass('jello-horizontal');
  });
});
export default Overview;
