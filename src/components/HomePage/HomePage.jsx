import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import "./HomePage.css"

function HomePage() {

  const navigate = useNavigate();

  return (
    <>
    <div>
      <h1>Home Page</h1>
    </div>
    <div className='buttons'>
        <Button variant="outline-info" size="lg">Log In</Button>
        <Button variant="outline-info" size="lg" 
        onClick={()=>{navigate("/signUp", { replace: true });}}>Sign Up</Button>
    </div>
    </>
  )
}

export default HomePage