import React from 'react'
import PeopleViewList from '../components/People/PeopleViewList'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSession } from '../hooks/useSession';

export default function PeopleViewer() {
    const state = useSession()
    console.log(state)
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand>People Viewer</Navbar.Brand>
                </Container>
            </Navbar>
            <PeopleViewList urls={state.people}></PeopleViewList>
        </>
    )
}
