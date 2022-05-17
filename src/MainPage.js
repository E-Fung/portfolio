import React from 'react';
import { Overview, Projects } from './components';

const MainPage = () => {
  return (
    <div className='grow'>
      <Overview />
      <Projects />
    </div>
  );
};

export default MainPage;
