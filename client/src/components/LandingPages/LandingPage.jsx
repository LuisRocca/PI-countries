import React from 'react'
import { StyledLanding } from './StyledLanding'
import { Link } from 'react-router-dom';
import Img from './images/3.jpg'
const LandingPage = () => {
    return (
        <StyledLanding>
            <div className="back">
           <img src={Img} />
           </div>
          <div className="container">
          <h1>about us</h1>  
          <Link to='/home'>go</Link>
          </div>
        </StyledLanding>
    )
}

export default LandingPage
