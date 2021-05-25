import './App.css';
import { useState } from "react";

function App() {
  const [count,setCount] = useState(countInitial())
  function addAmount(amount){
      setCount(previousCount=>previousCount + amount)
  }
  function countInitial(){
      console.log('object')
      return 0
  }
  return (
    <div className="App">
        <button onClick={()=>{addAmount(-1)}}>-</button>
        <span>{count}</span>
        <button  onClick={()=>{addAmount(+1)}}>+</button>
    </div>
  );
}

export default App;
