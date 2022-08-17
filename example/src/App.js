import logo from './logo.svg';
import './App.css';

function App() {
  let arr=[8,7,6,1,2,3,4,5]
  return (
    <div className="App">
     
    <h1>Heading 1</h1>
     <ul>
     {arr.map((ele, index)=>{
        return <li key={ele}>{ele}</li>
     })}
      </ul>
    </div>
  );
}

export default App;
