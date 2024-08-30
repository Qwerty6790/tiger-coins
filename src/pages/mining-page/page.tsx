
'use client';
import MiningCard from "@/components/mainings-cards/page";
import "./mining_page_style.css";
import { useEffect, useState } from "react";
import InfoBar from "@/components/info-bar/page";
import BoostersMiningNavBar from "@/components/boosters-mining-navbar/page";

export default function MiningPage() {
  const [userId, setUserId] = useState<number | null>(1111111111);
  return (
    <>
      <InfoBar balance={100} profit={90} profitByTap={9}/>
      <BoostersMiningNavBar/>  
      <div className="cards">
        <MiningCard title={'Статуя Свободы'} level={1} profit={500} price={100}/>
        <MiningCard title={'Древний мир'} level={1} profit={500} price={100}/>
        <MiningCard title={'Музыка Вдохновит'} level={1} profit={500} price={100}/>
        <MiningCard title={'статуя'} level={1} profit={500} price={100}/>
        <MiningCard title={'Мир Труд Май'} level={1} profit={500} price={100}/>
        <MiningCard title={'Солнцепёк'} level={1} profit={500} price={100}/>
        <MiningCard title={'Заведение,Застолье'} level={1} profit={500} price={100}/>
        <MiningCard title={'Цари как Боги'} level={1} profit={500} price={100}/>
        <MiningCard title={'О Дивный мир'} level={1} profit={500} price={100}/>
        <MiningCard title={'Китайская Стена'} level={1} profit={500} price={100}/>
        <MiningCard title={'Статуя Свободы'} level={1} profit={500} price={100}/>
        <MiningCard title={'Древний мир'} level={1} profit={500} price={100}/>
        <MiningCard title={'Семпл'} level={1} profit={500} price={100}/>
        <MiningCard title={'статуя'} level={1} profit={500} price={100}/>
        <MiningCard title={'Мир Труд Май'} level={1} profit={500} price={100}/>
        <MiningCard title={'Солнцепёк'} level={1} profit={500} price={100}/>
        <MiningCard title={'Заведение,Застолье'} level={1} profit={500} price={100}/>
        <MiningCard title={'Цари как Боги'} level={1} profit={500} price={100}/>
        <MiningCard title={'О Дивный мир'} level={1} profit={500} price={100}/>
        <MiningCard title={'Китайская Стена'} level={1} profit={500} price={100}/>
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

