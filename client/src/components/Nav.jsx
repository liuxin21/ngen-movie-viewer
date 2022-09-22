import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import './Nav.css';

export default class Nav extends Component {
    render() {
        return (
            <div className='nav-container'>
                <div className='nav-logo' href="https://ngenagency.com">
                    <img src='https://media-exp1.licdn.com/dms/image/C560BAQEBgqAI5otwKA/company-logo_200_200/0/1519892576309?e=2147483647&v=beta&t=Y5ZVZVFNs-8qQVfNA4CvkuhHa1I-kczIrt-pZnEpx9Q' width="50" height="50" alt="ngenagency.com" />
                </div>
                <Link to="/movies/list" className="nav-title"> Ngen Movie Viewer (click me)</Link>
                <Link to="/movies/create" className="nav-link">
                    <Button variant="contained" color="error">Create New Movie</Button>
                </Link>
            </div>
        )
    }
}