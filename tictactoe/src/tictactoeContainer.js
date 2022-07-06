import React from "react";
import "./tictactoe.css"
import Cell from "./Cells"
class TicTacToeContainer extends React.Component{


    render(){
        return (
            <Cell cells={this.props.cells} getIndex={this.props.getIndex}/>
        )
    }
}

export default TicTacToeContainer;