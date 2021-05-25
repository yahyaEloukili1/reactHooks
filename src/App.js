import './App.css';
import { useState,useEffect } from "react";

function App() {
  const [resource,setResource] = useState('Users')
  console.log('render')
  useEffect(()=>{
    console.log('render type changed')
  },[resource])
 
   function changeResource(resource){
      setResource(previousResource=> resource)
  }
 
  return (
    <div className="App">
       <button onClick={()=>{changeResource('Users')}}>Users</button>
       <button onClick={()=>{changeResource('Posts')}}>Posts</button>
       <button onClick={()=>{changeResource('Comments')}}>Comments</button>
       <h3>{resource}</h3>
    </div>
  );
}

export default App;
