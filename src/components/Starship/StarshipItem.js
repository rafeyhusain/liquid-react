import React from 'react'
import Card from 'react-bootstrap/Card'

export default function StarshipItem({ ship }) {
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
                    <Card.Link href="#">People</Card.Link>
                    <Card.Link href="#">Films</Card.Link>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Create date {ship.created}</small>
                </Card.Footer>
            </Card>
        </>
    )
}
