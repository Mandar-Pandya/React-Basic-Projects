import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    const handleSubmit =(e) => {
        e.preventDefault()
        setUser({username,password})

    }
  return (
    <div>
        <h2 className='bg-grey-700 text-white m-5 text-4xl'>Login </h2>
        <input
            className='bg-blue-400 rounded-md mx-4 h-8 text-black py-2 px-2'
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username'
        />
        <input 
            className='bg-blue-400 rounded-md mx-4 h-8 text-black py-2 px-2'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
        />
        <button onClick={handleSubmit}>Submit</button>



    </div>
  )
}

export default Login