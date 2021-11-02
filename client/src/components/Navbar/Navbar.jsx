import React from "react";
import { StyledNavbar } from "./StyledNavbar";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <StyledNavbar>
            <div className='container'>
                <div className='title'>
                    <p>LuisRocca</p>
                </div>
                <div className='social-media'>
                    <a href="https://www.linkedin.com/in/luis-miguel-alfonzo-roca-web-developer/" target='_blank' rel='noopener noreferrer' ><i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/LuisRocca" target='_blank' rel='noopener noreferrer' ><i class="fab fa-github-square"></i></a>
                    <a href="https://twitter.com/LuisRoc05207268" target='_blank' rel='noopener noreferrer' ><i class="fab fa-twitter-square"></i></a>
                </div>
                <div>
                    <ul className="list">
                        <li className="list-item">
                            <NavLink exact to="/home" >Home</NavLink>
                        </li>
                        <li className="list-item">
                            <NavLink exact to="/create/activity" >Create Activity</NavLink>
                        </li>
                        <li className="list-item">
                            <NavLink exact to="/about" >About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </StyledNavbar>
  );
};

export default Navbar;
