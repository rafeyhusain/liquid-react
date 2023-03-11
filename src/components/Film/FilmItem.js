import React from 'react'
import Card from 'react-bootstrap/Card'

export default function FilmItem({ film }) {
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
                        {film.opening_crawl.substring(0, 200)}...
                    </Card.Text>
                    <Card.Link href="#">People</Card.Link>
                    <Card.Link href="#">Starships</Card.Link>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Release date {film.release_date}</small>
                </Card.Footer>
            </Card>
        </>
    )
}
