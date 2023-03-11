import React from 'react'
import ShipItem from './ShipItem'

export default function StarshipList({ ships }) {
    return (
        <>
            {ships.map(ship => (
                <ShipItem key={ship.url} ship={ship}></ShipItem>
            ))}
        </>
    )
}
