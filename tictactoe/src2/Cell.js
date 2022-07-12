import React from 'react'
import "./cell.css"
const Cell = ({cellPressed, cellvalue}) => {
  
  return (
    <div>
      <ul className='tictactoeContainer'>
        {cellvalue.map((value, index)=>{
          return <li className='row1 cell' key={index} id={index} onClick={cellPressed}>{value}</li>
        })}
      </ul>
    </div>
  )
}

export default Cell

