import React from 'react'
import Card from 'react-bootstrap/Card'
import { useSessionUpdate } from '../../hooks/useSession'
import { useNavigate } from "react-router-dom";

export default function FilmItem({ film }) {
    const setState = useSessionUpdate()
    const navigate = useNavigate();

    const handlePeopleClick = (x) => {
        setState({ films: [], people: x.characters, ships: x.starships })
        navigate("/people-viewer");
    }

    const handleShipClick = (x) => {
        setState({ films: [], people: x.characters, ships: x.starships })
        navigate("/ships-viewer");
    }

    return (
        <>
            <Card
                bg="light"
                className="mb-2"
                style={{ width: '18rem' }}>
                <Card.Img variant="top" src="film.png" />
                <Card.Body>
                    <Card.Title>{film.title}</Card.Title>
                    <Card.Text>
                        {film.opening_crawl}...
                    </Card.Text>
                    <Card.Link href="#" onClick={() => handlePeopleClick(film)}>People</Card.Link>
                    <Card.Link href="#" onClick={() => handleShipClick(film)}>Ships</Card.Link>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Release date {film.release_date}</small>
                </Card.Footer>
            </Card>
        </>
    )
}
