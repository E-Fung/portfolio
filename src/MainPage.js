import React from 'react';
import { Overview, Projects, About, Contact } from './components';

const MainPage = () => {
  return (
    <div className='grow'>
      <Overview />
      {/* <About /> */}
      <Projects />
      {/* <Contact /> */}
    </div>
  );
};

export default MainPage;
