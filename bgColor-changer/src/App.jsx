import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("black")

  return (
    <>
      <div className='w-full h-screen duration-200 ' style={{backgroundColor : color}} >
        <button onClick={() => setColor('red')} class="rounded-full mr-3 " style = {{backgroundColor: "red"}}>Red</button>
        <button class="rounded-full mr-3 " style = {{backgroundColor: "green"}}>Green</button>
        <button class="rounded-full mr-3 " style = {{backgroundColor: "blue"}}>Blue</button>
        <button class="rounded-full mr-3 " style = {{backgroundColor: "brown"}}>brown</button>
        <button class="rounded-full mr-3 " style = {{backgroundColor: "purple"}}>purple</button>
        
      </div>
    </>
  )
}

export default App
