
import React, { Component } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import api from '../api'


class MoviesList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount = async () => {
        await api.getAllMovies().then(movies => {
            this.setState({
                movies: movies.data.data
            })
        })
    }

    updateMovie(id, event) {
        event.preventDefault()
        window.location.href = `/movies/update/${id}`
    }

    deleteMovie(id, event) {
        event.preventDefault()
        if (
            window.confirm(
                `Do you want to delete the movie ${id} permanently?`,
            )
        ) {
            api.deleteMovieById(id)
            window.location.reload()
        }
    }

    render() {
        const { movies } = this.state
        return (
            <TableContainer sx={{ minWidth: 650, maxWidth: 1400, margin: [0, "auto"]}} component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Year and Director</TableCell>
                        <TableCell aligh="center">Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {movies.map((row) => (
                        <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row._id}
                        </TableCell>
                        <TableCell>{row.Title}</TableCell>
                        <TableCell>{row.Year} & {row.Director}</TableCell>
                        <TableCell>
                            <Stack direction="row" spacing={2}>
                            <Button variant="outlined" color="error" onClick={(e) => this.deleteMovie(row._id, e)}>Delete</Button>
                            <Button variant="outlined" color="error" onClick={(e) => this.updateMovie(row._id, e)}>Edit</Button>
                            </Stack>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
    
}
export default MoviesList