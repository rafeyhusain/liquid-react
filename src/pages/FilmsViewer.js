import React from 'react'
import FlimViewList from '../components/Film/FilmViewList'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSession } from '../hooks/useSession';

export default function FilmsViewer() {
    const state = useSession()

    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand>Films Viewer</Navbar.Brand>
                </Container>
            </Navbar>
            <FlimViewList urls={state.films}></FlimViewList>
        </>
    )
}
