import React from 'react';
import DropDown from './DropDown'

export default function NavBar(props) {

    return (
        <div className="nav-container">
            <div>
            <DropDown />
            </div>
            <div className="nav-text">Stephen Burnett</div>
        </div>
    )
}