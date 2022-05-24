import React from 'react';
import Quizdatas from './Quizdatas';
import Quizplay from './Quizplay'
export default function Game()
{
    const arrData=Quizdatas
    const arrdata=arrData.map((d)=>{
        return (<Quizplay qdata={d} />)

    })
    return(
        <div>
        
            <h3>{arrdata}</h3>
           
        </div>
    )
}