import React from 'react';
import DropDown from './DropDown'
import  { faGithub, faLinkedin }  from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar(props) {

    return (
        <div className="nav-container">
            <div>
            <DropDown />
            </div>
            <div className="nav-inner-container">
            <span className="nav-text">Stephen Burnett</span>
            <span className="nav-span"><a href="https://github.com/stephenburnett714/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className="footer-logo fa-2x" icon={faGithub} /></a></span>
            <span className="nav-span"><a href="https://www.linkedin.com/in/stephen-burnett" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className="footer-logo fa-2x" icon={faLinkedin} /></a></span>
            </div>
        </div>
    )
}