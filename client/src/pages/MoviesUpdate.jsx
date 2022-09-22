import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../api'
import { Button, TextField } from '@mui/material'
import './Movies.css'

class MoviesUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            name: '',
            rating: '',
            time: '',
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

    handleUpdateMovie = async () => {
        const { id, title, year, director } = this.state
        if (!(title && year && director)) {
            window.alert(`Please complete all the info`)
            return;
        } 
        const payload = { Title: title, Year: year, Director: director }
        await api.updateMovieById(id, payload).then(res => {
            window.alert(`Movie updated successfully`)
            this.setState({
                title: '',
                year: '',
                director: '',
            })
        })
    }


    componentDidMount = async () => {
        const { id } = this.state
        console.log('id: ', id)
        const movie = await api.getMovieById(id)
        const { Title, Year, Director } = movie.data.data;
        this.setState({
            title: Title,
            year: Year,
            director: Director
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
                        defaultValue='title'
                        onChange={this.handleChangeInputTitle}
                        sx={{ marginRight: 2}}
                    />
                    <TextField
                        required
                        label="Year"
                        value={year}
                        defaultValue='year'
                        onChange={this.handleChangeInputYear}
                        sx={{ marginRight: 2}}
                    />
                    <TextField
                        required
                        label="Director"
                        value={director}
                        defaultValue='director'
                        onChange={this.handleChangeInputDirector}
                    />
                </div>
                <div className='movies-button'>
                    <Button variant="outlined" color="error" onClick={this.handleUpdateMovie}>Update Movie</Button>
                    <Button variant="outlined" color="error" sx={{ marginLeft: 2}} href={'/movies/list'}>Cancel</Button>
                </div>
            </div>
        )
    }
}

export default withRouter(MoviesUpdate)