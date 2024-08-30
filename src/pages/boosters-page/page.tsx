"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './boosters_page_style.css';
import DailyBoosterCard from '@/components/daily-booster-card/page';
import BoosterCard from '@/components/booster-card/page';
import InfoBar from '@/components/info-bar/page';
import BoostersMiningNavBar from '@/components/boosters-mining-navbar/page';

export default function BoostersPage () {
  return (
    <>
        <InfoBar balance={100} profit={90} profitByTap={9}/>
        <BoostersMiningNavBar/>
        <div className='main-text'>
          <p>Покупай улучшения и<br/>увеличивай свой доход</p>
        </div>
      <div className="cards">
      <p className='text-of-cards-container'>Бесплатные ежедневные <br/>усилители</p>
      <DailyBoosterCard level={0} profit={0} price={0} onprogress={5}/>
      <p  className='text-of-cards-container'>Усилители</p>
      <BoosterCard level={1} profit={500} price={200} title={'Запас энегрии'}/>
      <BoosterCard level={1} profit={500} price={200} title={'Запас энегрии'}/>
      <BoosterCard level={1} profit={500} price={200} title={'Запас энегрии'}/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </div>
      </>
  );
}