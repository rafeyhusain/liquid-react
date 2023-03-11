import React from 'react'
import Card from 'react-bootstrap/Card'
import { useSessionUpdate } from '../../hooks/useSession'
import { useNavigate } from "react-router-dom";

export default function StarshipItem({ ship }) {
    const setState = useSessionUpdate()
    const navigate = useNavigate();

    const handlePeopleClick = (x) => {
        setState({ films: x.films, people: x.pilots, ships: [] })
        navigate("/people-viewer");
    }

    const handleFilmClick = (x) => {
        setState({ films: x.films, people: x.pilots, ships: [] })
        navigate("/films-viewer");
    }

    return (
        <>
            <Card
                bg="light"
                className="mb-2"
                style={{ width: '12rem' }}>
                <Card.Img variant="top" src="ship.png" />
                <Card.Body>
                    <Card.Title>{ship.name}</Card.Title>
                    <Card.Text>
                        {ship.manufacturer}
                    </Card.Text>
                    <Card.Link href="#" onClick={() => handlePeopleClick(ship)}>People</Card.Link>
                    <Card.Link href="#" onClick={() => handleFilmClick(ship)}>Films</Card.Link>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Create date {ship.created}</small>
                </Card.Footer>
            </Card>
        </>
    )
}
