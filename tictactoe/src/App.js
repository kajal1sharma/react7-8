import React from 'react';
import './App.css';
import TicTacToeContainer from "./tictactoeContainer"
class App extends React.Component {
  

  constructor(props){
    super(props);

    this.state={
      cells:['','','','','','','','','']
    }

    this.turn="X";
    this.count=0;
  }
  //turn="X" 
  
  
 checkWinner(){
  return true;
 }
  getIndex(e){
    let index=e.target.id;
    
    if(this.state.cells[index]!=='')
    return;
    this.state.cells[index]=this.turn;
    this.count++;
    console.log(this.state)
    if(this.count>=5){
      if( this.checkWinner()){
        return ;
      }
    }
   
    
    this.turn = this.turn==='X' ? 'O' :'X';
    this.setState({cells:this.state.cells})


    // console.log(e.target.id);
    //console.log(this);
    
    // let arr=this.state.cells
    // arr[e.target.id]=this.turn;
    
    // this.setState({});

    
    // this.setState({ cells:arr});

    // this.setState({ ...this.state})
  }
  
  render(){
  

    return (
    <div className="App">
      <h2>Tic Tac Toe</h2>
      <TicTacToeContainer cells={this.state.cells} 
      getIndex={this.getIndex.bind(this)}/>
    </div>
  );
  }
}

export default App;
