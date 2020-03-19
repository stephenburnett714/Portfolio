import React, { useState } from 'react';
import Bars from '../images/bars-solid.svg'
import HamburgerData from './HamburgerData'


export default function NavBar(props) {

    const [open, setOpen] = useState(false)

    const handleMenuButtonClick = () => {
        setOpen(!open)
    }

    return (
        <div>
        <div className="nav-container">
            <div className="nav-text">Stephen Burnett</div>
            <div>
                <img className="nav-bar" onClick={handleMenuButtonClick} src={Bars} alt="" />
            </div>
        </div>
            <div className="container">
            {HamburgerData.length && (
                <ul className="menu-items">
                    {HamburgerData.map(data => (
                        <div className={`nav ${open ? 'show' : ''}`}>
                            <li className="menu-list" key={data.label}>
                                <a className="menu-link" href={data.url}>{data.label}</a>
                            </li>
                        </div>
                    ))}
                </ul>
            )}
            </div>
        </div>
    )
}