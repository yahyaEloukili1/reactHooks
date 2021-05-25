import './App.css';
import { useState } from "react";

function App() {
  const [count,setCount] = useState(0)
  function addAmount(amount){
      setCount(previousCount=>previousCount + amount)
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
