import React from 'react';
import Bars from '../images/bars-solid.svg'
import HamburgerData from './HamburgerData'


export default function NavBar(props) {
    return (
        <div className="nav-container">
            <div className="nav-text">Stephen Burnett</div>
            <div>
                <img className="nav-bar" src={Bars} alt="" />
            </div>
            { HamburgerData.length && (
                <ul className="menu-items">
                    { HamburgerData.map(data => (
                        <nav>
                        <li className="menu-list" key={data.label}>
                            <a className="menu-link" href={data.url }>{data.label}</a>
                        </li>
                        </nav>
                    ))}
                </ul>
            )}
        </div>
    )
}