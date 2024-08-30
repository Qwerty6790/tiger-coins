import React from 'react'
import "./ratings.css";
import Ratings from '@/components/ratings/page';
import RatingsCard from '@/components/ratings/page';


const RatingsPage = () => {
  return (
    <div>
       <img className='central-top-logo-img' 
          src='./images/жетон прозрачный.png' 
          alt='Монета' 
          height={95}
          width={100}
          />
          <img className='ratings-image' 
          src='./images/жетон.png' 
          alt='Монета' 
          height={405}
          width={410}
          />
          <h2 className='ratings-title'>Рейтинг Друзей</h2>
          <div className='line-between-cards-and-text'>
          </div>
          <div className='cards'>
        <RatingsCard name={'volofya'} index={1} />
        <RatingsCard name={'vahagn'} index={2} />
        <RatingsCard name={'anton'} index={3} />
        <RatingsCard name={'vlad'} index={4} />
        <RatingsCard name={''} index={5} />
        <RatingsCard name={''} index={6} />
        <RatingsCard name={''} index={7} />
        <RatingsCard name={''} index={8} />
        <RatingsCard name={''} index={5} />
        <RatingsCard name={''} index={6} />
        <RatingsCard name={''} index={7} />
        <RatingsCard name={''} index={8} />
        </div>
    </div>
  )
}

export default RatingsPage
