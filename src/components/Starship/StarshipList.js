import React from 'react'
import StarshipItem from './StarshipItem'

export default function StarshipList({ ships }) {
    return (
        <>
            {ships.map(ship => (
                <StarshipItem key={ship.url} ship={ship}></StarshipItem>
            ))}
        </>
    )
}
