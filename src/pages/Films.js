import React, { useEffect, useState } from 'react'
import FlimList from '../components/Film/FilmList'
import { getFilms } from '../services/FilmService'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Spinner from '../components/Spinner/Spinner';

export default function Films() {
    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getFilms()
            .then(response => {
                setFilms(response.data.results)
                setLoading(false)
            }).catch(error => {
                console.error(`Error: ${error}`)
                setLoading(false)
            })
    }, [])

    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand>Films</Navbar.Brand>
                </Container>
            </Navbar>
            <Spinner visible={loading}></Spinner>
            <FlimList films={films}></FlimList>
        </>
    )
}
