'use client'; 
import './friend.css'; 
 
interface FriendProps { 
  name: string; 
  profit: number
} 
 
export default function Friend({ profit, name}: FriendProps) { 
  return ( 
    <div className="friend"> 
    <div className='users'>
      <div className='components-users'>
      </div>
      <div className='components-down-users'>
        </div>
        </div> 
     <p className='users-name'>{name}</p> 
    <div className='users-give' >
      <p className='give'>+50k</p>
    </div>
    </div> 
  ); 
}