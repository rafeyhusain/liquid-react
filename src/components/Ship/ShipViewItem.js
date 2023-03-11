import React, { useState, useEffect } from 'react'
import Spinner from '../../components/Spinner/Spinner';
import { getShip } from '../../services/ShipService'
import ShipItem from './ShipItem'

export default function ShipViewItem({ url }) {
    const [ship, setShip] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getShip(url, true)
            .then(response => {
                setShip(response.data)
                setLoading(false)
            }).catch(error => {
                console.error(`Error: ${error}`)
                setLoading(false)
            })
    }, [url])

    return (
        <>
            <Spinner visible={loading}></Spinner>
            <ShipItem ship={ship} />
        </>
    )
}
