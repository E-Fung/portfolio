import React, { useMemo } from 'react';
import { profile, github, linkedin } from '../assets';

const githubURL = 'https://github.com/E-Fung';
const linkedinURL = 'https://www.linkedin.com/in/eric-fung-44377115a/';

const Sidebar = () => {
  const linkItems = useMemo(() => {
    return [
      [
        'Home',
        <svg width='24px' height='24px' version='1.1' id='Layer_1' viewBox='0 0 489.075 489.075'>
          <path
            d='M482.453,220.775l-115.5-111.2v-88.5c0-11.4-9.4-20.8-20.8-20.8s-20.8,9.4-20.8,20.8v48.5l-66.6-64.1
c-7.3-7.3-19.8-7.3-28.1,0l-223.6,215.3c-8.3,8.3-9.4,20.8-1,29.1c8.4,8.3,20.8,9.4,29.1,1l3.1-3v220.4c0,11.4,9.4,20.8,20.8,20.8
h372.4c11.4,0,19.8-9.4,20.8-19.8v-219.3l2.1,2c15.2,10.5,26,3.1,29.1-2.1C490.753,241.575,490.753,228.075,482.453,220.775z
M281.653,448.575h-72.8v-111.3h72.8V448.575z M410.653,448.575h-88.4v-132.1c0-11.4-9.4-20.8-20.8-20.8h-113.4
c-11.4,0-20.8,9.4-20.8,20.8v132.1h-87.4v-203.9h330.8V448.575L410.653,448.575z M83.853,204.175l161.4-155l159.8,155H83.853z'
          />
        </svg>,
        'overview',
      ],
      // [
      //   'Resume',
      //   <svg width='24px' height='24px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      //     <path
      //       d='M4 21.4V2.6C4 2.26863 4.26863 2 4.6 2H16.2515C16.4106 2 16.5632 2.06321 16.6757 2.17574L19.8243 5.32426C19.9368 5.43679 20 5.5894 20 5.74853V21.4C20 21.7314 19.7314 22 19.4 22H4.6C4.26863 22 4 21.7314 4 21.4Z'
      //       strokeWidth='1.5'
      //       strokeLinecap='round'
      //       strokeLinejoin='round'
      //     />
      //     <path
      //       d='M16 5.4V2.35355C16 2.15829 16.1583 2 16.3536 2C16.4473 2 16.5372 2.03725 16.6036 2.10355L19.8964 5.39645C19.9628 5.46275 20 5.55268 20 5.64645C20 5.84171 19.8417 6 19.6464 6H16.6C16.2686 6 16 5.73137 16 5.4Z'
      //       strokeWidth='1.5'
      //       strokeLinecap='round'
      //       strokeLinejoin='round'
      //     />
      //     <path d='M8 10L16 10' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      //     <path d='M8 18L16 18' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      //     <path d='M8 14L12 14' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
      //   </svg>,
      // ],
      [
        'Projects',
        <svg version='1.1' id='Layer_1' width='24px' height='24px' viewBox='0 0 496 496'>
          <path
            d='M456,64h-56v64H0v368h456c22.056,0,40-17.944,40-40V104C496,81.944,478.056,64,456,64z M456,480H16V144h384v288h56
  c13.232,0,24,10.768,24,24S469.232,480,456,480z M480,424.016c-6.688-5.032-15-8.016-24-8.016h-40V80h40
  c13.232,0,24,10.768,24,24V424.016z'
          />
          <path
            d='M328,288h-64v-32h96v-48H240v-48h-64v48H56v48h96v32H88v-16H40v48h16v96H40v48h48v-16h64v16h112v-16h64v16h48v-48h-16
  v-96h16v-48h-48V288z M328,224h16v16h-16V224z M296,224h16v16h-16V224z M264,224h16v16h-16V224z M56,288h16v16H56V288z M72,448
  H56v-16h16V448z M152,432H88v-16H72v-40h64v-16H72v-40h16v-16h64V432z M192,176h32v32h-32V176z M88,240H72v-16h16V240z M120,240
  h-16v-16h16V240z M152,240h-16v-16h16V240z M248,240v8v200h-32V336h-16v112h-32V248v-8v-16h8h64h8V240z M360,448h-16v-16h16V448z
   M344,288h16v16h-16V288z M344,360h-64v16h64v40h-16v16h-64V304h64v16h16V360z'
          />
          <path
            d='M112,80c13.232,0,24-10.768,24-24c0-8.264-4.2-15.568-10.576-19.888C132.464,23.872,145.544,16,160,16
  s27.536,7.872,34.576,20.112C188.2,40.432,184,47.736,184,56c0,12.376,9.448,22.472,21.496,23.744
  C214.648,99.208,234.192,112,256,112c21.808,0,41.352-12.792,50.504-32.256C318.552,78.472,328,68.376,328,56
  c0-13.232-10.768-24-24-24s-24,10.768-24,24c0,8.264,4.2,15.568,10.576,19.888C283.536,88.128,270.456,96,256,96
  s-27.536-7.872-34.576-20.112C227.8,71.568,232,64.264,232,56c0-12.376-9.448-22.472-21.496-23.744
  C201.352,12.792,181.808,0,160,0s-41.352,12.792-50.504,32.256C97.448,33.528,88,43.624,88,56C88,69.232,98.768,80,112,80z
   M304,48c4.416,0,8,3.584,8,8s-3.584,8-8,8c-4.416,0-8-3.584-8-8S299.584,48,304,48z M208,48c4.416,0,8,3.584,8,8s-3.584,8-8,8
  s-8-3.584-8-8S203.584,48,208,48z M112,48c4.416,0,8,3.584,8,8s-3.584,8-8,8s-8-3.584-8-8S107.584,48,112,48z'
          />
        </svg>,
        'projects',
      ],
      //       [
      //         'Contact',
      //         <svg width='24px' height='24px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 75.294 75.294'>
      //           <path
      //             d='M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9
      // c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089
      // H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065
      // c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016
      // c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102
      // c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069
      // c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z'
      //           />
      //         </svg>,
      //       ],
    ];
  }, []);
  const mediaItems = useMemo(() => {
    return [
      [
        'https://github.com/E-Fung',
        <svg fill='#ffffff' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='100%' height='100%'>
          <path d='M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z' />
        </svg>,
      ],
      [
        'https://www.linkedin.com/in/eric-fung-44377115a/',
        <svg fill='#ffffff' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30' width='100%' height='100%'>
          <path d='M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z' />
        </svg>,
      ],
    ];
  }, []);
  return (
    <div className='sticky top-0 bg-sidebar text-white p-4 h-screen flex flex-col w-1/7 items-center justify-between'>
      <div className='flex flex-col space-y-3'>
        <div className='h-auto w-28 bg-primaryDeep rounded-full p-1'>
          <img src={profile} alt='' className='max-h-full rounded-full' />
        </div>
        <div className='text-center font-bold font-Manrope text-xl'>Eric Fung</div>
      </div>
      <div className='flex flex-col space-y-5'>
        {linkItems.map(([link, svg, elementId]) => {
          return (
            <a key={link} href={`#${elementId}`}>
              <div className='flex space-x-2 fill-gray-400 font-OpenSans stroke-gray-400 hover:fill-highlight hover:stroke-highlight text-gray-400 hover:text-white'>
                {/* <div>{svg}</div> */}
                <div>{link}</div>
              </div>
            </a>
          );
        })}
      </div>
      <div className='text-xs space-y-4'>
        <div className='flex justify-center space-x-2'>
          {mediaItems.map(([link, svg]) => {
            return (
              <a key={link} href={link} target='_blank' rel='noreferrer noopener'>
                <div className='bg-primaryDeep rounded-full p-1 hover:bg-primary w-10'>{svg}</div>
              </a>
            );
          })}
        </div>
        <div className='flex space-x-1'>
          <div>Email:</div>
          <a className='text-blue-400' href='mailto: ehhfung@gmail.com'>
            ehhfung@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
