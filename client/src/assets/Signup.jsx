import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Signup() {
const [name , setName] = useState()
const [email , setEmail] = useState()
const [password , setPassword] = useState()
const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', {name , email , password})
    
    .then(result =>console.log(result))
    useNavigate('/login')
    .catch(err =>console.log(err))
}
  return (
   <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
    <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
        <label htmlFor="name">
            <strong>Name</strong></label>
            <input type="name" placeholder='enter name' autoComplete='off' name='Name' className='form-control rounded-0'
            onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="mb-3">
        <label htmlFor="name">
            <strong>Email</strong></label>
            <input type="email" placeholder='enter email' autoComplete='off' name='email' className='form-control rounded-0'
            onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="mb-3">
        <label htmlFor="name">
            <strong>password</strong></label>
            <input type="password" placeholder='enter password' autoComplete='off' name='password' className='form-control rounded-0'
            onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0 ">
                Register
            </button>
            <p>Already have an account?</p>
            </form>
            <Link to="/login" className='btn btn-default bg-light w-100 rounded-0 text-decoration-none'>
                Login
            </Link>
           
    </div>
    </div>
   
  
  )
}

export default Signup
