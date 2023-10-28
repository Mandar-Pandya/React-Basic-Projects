import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'


function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password,setPassword] = useState('')

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmonpqrstuvwxyz'



    if(numberAllowed) str += '0123456789'
    if(charAllowed) str += '.,<>?/{}|'

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordtoclipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length,numberAllowed,charAllowed,passwordGenerator])



  return (
    <>
      
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-black-500 bg-gray-500'>
      <h1 className='text-center my-4'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input
            type='text'
            value = {password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          
          
          />
          <button onClick={copyPasswordtoclipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <input
            type = 'range'
            value = {length}
            min = {6}
            max = {100}
            onChange={(e) => setLength(e.target.value)}
          
          
          />
          <label> Length : {length}</label>
          <input
          type='checkbox'
          defaultChecked = {numberAllowed}
          onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label>Number</label>
          <input
          type='checkbox'
          defaultChecked = {charAllowed}
          onChange={() => setcharAllowed((prev) => !prev)}
          />
          <label>character</label>
        </div>
      </div>
    </>
  )
}

export default App
