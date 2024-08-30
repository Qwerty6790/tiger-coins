
import React from 'react';
import './daily-booster-card.css';

interface DailyBoosterCardI {
  level: number;
  profit: number;
  price: number;
  onprogress: number;
}

const DailyBoosterCard= ({ onprogress}: DailyBoosterCardI) => {
  return (
    <>
    <div className='booster-card'>
      <img className='image-of-booster'
        src={`./images/daily_energy.png`}
        height={100}
        width={100} />
      <div className='main-section'>
      <div className='container'>
      <p className='available'>Доступно</p>
        <p className='progress-of-booster'>{onprogress} из 5</p>
      </div>
      <button className='button-of-booster'>
          <p className="confirm-button">Применить</p>
      </button>
      </div>
    </div>
    </>
  );
};

export default DailyBoosterCard;