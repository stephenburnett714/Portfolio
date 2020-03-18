import React from 'react';
import Bars from '../images/bars-solid.svg'
import HamburgerData from './HamburgerData'


export default function NavBar(props) {
    return (
        <div className="nav-container">
            <div className="nav-text">STEPHEN BURNETT</div>
            <div>
                <img className="nav-bar" src={Bars} alt="" />
            </div>
            { HamburgerData.length && (
                <ul>
                    { HamburgerData.map(data => (
                        <li><a href={data.url }>{data.label}</a></li>
                    ))}
                </ul>
            )}
        </div>
    )
}