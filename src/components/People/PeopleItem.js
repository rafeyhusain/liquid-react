import React from 'react'
import Card from 'react-bootstrap/Card'

export default function PeopleItem({ person }) {
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
                    <Card.Link href="#">Films</Card.Link>
                    <Card.Link href="#">Starships</Card.Link>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Create date {person.created}</small>
                </Card.Footer>
            </Card>
        </>
    )
}
