import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState([{
    title : "goto gym",
    description: "goto gym at 7pm",
    complete : true },{
        title : "goto dsa",
        description: "goto dsa at 7pm",
        complete : false
  }])

  return(
    <div>
      {/* {JSON.stringify(todo)} */}
    </div>
  )
 
}

export default App
