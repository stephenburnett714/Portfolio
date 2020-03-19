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
import homepicture from '../images/HomePicture.jpg'
import profile from '../images/Profile.JPG'
import jeopardy from '../images/Jeopardy.jpeg'
import movie from '../images/Movie.jpg'
import car from '../images/Car.jpg'
import restaurant from '../images/Restaurant.jpg'



export default function HomePage(props) {

    return (
        <div>

            {/********  Title Section ********/}
            <img className="home-page-picture" src={homepicture} />
            <div class="home-page-title">
                <span>Hello I'm </span>
                <span>Stephen Burnett</span>
                <div>A Software Engineer</div>
            </div>


            {/********  About Section ********/}
            <h1 className="home-titles">About</h1>
            <div className="about-container">
                <div><img className="profile-picture " src={profile} /></div>
                <div><p className="about-text" >I am an inquisitive and diligent software engineer who has over six years of consulting experience. I have a passion for problem solving and learning. Consulting has taught me to live in a growth mindset where I strive to be better everyday. Working as a business analyst at Navitas Billing ignited my enthusiasm for coding and ultimately led me to pursue a career change.</p></div>
            </div>


            {/********  Skills and Tools Section ********/}
            <h1 className="home-titles" >Skills and Tools</h1>
            <img className="image-sizing" src={react} alt="ReactImage" />
            <img className="image-sizing" src={js} alt="ReactImage" />
            <img className="image-sizing" src={html} alt="ReactImage" />
            <img className="image-sizing" src={css} alt="ReactImage" />
            <img className="image-sizing" src={github} alt="ReactImage" />
            <img className="image-sizing" src={express} alt="ReactImage" />
            <img className="image-sizing" src={sql} alt="ReactImage" />
            <img className="image-sizing" src={rails} alt="ReactImage" />
            <img className="image-sizing" src={ruby} alt="ReactImage" />


            {/********  Projects Section ********/}
            <h1 className="home-titles" >Projects</h1>


            <div className="all-projects-container">
                <div className="single-project-container">
                    <img className="project-image" src={restaurant} alt="" />
                    <div>
                        <div>Joyce's Carribian Restaurant</div>
                        <div>Created a restaurant application usung </div>
                    </div>
                </div>

                <div className="single-project-container">
                    <img className="project-image" src={car} alt="" />
                    <div>
                        <div>Budget Website Redesign</div>
                        <div>Worked in a team of three Software-Engineers and three UX/UI designers to redesign the budget rent-a-car website. The application uses React for front end and Express for the back-end. I was tasked to manage the Github merges in this process. Out team created a back end to hold the specifics for the rentable cars. The front end was created based on on the wireframe and work-flow that was givin to us by the UX/UI designers. </div>
                    </div>
                </div>

                <div className="single-project-container">
                    <img className="project-image" src={movie} alt="" />
                    <div>
                        <div>Movie Database</div>
                        <div>Created an applicaiton using React that gives the user the ability to search through movies, tv-shows and actors/actresses using themoviedb API. while searching a movie or tv-show a description is given along with information about the cast. While serching a actor/actress a description is given along with the movies and tv-shows in which they appeared.</div>
                    </div>
                </div>

                <div className="single-project-container">
                    <img className="project-image" src={jeopardy} alt="" />
                    <div>
                        <div>Random Jeopardy</div>
                        <div>Created a game in Vanilla Javascript that gives you 10 random Jeopardy questions from the JService API. The user gets points depending on the difficulty of the question. The user has the ability to restart the game or skip questions at any time. One of the 10 quesitons ias a daily-double and is worth double the points.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}