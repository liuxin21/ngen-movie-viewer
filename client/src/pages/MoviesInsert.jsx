import React, { Component } from 'react'
import api from '../api'
import { Button, TextField } from '@mui/material'
import './Movies.css'

class MoviesInsert extends Component {
    constructor(props) {
        super(props)
        console.log('aaa', props)
        this.state = {
            title: '',
            year: '',
            director: '',
        }
    }

    handleChangeInputTitle = async event => {
        const title = event.target.value
        this.setState({ title })
    }

    handleChangeInputYear = async event => {
        const year = event.target.value
        this.setState({ year })
    }

    handleChangeInputDirector = async event => {
        const director = event.target.value
        this.setState({ director })
    }

    handleAddMovie = async () => {
        const { title, year, director } = this.state
        if (!(title && year && director)) {
            window.alert(`Please complete all the info`)
            return;
        } 
        const payload = { Title: title, Year: year, Director: director }
        await api.insertMovie(payload).then(res => {
            window.alert(`Movie inserted successfully`)
            this.setState({
                title: '',
                year: '',
                director: '',
            })
        })
    }

    render() {
        const { title, year, director } = this.state
        return (
            <div className='movies-container'>
                <div className='movies-form'>
                    <TextField
                        required
                        label="Title"
                        value={title}
                        onChange={this.handleChangeInputTitle}
                        sx={{ marginRight: 2}}
                    />
                    <TextField
                        required
                        label="Year"
                        value={year}
                        onChange={this.handleChangeInputYear}
                        sx={{ marginRight: 2}}
                    />
                    <TextField
                        required
                        label="Director"
                        value={director}
                        onChange={this.handleChangeInputDirector}
                    />
                </div>
                <div className='movies-button'>
                    <Button variant="outlined" color="error" onClick={this.handleAddMovie}>Add Movie</Button>
                    <Button variant="outlined" color="error" sx={{ marginLeft: 2}} href={'/movies/list'}>Cancel</Button>
                </div>
            </div>
        )
    }
}

export default MoviesInsert