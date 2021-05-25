import './App.css';
import { useState,useEffect } from "react";

function App() {
  const [resource,setResource] = useState('Users')
  const [items,setItems] = useState([])
  console.log('render')
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      setItems(previousItems=>{
        return json
      })
    })

  }, [resource])
  
  
   function changeResource(resource){
      setResource(previousResource=> resource)
  }
 
  return (
    <div className="App">
       <button onClick={()=>{changeResource('users')}}>Users</button>
       <button onClick={()=>{changeResource('posts')}}>Posts</button>
       <button onClick={()=>{changeResource('comments')}}>Comments</button>
       <h3>{resource}</h3>
      {
       items.map(item=>{
         return <p key={item.id}>{JSON.stringify(item)}</p>
       })
       }
    </div>
  );
}

export default App;
