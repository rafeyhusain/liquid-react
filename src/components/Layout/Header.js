import React from "react";
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import People from '../../pages/People'
import Films from '../../pages/Films'
import Ships from '../../pages/Ships'
import PeopleViewer from '../../pages/PeopleViewer'
import FilmsViewer from '../../pages/FilmsViewer'
import ShipsViewer from '../../pages/ShipsViewer'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Starwars</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Item className="m-2"><Link to="/people">People</Link></Nav.Item>
                        <Nav.Item className="m-2"><Link to="/films">Films</Link></Nav.Item>
                        <Nav.Item className="m-2"><Link to="/ships">Ships</Link></Nav.Item>
                    </Nav>
                </Container >
            </Navbar >

            <Routes>
                <Route path="/people" element={<People />} />
                <Route path="/films" element={<Films />} />
                <Route path="/ships" element={<Ships />} />
                <Route path="/people-viewer" element={<PeopleViewer />} />
                <Route path="/films-viewer" element={<FilmsViewer />} />
                <Route path="/ships-viewer" element={<ShipsViewer />} />
            </Routes>
        </>
    );
}
