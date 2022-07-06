import React from 'react';
import './App.css';
import TicTacToeContainer from "./tictactoeContainer"
class App extends React.Component {
  
  cells=['','','','','','','','','']

  getIndex(e){
    console.log(e.target.id);
  }
  turn="X";
  render(){
  

    return (
    <div className="App">

      <h2>Tic Tac Toe</h2>
      <TicTacToeContainer cells={this.cells} getIndex={this.getIndex}/>
    </div>
  );
  }
}

export default App;
