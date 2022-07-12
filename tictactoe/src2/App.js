

import React from 'react';
import Container from './Container';
// function printfn(e){
//   console.log(e.target.value)
// }
class App extends React.Component{

  constructor(){
    super();
    this.state={cell:['','','','','','','','',''],count:0, gameOver:false, winner:''}
    this.currentTurn='X'
    // this.count=0
  }
  checkWinner(arr, index){
   index=Number(index);
   //row  
   let start=index-index%3;
    if(arr[start]===this.currentTurn &&  arr[start]===arr[start+1] && arr[start]===arr[start+2])
    return true;
    // col

    start=index-(3*Math.floor(index/3));
    if(arr[start]===this.currentTurn &&  arr[start]===arr[start+3] && arr[start]===arr[start+6])
    return true;

    if(index%2===0){
      if(arr[0]===this.currentTurn &&  arr[0]===arr[4] && arr[0]===arr[8])
      return true;
      if(arr[2]===this.currentTurn &&  arr[2]===arr[4] && arr[2]===arr[6])
      return true;
    }

return false;

  }
    // checkWinner(arr){
    //   console.log(arr)
    //   if(arr[0]===arr[3] && arr[3] === arr[6] && arr[6]===this.currentTurn)return true
    //   if(arr[1]===arr[4] && arr[4] === arr[7] && arr[7]===this.currentTurn)return true
    //   if(arr[2]===arr[5] && arr[5] === arr[8] && arr[8]===this.currentTurn)return true
    //   if(arr[0]===arr[1] && arr[1] === arr[2] && arr[2]===this.currentTurn)return true
    //   if(arr[3]===arr[4] && arr[4] === arr[5] && arr[5]===this.currentTurn)return true
    //   if(arr[6]===arr[7] && arr[7] === arr[8] && arr[8]===this.currentTurn)return true
    //   if(arr[0]===arr[4] && arr[4] === arr[8] && arr[8]===this.currentTurn)return true
    //   if(arr[2]===arr[4] && arr[4] === arr[6] && arr[6]===this.currentTurn)return true

    //   return false;
    // }

  cellPressed(e){
      
      let newArr=this.state.cell
      let index=e.target.id;
      
      if(newArr[index]==='')
      newArr[index]=this.currentTurn;
      else{
        return;
      }
      
      if(this.state.count>=4){
        
       if( this.checkWinner(newArr,index)){
          console.log("we got winner")
        this.setState({cell:newArr,count:this.state.count+1, gameOver:true, winner:this.currentTurn})
        return;
       }
       if(this.state.count===8){

        this.setState({cell:newArr,count:this.state.count+1, gameOver:true, winner:"draw"})
        return;
       }
       
      }
      
        
        this.currentTurn=this.currentTurn==='X'?'Y':'X';
        this.setState({...this.state, cell:newArr,count:this.state.count+1})
      
  }
  render(){
    return (
     <div>
      Tic Tac Toe
      <Container gameover={this.state.gameOver} 
            winner={this.state.winner} 
            cellPressed={this.cellPressed.bind(this)}  
            cellvalue={this.state.cell}/>
     </div>
    )
  }
}
export default App;
