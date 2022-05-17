import React from 'react';
import $ from 'jquery';

const AnimatedHeader = ({ arrayOfStrings }) => {
  return (
    <h1 className='flex flex-col text-8xl font-Manrope'>
      {arrayOfStrings.map((currString, index) => {
        return (
          <div key={index} className={`flex -space-x-1`}>
            {currString.split('').map((char, index) => {
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
  );
};

$(window).on('load', function () {
  $('.char-animation').bind('webkitAnimationEnd mozAnimationEnd animationend', function () {
    $(this).removeClass('animate-jelloHorizontal');
  });

  $('.char-animation').hover(function () {
    $(this).addClass('animate-jelloHorizontal');
  });
});

export default AnimatedHeader;
