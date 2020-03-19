import React, { useState } from 'react'
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

    /////// Email Form ////////

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function onNameChange(event) {
        setName(event.target.value)
    }

    function onEmailChange(event) {
        setEmail(event.target.value)
    }

    function onMessageChange(event) {
        setMessage(event.target.value)
    }

    function handleSubmit(event) {
    }

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
                        <div className="project-titles">Joyce's Carribian Restaurant</div>
                        <div className="project-text">Created a restaurant application using React(Front-End), Ruby on Rails(Back-End). The applicaiton is comprised of a home, event, delivery, menu and profile screens. The user has the ablity to make order which is put into the backend. was cThe application allowed the user to order food and each of the orders were put to the back</div>
                        <div><a href="">View Code on Github</a></div>
                        <div><a href="https://joyce-app.herokuapp.com/">View Live Site</a></div>
                    </div>
                </div>

                <div className="single-project-container">
                    <img className="project-image" src={car} alt="" />
                    <div>
                        <div className="project-titles">Budget Website Redesign</div>
                        <div className="project-text">Worked in a team of three Software-Engineers and three UX/UI designers to redesign the budget rent-a-car website. The application uses React for front end and Express for the back-end. I was tasked to manage the Github merges in this process. Out team created a back end to hold the specifics for the rentable cars. The front end was created based on on the wireframe and work-flow that was givin to us by the UX/UI designers. </div>
                        <div><a href="">View Code on Github</a></div>
                        <div><a href="http://budget-boyz.herokuapp.com/">View Live Site</a></div>
                    </div>
                </div>

                <div className="single-project-container">
                    <img className="project-image" src={movie} alt="" />
                    <div>
                        <div className="project-titles">Movie Database</div>
                        <div className="project-text">Created an applicaiton using React that gives the user the ability to search through movies, tv-shows and actors/actresses using themoviedb API. while searching a movie or tv-show a description is given along with information about the cast. While serching a actor/actress a description is given along with the movies and tv-shows in which they appeared.</div>
                        <div><a href="">View Code on Github</a></div>
                        <div><a href="http://stephen-moviedatabase.surge.sh/">View Live Site</a></div>
                    </div>
                </div>

                <div className="single-project-container">
                    <img className="project-image" src={jeopardy} alt="" />
                    <div>
                        <div className="project-titles">Random Jeopardy</div>
                        <div className="project-text">Created a game in Vanilla Javascript that gives you 10 random Jeopardy questions from the JService API. The user gets points depending on the difficulty of the question. The user has the ability to restart the game or skip questions at any time. One of the 10 quesitons ias a daily-double and is worth double the points.</div>
                        <div><a href="">View Code on Github</a></div>
                        <div><a href="">View Live Site</a></div>
                    </div>
                </div>

                {/********  Resume ********/}
                <div>Resume</div>
                <div>Work Experience</div>
                <div>SOFTWARE ENGINEERING IMMERSIVE</div>
                <div>GENERAL ASSEMBLY | DEC 2019 - MAR 2020</div>
                <div>Full time fellow in the Software Engineering Immerse program that includes over 400 hours of professional training over 12 weeks.
Education: Git, GitHub, Command Line, JavaScript, CSS,HTM, Ruby, Rails, SQL, Express, and React.</div>
                <div>BUSINESS CONSULTANT</div>
                <div>THE ACCELA GROUP | JAN 2013 - JUL 2019</div>
                <div>Responsible for developing business plans and excel based financial models for company start-ups, acquisitions, and mergers.
Conducted monthly meetings with clients to review financial statements and strategic growth tactics i.e.,pipeline development and marketing strategies.</div>
                <div>BUSINESS ANALYSTS</div>
                <div>NAVITAS BILLING | DEC 2015 - OCT 2016</div>
                <div>Creator of investment grade financial model used for initial seed funding . Conducted product demos to perspective clients for the company's custom billing platform.
Assisted in the development of the custom billing system utilizing database software Jaspersoft.</div>


                <div>EDUCATION</div>
                <div>GENERAL ASSEMBALY</div>
                <div>SOFTWARE ENGINEERING IMMERSIVE</div>
                <a href="/images/myw3schoolsimage.jpg" download>
                <button type="submit" className="btn btn-primary">Download Resume</button>
                </a>

                {/********  Contact Form ********/}
                <h1 className="home-titles" >Contact Me</h1>
                <div>
                    <form id="contact-form" onSubmit={handleSubmit} method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" value={name} onChange={onNameChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={onEmailChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" rows="5" value={message} onChange={onMessageChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>


            </div>
        </div>
    )
}