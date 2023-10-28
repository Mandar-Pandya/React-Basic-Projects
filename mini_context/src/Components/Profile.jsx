import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <div>Please Login</div>

    return <div>Hello and Welcom {user.username}</div>
}

export default Profile