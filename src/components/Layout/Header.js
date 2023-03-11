import React from "react";
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import Peoples from '../../pages/Peoples'
import Films from '../../pages/Films'
import Starships from '../../pages/Starships'
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
                        <Nav.Link href="#"><Link to="/peoples">Peoples</Link></Nav.Link>
                        <Nav.Link href="#"><Link to="/films">Films</Link></Nav.Link>
                        <Nav.Link href="#"><Link to="/starships">Starships</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/peoples" element={<Peoples />} />
                <Route path="/films" element={<Films />} />
                <Route path="/starships" element={<Starships />} />
            </Routes>
        </>
    );
}
