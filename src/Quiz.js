import {React,useState} from 'react';
import Game from './Game'
import './App.css';
export default function Quiz()

{ 
   const [click,setClick]=useState(false); 
   function handleClick()
   {
      setClick(true)
   }
   return(
       <div className="container">
           <h1>Welcome to quiz Game</h1>
           <button className="start" onClick={handleClick}>Start quiz</button>
           {click && <div className='game'>
           <Game />
           </div>}
        </div>
   );
}
