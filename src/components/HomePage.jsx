import React from 'react'
import react from '../images/React.png'
import js from '../images/Javascript.png'
import css from '../images/CSS.png'
import express from '../images/Express.png'
import github from '../images/Github.png'
import html from '../images/Html.png'
import rails from '../images/Rails.png'
import ruby from '../images/Ruby.png'
import sql from '../images/SQL.png'



export default function HomePage(props) {

    return(
        <div>
        <span>Hello I'm </span>
        <span>Stephen Burnett</span>
        <div>A Software Engineer</div>
        
        <div>About</div>
        <p>I am an inquisitive and diligent software engineer who has over six years of consulting experience. I have a passion for problem solving and learning. Consulting has taught me to live in a growth mindset where I strive to be better everyday. Working as a business analyst at Navitas Billing ignited my enthusiasm for coding and ultimately led me to pursue a career change.</p>

        <h1>Skills and Tools</h1>
        <img src={react} alt="ReactImage"/>
        <img src={js} alt="ReactImage"/>
        <img src={css} alt="ReactImage"/>
        <img src={express} alt="ReactImage"/>
        <img src={sql} alt="ReactImage"/>
        <img src={github} alt="ReactImage"/>
        <img src={html} alt="ReactImage"/>
        <img src={rails} alt="ReactImage"/>
        <img src={ruby} alt="ReactImage"/>
        <div>Projects</div>
        
        </div>
    )
}