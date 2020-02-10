import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

export const Navbar = () => (
    <div>
        <Router>
            <div>
                <Link to={`/`}> Home </Link>
                <Link to={`/events`}> GS8 Film Screening Events </Link>
                <Link to={`/participate`}> Participate </Link>
                <Link to={`/contact`}> Contact </Link>
                <Link to={`/donate`}> Donate </Link>
            </div>
        </Router>
    </div>
);