import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './HomePage'
import Resume from './Resume'



export default function Main(props) {

    return (
        <div>
            <Route exact path="/">
                <HomePage />
            </Route>


            <Route exact path="/resume">
                <Resume />
            </Route>
        </div>
    )
}