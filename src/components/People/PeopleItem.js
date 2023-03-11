import React from 'react'
import Card from 'react-bootstrap/Card'
import { useSessionUpdate } from '../../hooks/useSession'
import { useNavigate } from "react-router-dom";

export default function PeopleItem({ person }) {
    const setState = useSessionUpdate()
    const navigate = useNavigate();

    const handleFilmClick = (x) => {
        setState({ films: x.films, people: [], ships: x.starships })
        navigate("/films-viewer");
    }

    const handleShipClick = (x) => {
        setState({ films: x.films, people: [], ships: x.starships })
        navigate("/ships-viewer");
    }

    return (
        <>
            <Card
                bg="light"
                className="mb-2"
                style={{ width: '12rem' }}>
                <Card.Img variant="top" src="person.png" />
                <Card.Body>
                    <Card.Title>{person.name}</Card.Title>
                    <Card.Text>
                        Hair color is {person.hair_color}
                    </Card.Text>
                    <Card.Link href="#" onClick={() => handleFilmClick(person)}>Films</Card.Link>
                    <Card.Link href="#" onClick={() => handleShipClick(person)}>Ships</Card.Link>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Create date {person.created}</small>
                </Card.Footer>
            </Card>
        </>
    )
}
