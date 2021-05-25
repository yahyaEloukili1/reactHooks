import './App.css';
import { useState } from "react";

function App() {
  const [count,setCount] = useState(0)
  const [theme,setTheme] = useState('blue')
 
  function addAmount(amount){
    changeTheme()
      setCount(previousCount=> {
        return previousCount + amount
      })
  }
  function changeTheme(){
    setTheme(previousTheme=> {
      if(previousTheme === 'red'){
        return 'blue'
      } 
      return 'red'
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
