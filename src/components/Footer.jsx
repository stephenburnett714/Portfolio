import React from 'react'


export default class Welcome extends React.Component {
 
render() {
    
    function showCurrentYear() {
        return new Date().getFullYear();
    }

    return (
        <div className="footer-container">
            <div>
            <span className="footer-text">{'\u00A9'}Stephen Burnett </span>
            <span className="footer-text">{showCurrentYear()} </span>
            </div>

            
        </div>
    )
}
}
