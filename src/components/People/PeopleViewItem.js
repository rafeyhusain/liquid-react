import React, { useState, useEffect } from 'react'
import Spinner from '../../components/Spinner/Spinner';
import { getPerson } from '../../services/PeopleService'
import PeopleItem from './PeopleItem';

export default function PeopleViewItem({ url }) {
    const [person, setPerson] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getPerson(url, true)
            .then(response => {
                setPerson(response.data)
                setLoading(false)
            }).catch(error => {
                console.error(`Error: ${error}`)
                setLoading(false)
            })
    }, [url])

    return (
        <>
            <Spinner visible={loading}></Spinner>
            <PeopleItem person={person} />
        </>
    )
}
