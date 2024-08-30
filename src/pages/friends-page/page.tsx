'use client'; 
import "./friends_page_style.css"; 
import Friend from '@/components/friend/friend';
import { IFriendData } from "@/types/items.interface"; 
import React, { useState, useEffect } from 'react'; 
import { Toaster, toast } from "sonner"; 
 
export default function FriendsPage() { 
  const [friends, setFriends] = useState<IFriendData[]>([]); 
  const [isLoading, setIsLoading] = useState(true); 
  const [linkToCopy, setLinkToCopy] = useState<string>(`https://t.me/bot_name?start=1111111111`); 
 
  const handleCopyLink = () => { 
    navigator.clipboard.writeText(linkToCopy); 
    toast.success("Link copied to clipboard!"); 
  }; 
 
  return ( 
    <div>  
      {/* <img className='central-top-logo'  
          src='./images/жетон прозрачный.png'  
          alt='Монета'  
          height={95} 
          width={100} 
          />  */}
      <div className='main-message'> 
        <h1>Получай 50к <br/><span>за приглашение <br />своего друга</span></h1> 
      </div> 
      {/* <p className="list-message">от дохода друзей</p>  */}
      <img className='gift-icon'  
          src='./images/подарок.png'  
          alt='Монета'  
          height={186} 
          width={196} 
          />   
   <div className="invite-component"> 
             <p className="invite-friend-text">Пригласить друга</p> 
             <div className='coin-logo'> 
          <img   
          src='./images/жетон.png'  
          alt='Монета'  
          height={48} 
          width={48} 
          /> 
          </div> 
          <div className="yellow-box"> 
             +50 000
          </div> 
          <p className="description-friends">для тебя и твоего друга</p> 
         
          <button className="button-one"><p className="button-item">Пригласить друга</p> 
  <svg className="svg-frainds" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" style={{ fill: 'rgba(225, 225, 225, 1)' }}> 
    <path d="M4.5 8.552c0 1.995 1.505 3.5 3.5 3.5s3.5-1.505 3.5-3.5-1.505-3.5-3.5-3.5-3.5 1.505-3.5 3.5zM19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 19h10v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2z"></path> 
  </svg> 
</button> 
<button className="button-two"> 
  <svg className="svg-frainds-two" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(225, 225, 225, 1)' }}> 
    <path d="M14 8H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2z"></path> 
    <path d="M20 2H10a2 2 0 0 0-2 2v2h8a2 2 0 0 1 2 2v8h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path> 
  </svg> 
</button> 
          </div> 
         <div className="friends-section-retings"> 
          <h2 className="title-friends">Друзья</h2> 
          <p className="subtitle-friends">Приглашено друзей <span className="box-friends">5</span></p> 
         </div>
         <div className="cards">
         <Friend  name={"volod"}  profit={0} />
         <Friend  name={"vlad"}  profit={0} />
         <Friend  name={"vahag"}  profit={0} />
         <Friend  name={""}  profit={0} />
         <Friend  name={""}  profit={0} />
         <Friend  name={""}  profit={0} />
         </div>
   </div> 
  ); 
}