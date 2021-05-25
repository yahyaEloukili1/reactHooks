import './App.css';
import { useState } from "react";

function App() {
  const [state,setState] = useState({count : 0,theme: 'blue'})
  const {count,theme} = state
  function addAmount(amount){
      setState(previousState=> {
        return {...state, count : previousState.count + amount}
      })
  }
 
  return (
    <div className="App">
        <button onClick={()=>{addAmount(-1)}}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button  onClick={()=>{addAmount(+1)}}>+</button>
    </div>
  );
}

export default App;
