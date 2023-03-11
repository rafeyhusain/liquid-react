import React, { useEffect, useState } from 'react'
import { getFilms } from '../../services/FilmService'
import FilmItem from './FilmItem'

export default function FilmList() {
    const [films, setFilms] = useState([])

    useEffect(() => {
        getFilms()
            .then(response => {
                setFilms(response.data.results)
            }).catch(error => {
                console.error(`Error: ${error}`)
            })
    }, [])
    return (
        <>
            <h1>Films</h1>
            {films.map(film => (
                <FilmItem film={film}></FilmItem>
            ))}
        </>
    )
}
