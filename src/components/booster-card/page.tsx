
import React from 'react';
import './booster-card.css';
import coin from "../../../public/images/жетон.png"

interface BoosterCardI {
  title: string;
  level: number;
  profit: number;
  price: number;
}

const BoosterCard= ({ level, profit, price, title}: BoosterCardI) => {
  return (
    <>
    <div className='booster-card'>
      <img className='image-of-booster'
        src={`./images/red_energy.png`}
        height={100}
        width={100} />
      <div className='main-section'>
      <div className='container'>
        <p className='title-of-booster'>{title}</p>
      <div className="info-in-line">
        <p className='level'>{level} ур.</p>
        <p className='profit'>+{profit}</p>
        <p className='text-energy-reserve'>запас энергии</p>
      </div>
      </div>
      <button className='button-of-booster'>
          <img className='coin' 
          src={`./images/жетон.png`}
          height={30}
          width={30}
          />
          <p className="confirm-button">{price}</p>
      </button>
      </div>
    </div>
    </>
  );
};

export default BoosterCard;