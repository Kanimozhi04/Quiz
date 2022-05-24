import {React,useState} from 'react'
let arrayOptions=[];
let arrayCrtOpt=[];
let count=0;
let arrcolor=[]; //arr1
let rescolor=[]; // arr2
export default function Quizplay(props)
{
    const [opt,setOpt]=useState(false)
    const [sub,setSub]=useState(false)
    const [styles,setStyles]=useState([{backgroundColor:""},{backgroundColor:""},{backgroundColor:""},{backgroundColor:""}]) // state
    const [cnt,setCnt]=useState()
    const [empt,setEmpt]=useState(false);
  function ResultHandleClick()
   {

       for(let i=0;i<arrayOptions.length;i++)
       {
           if(arrayOptions[i]===arrayCrtOpt[i])
           {
               count++;
           }

       }


       setSub(true)
       setCnt(count)

       
   }
   

    function handleOptionClick(op,co,index,option)
    {
        setEmpt(s => !s)
        arrcolor=styles; //1
        console.log("arrcolor")
        console.log(arrcolor)
       
        
        arrayOptions.push(op);
        arrayCrtOpt.push(co)
        arrcolor[index]={backgroundColor:"blue"} //2
        rescolor = arrcolor//3
       

        for(let i=0;i<4;i++)
        {
        if(option[i].isCorrect){
            rescolor[i]={backgroundColor: "green"}//4
        }
    
        }
        
       
       

       setStyles(arrcolor)//5
       

       

        if(option[0].answerText==='1')
        {
            setOpt(ps => !ps)
        }

    
    }
  
    return( 
    <div id="form">
        <h1>{props.qdata.question}</h1>
        <div id="btn">
        <button onClick={()=>handleOptionClick(props.qdata.options[0].answerText,props.qdata.Correctans,0,props.qdata.options)} style={styles[0]}>{props.qdata.options[0].answerText}</button>
        <button onClick={() =>handleOptionClick(props.qdata.options[1].answerText,props.qdata.Correctans,1,props.qdata.options)} style={styles[1]}>{props.qdata.options[1].answerText}</button>
        <button onClick={()=>handleOptionClick(props.qdata.options[2].answerText,props.qdata.Correctans,2,props.qdata.options)} style={styles[2]}>{props.qdata.options[2].answerText}</button>
        <button onClick={()=>handleOptionClick (props.qdata.options[3].answerText,props.qdata.Correctans,3,props.qdata.options)} style={styles[3]}>{props.qdata.options[3].answerText}</button>
        <br />
     
</div>
{opt && <div> 
      <button onClick={ResultHandleClick} className="submitBtn">Submit</button></div>}
      {sub && <h1>Your score is:{cnt}</h1>}
    </div>

    )
}