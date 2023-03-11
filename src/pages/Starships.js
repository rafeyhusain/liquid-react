import React, { useEffect, useState } from 'react'
import StarshipList from '../components/Starship/StarshipList'
import { getShips } from '../services/StarshipService'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Spinner from '../components/Spinner/Spinner';

export default function Films() {
    const [ships, setShips] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getShips(true)
            .then(response => {
                setShips(response.data.results)
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
                    <Navbar.Brand>Starships</Navbar.Brand>
                </Container>
            </Navbar>
            <Spinner visible={loading}></Spinner>
            <StarshipList ships={ships}></StarshipList>
        </>
    )
}
