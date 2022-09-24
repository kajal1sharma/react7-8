import React from 'react'
import {Link} from "react-router-dom"
const About = () => {
  return (
    <div>
      it is <h1>About </h1> Page
      <li><Link to="/Product">Product</Link></li>
    </div>
  )
}

export default About
