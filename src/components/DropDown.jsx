import React, { useState } from 'react';
import Bars from '../images/bars-solid.svg'
import HamburgerData from './HamburgerData'




export default function DropDown(props) {

    const [open, setOpen] = useState(false)

    const handleMenuButtonClick = () => {
        setOpen(!open)
    }

    return (
        <div className="container">
            <div className="menu-button">
                <img className="bars-image" onClick={handleMenuButtonClick} src={Bars} alt="" />
            </div>


            <div>
                {HamburgerData.length && (
                    <nav className={`nav ${open ? 'show' : ''}`} >
                        <ul className="menu-items">
                            {HamburgerData.map(data => (
                                <div >
                                    <li className="menu-list" key={data.label}>
                                        <a className="menu-link" href={data.url}>{data.label}</a>
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
        </div>

    )
}




