import React from 'react'

const GameEnd = ({winner}) => {
  
    return winner==='draw' ? <><br/><h4>game Draw</h4></>
    :<><br/>winner is : {winner }</>
  
}

export default GameEnd
