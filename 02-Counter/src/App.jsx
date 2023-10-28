import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)
  function addValue(){
    // console.log("ochon mocho",counter)
    if (counter > 0 && counter < 20){
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)
    }
    else{
      alert("cannot move further")
    }
    
  }

  const removeValue = () => {

    if (counter > 0 && counter < 20){
      setCounter(counter+-1)
    }
    else{
      alert("cannot move further")
    }

    // setCounter(counter -= 1)
  }


  return (
    <>
      
      <h1>Chai and react</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Increase value  {counter}</button>
      <button onClick={removeValue}>Decrease value   {counter}</button>
      
    </>
  )
}

export default App
