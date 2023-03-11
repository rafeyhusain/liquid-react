import React from 'react'
import PeopleItem from './PeopleItem'

export default function PeopleList({ people }) {
    return (
        <>
            {people.map(person => (
                <PeopleItem key={person.url} person={person}></PeopleItem>
            ))}
        </>
    )
}
