import React from 'react'
import ShipViewList from '../components/Ship/ShipViewList'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSession } from '../hooks/useSession';

export default function FilmsViewer() {
    const state = useSession()

    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand>Ships Viewer</Navbar.Brand>
                </Container>
            </Navbar>
            <ShipViewList urls={state.ships}></ShipViewList>
        </>
    )
}
