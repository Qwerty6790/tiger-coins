'use client'; 
import './task.css'; 
 
interface RefProps { 
  name: string; 
  index: number
} 
 
export default function RefCard({ index, name}: RefProps) { 
  return ( 
    <div className="rating-card"> 
    <div className='users-rating'>
      <div className='components-users-ratings'>
      </div>
      <div className='components-down-users-ratings'>
        </div>
        </div> 
     <p className='users-name'>{name}</p> 
    <p className='users-index'>
    <span className='span-index-rating'>{index}</span>
    </p>
    </div> 
  ); 
}