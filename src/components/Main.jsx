import React from 'react'
import HomePage from './HomePage'
import { Route } from 'react-router-dom'



export default function Main(props) {

    return (
        <div>
            <Route exact path="/">
                <HomePage />
            </Route>
        </div>
    )
}