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
import resume from '../images/Resume.png'
import Contact from './Contact'



export default function HomePage(props) {


    return (
        <div>

            {/********  Title Section ********/}
            <img className="home-page-picture" alt="background" src={homepicture} />
            <div className="home-page-title">
                <span>Hello I'm </span>
                <span className="my-name">Stephen Burnett</span>
                <div>A Software Engineer</div>
            </div>


            {/********  About Section ********/}
            <div id="about">
                <h1 className="home-titles">About</h1>
                <div className="about-container">
                    <div><img className="profile-picture " alt="profile" src={profile} /></div>
                    <div><p className="about-text" >I am an inquisitive and diligent software engineer who has over six years of consulting experience. I have a passion for problem solving and learning. Consulting has taught me to live in a growth mindset where I strive to be better everyday. Working as a business analyst at Navitas Billing ignited my enthusiasm for coding and ultimately led me to pursue a career change.</p></div>
                </div>
            </div>

            <div className="hr"></div>

            {/********  Skills and Tools Section ********/}
            <div id="skills-and-tools">
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
            </div>
            <div className="hr"></div>

            {/********  Projects Section ********/}
            <div id="projects">
                <h1 className="home-titles" >Projects</h1>


                <div className="all-projects-container">
                    <div className="single-project-container">
                        <img className="project-image" src={restaurant} alt="" />
                        <div>
                            <div className="project-titles">Joyce's Caribbean Restaurant</div>
                            <div className="project-text">Created a restaurant application using React(Front-End), Ruby on Rails(Back-End). The application is comprised of a home, event, delivery, menu and profile screens. The user has the ability to make anorder which is put into the backend. The application allows the user to order food and each of the orders are put to the backend.</div>
                            <div className="links-container">
                                <div><a className="site-link" href="https://github.com/stephenburnett714/Joyces" rel="noopener noreferrer" target="_blank">View Code on Github</a></div>
                                <div><a className="site-link" href="https://joyce-app.herokuapp.com/" rel="noopener noreferrer" target="_blank">View Live Site</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="single-project-container">
                        <img className="project-image" src={car} alt="" />
                        <div>
                            <div className="project-titles">Budget Website Redesign</div>
                            <div className="project-text">Worked in a team of three Software-Engineers and three UX/UI designers to redesign the budget rent-a-car website. The application uses React for front end and Express for the back-end. I was tasked to manage the Github merges in this process. Out team created a back end to hold the specifics for the rentable cars. The front end was created based on on the wireframe and work-flow that was givin to us by the UX/UI designers. </div>
                            <div className="links-container">
                                <div><a className="site-link" href="https://github.com/stephenburnett714/Budget" rel="noopener noreferrer" target="_blank">View Code on Github</a></div>
                                <div><a className="site-link" href="http://budget-boyz.herokuapp.com/" rel="noopener noreferrer" target="_blank">View Live Site</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="single-project-container">
                        <img className="project-image" src={movie} alt="" />
                        <div>
                            <div className="project-titles">Movie Database</div>
                            <div className="project-text">Created an application using React that gives the user the ability to search through movies, tv-shows and actors/actresses using themoviedb API. While searching a movie or tv-show a description is given along with information about the cast. While searching for an actor/actress a description is given along with the movies and tv-shows in which they appear.</div>
                            <div className="links-container">
                                <div><a className="site-link" href="https://github.com/stephenburnett714/MovieDataBase" rel="noopener noreferrer" target="_blank">View Code on Github</a></div>
                                <div><a className="site-link" href="http://stephen-moviedatabase.surge.sh/" rel="noopener noreferrer" target="_blank">View Live Site</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="single-project-container">
                        <img className="project-image" src={jeopardy} alt="" />
                        <div>
                            <div className="project-titles">Random Jeopardy</div>
                            <div className="project-text">Created a game in Vanilla Javascript that gives you 10 random Jeopardy questions from the JService API. The user gets points depending on the difficulty of the question. The user has the ability to restart the game or skip questions at any time. One of the 10 questions is a daily-double and is worth double the points.</div>
                            <div className="links-container">
                                <div><a className="site-link" href="https://github.com/stephenburnett714/Random-Jeopardy" rel="noopener noreferrer" target="_blank">View Code on Github</a></div>
                                <div><a className="site-link" href="" rel="noopener noreferrer" target="_blank">View Live Site</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hr"></div>

                {/********  Resume ********/}
                <div id="resume">
                    <h1 className="home-titles">Resume</h1>
                    <div className="resume-container">

                        <div className="resume-main-title">WORK EXPERIENCE</div>
                        <div className="job-spacing">
                            <div className="job-title">SOFTWARE ENGINEERING IMMERSIVE</div>
                            <div className="employeer-time">GENERAL ASSEMBLY | DEC 2019 - MAR 2020</div>
                            <div className="job-description">Full time fellow in the Software Engineering Immerse program that includes over 400 hours of professional training over 12 weeks.
                            Education: Git, GitHub, Command Line, JavaScript, CSS, HTML, Ruby, Ruby on Rails, SQL, Express, and React.</div>
                        </div>
                        <div className="job-spacing">
                            <div className="job-title">BUSINESS CONSULTANT</div>
                            <div className="employeer-time">THE ACCELA GROUP | JAN 2013 - JUL 2019</div>
                            <div className="job-description">Provided financial modeling, mergers and acquisition analysts and client support for financial advisory firm focused on the development of start up early stage ventures.
                            Consulted with industries such as, IT Managed services, Financial-tech, Hair- care and Hospitality.</div>
                        </div>
                        <div className="job-spacing">
                            <div className="job-title">BUSINESS ANALYST</div>
                            <div className="employeer-time">NAVITAS BILLING | DEC 2015 - OCT 2016</div>
                            <div className="job-description">Creator of investment grade financial model used for initial seed funding . Conducted product demos to perspective clients for the company's custom billing platform.
                            Worked directly with the CTO to develop a custom reports for a Software as a service billing solution for the deregulated energy industry.</div>
                        </div>
                        <div className="job-spacing">
                            <div className="resume-main-title">EDUCATION</div>
                            <div className="job-spacing">
                                <div className="job-title">GENERAL ASSEMBLY</div>
                                <div className="employeer-time">SOFTWARE ENGINEERING IMMERSIVE</div>
                            </div>
                            <div className="job-spacing">
                                <div className="job-title">MISERICORDIA UNIVERSITY</div>
                                <div className="employeer-time">BACHELOR OF SCIENCE - HEALTHCARE MANAGEMENT</div>
                            </div>
                        </div>


                    </div>
                    <a href={resume} download>
                        <button className="btn btn-primary">Download Resume</button>
                    </a>
                </div>
                <div className="hr"></div>

                {/********  Contact Form ********/}
                <div id="contact">
                    <h1 className="home-titles" >Contact Me</h1>

                    <Contact />
                </div>

            </div>
        </div>
    )
}