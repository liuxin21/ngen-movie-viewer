import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from '../components/Nav'
import { MoviesList, MoviesInsert, MoviesUpdate } from '../pages'

function App() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route path="/" exact component={MoviesList} />
                <Route path="/movies/list" exact component={MoviesList} />
                <Route path="/movies/create" exact component={MoviesInsert} />
                <Route path="/movies/update/:id" exact component={MoviesUpdate} />
            </Switch>
        </Router>
    )
}

export default App