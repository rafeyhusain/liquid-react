import React, { useState, useEffect } from 'react'
import Spinner from '../../components/Spinner/Spinner';
import { getFilm } from '../../services/FilmService'
import FilmItem from './FilmItem';

export default function FilmViewItem({ url }) {
    const [film, setFilm] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getFilm(url, true)
            .then(response => {
                setFilm(response.data)
                setLoading(false)
            }).catch(error => {
                console.error(`Error: ${error}`)
                setLoading(false)
            })
    }, [url])

    return (
        <>
            <Spinner visible={loading}></Spinner>
            <FilmItem film={film} />
        </>
    )
}
