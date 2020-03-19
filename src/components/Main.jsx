import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './HomePage'




export default function Main(props) {

    return (
        <div>
            <Route exact path="/">
                <HomePage />
            </Route>
        </div>
    )
}