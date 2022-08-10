import React from 'react'
import "./styles/home.css"
const Home = ({loginHandler, registrationHandler}) => {
  
  return (
    <div className='home-container'>

      <div className='button-container'>
        <button onClick={loginHandler}>
          Login
        </button>
        <button onClick={registrationHandler}> Registration</button>
      </div>
      
      <h1 className='headingHome'>WELCOME TO OUR SLOT GAME SITE</h1>
    </div>
  )
}

export default Home
