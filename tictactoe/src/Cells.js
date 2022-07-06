import React from 'react'
import "./tictactoe.css"
class Cell extends React.Component{
   
   

    render(){
        return (
            <ul className="Container">
          
            {this.props.cells.map((ele, index)=>{
             return <li id={index} key={index} className="cell" onClick={this.props.getIndex}>{ele}</li>
            })}
            </ul>
        )
    }
}
export default Cell
