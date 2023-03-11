import React from 'react'
import FilmViewItem from './FilmViewItem'

export default function FilmViewList({ urls }) {
    return (
        <>
            {urls.map(url => (
                <FilmViewItem key={url} url={url}></FilmViewItem>
            ))}
        </>
    )
}

