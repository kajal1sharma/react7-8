import React, { useEffect, useState } from 'react'

const SlotGame = ({chances, scores}) => {
  const [game, setGame]= useState({chances:chances, scores:scores, vouchers:[]})
  const [number, setNumber]=useState([randomNumberGen(),randomNumberGen(), randomNumberGen()])
  function randomNumberGen(){
      let num= Math.trunc(Math.random()*9);
      if(num===0){
       return randomNumberGen();
      }
      else{
        return num;
      }
  }

  useEffect(()=>{
  
    if(number[0]===number[1]&& number[1]===number[2]){
      setGame((prevState)=>{return {...prevState, scores:prevState.scores+500, chances:prevState.chances}});
    }
    else{
      setGame({...game, scores:game.scores+5, chances:game.chances-1})
    }

  },[number])

  function clickHandler(){
      setNumber([randomNumberGen(),randomNumberGen(), randomNumberGen()])
   
  }
  
  return (
    <div >

      <h1 style={{color:"white", textAlign:"center", padding:"100px"}}>Welcome to the Slot Game</h1>
      <div>
        <p>Current Scores : <span>{game.scores}</span></p>
        <p>remaining chances : <span>{game.chances}</span></p> 
      </div>
      <div style={{display:"flex", flexDirection:"column", margin:"100px 0px"}}>
      <div style={{alignSelf:'center'}}>
        <span style={{border:"1px solid black", padding:'20px', fontSize:'30px', margin:"10px"}}>{number[0]}</span>
        <span style={{border:"1px solid black", padding:'20px', fontSize:'30px', margin:"10px"}}>{number[1]}</span>
        <span style={{border:"1px solid black", padding:'20px', fontSize:'30px', margin:"10px"}}>{number[2]}</span>
      </div>
           <button onClick={clickHandler} style={{width:'100px', alignSelf:'center', margin:"50px"}}>Roll it</button>
      </div>
    </div>
  )
}

export default SlotGame
