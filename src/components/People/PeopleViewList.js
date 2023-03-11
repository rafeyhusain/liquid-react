import React from 'react'
import PeopleViewItem from './PeopleViewItem'

export default function PeopleViewList({ urls }) {
    return (
        <>
            {urls.map(url => (
                <PeopleViewItem key={url} url={url}></PeopleViewItem>
            ))}
        </>
    )
}

