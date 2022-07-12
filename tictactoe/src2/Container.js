import React from 'react'
import Cell from "./Cell"
import GameEnd from './GameEnd'
const Container = ({cellPressed, cellvalue, gameover, winner}) => {
 
    return gameover===true ? <GameEnd winner={winner}/> 
                        : <Cell cellPressed={cellPressed} cellvalue={cellvalue}/>

                    }

export default Container


