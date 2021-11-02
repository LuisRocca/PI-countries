import React from 'react'
import { StyledLanding } from './StyledLanding'
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <StyledLanding>
           {/* <img src='.../public/images/2jpg' /> */}
          <div className="container">
          <h1>about us</h1>  
          <Link to='/home'>go</Link>
          </div>
        </StyledLanding>
    )
}

export default LandingPage
