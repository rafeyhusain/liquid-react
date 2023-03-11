import React from 'react'
import FilmItem from './FilmItem'

export default function FilmList({ films }) {
    return (
        <>
            {films.map(film => (
                <FilmItem key={film.url} film={film}></FilmItem>
            ))}
        </>
    )
}

