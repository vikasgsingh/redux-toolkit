import React, { useState } from 'react'
import './Login.css'
const Login = () => {

    const [name, setName] = useState('')
    const [email, SetEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
           e.preventDefault()
           console.log(email, password)
    }
    return (
        <div>
            <form className='login-form' onClick={handleSubmit}>
                <h2>LogIn Here</h2>
                <input type='email' placeholder='email' value={email} onChange={(e) => SetEmail(e.target.value)} />
                <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit' className='submit-btn'>log In</button>
            </form>
        </div>
    )
}

export default Login
