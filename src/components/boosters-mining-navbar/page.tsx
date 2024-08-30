
import React from 'react';
import './boosters-mining-navbar.css';

const BoostersMiningNavBar= () => {
  return (
    <>
    <div className="boosters-mining-navbar">
      <a href="/mining" className='mining-in-self-navbar'>
        Майнинг
      </a>
      <a href="/boosters" className='boosters-in-self-navbar'>
        Бустеры
      </a>
    </div>
    </>
  );
};

export default BoostersMiningNavBar;