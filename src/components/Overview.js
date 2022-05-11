import React from 'react';
import { landing } from '../assets/';

const Overview = () => {
  return (
    <div id='overview' className='bg-secondary py-10 px-36'>
      <div className='flex items-center justify-between'>
        <div className='font-semibold text-3xl flex flex-col'>
          <div>Hi,</div>
          <div>I'm Eric,</div>
          <div>web developer</div>
        </div>
        <div className='space-y-8'>
          <div className='h-80'>
            <img src={landing} alt='' className='max-h-full' />
          </div>
        </div>
      </div>
      {/* <div>Contact me!</div> */}
    </div>
  );
};

export default Overview;
