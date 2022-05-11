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
    <div id='overview' className=' py-10 px-10 h-screen items-center flex justify-between bg-background text-white'>
      <div className='font-semibold flex flex-col space-y-8'>
        <h1 className='flex flex-col text-6xl'>
          {myString.map(([className, currString]) => {
            return (
              <div className={`flex fadein-${className}`}>
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
          <div className='border border-highlight py-2 px-8 fourth hover:text-black'>
            <button className=''>Contact me!</button>
          </div>
        </div>
      </div>
      <div className='space-y-8 '>
        <div className='h-96'>
          <img src={landing} alt='' className='max-h-full fadein' />
        </div>
      </div>
      {/* <div>Contact me!</div> */}
    </div>
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
