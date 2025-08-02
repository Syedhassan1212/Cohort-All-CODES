import {useState} from "react";

function App() {

  const [count , setcount] = useState(0);

  function onClickhandler() {
    setcount(count + 1);
    
  }

  return (
    <div>
    <button onClick={onClickhandler}>counter{count}</button>
    </div>
  
  )
}

export default App;