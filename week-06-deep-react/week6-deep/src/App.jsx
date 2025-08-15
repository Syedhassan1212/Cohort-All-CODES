import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("my name is hassan")
function setTitle1(){
  setTitle("my name is" + Math.random())
}

  return (
    <div> 
    <button onClick={setTitle1} > update</button>
    <Header title={title} />
      <Header title='hassan'></Header>
      <Header title = "hassan"></Header>

    </div>
  )
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
