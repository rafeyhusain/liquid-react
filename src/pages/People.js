import React, { useEffect, useState } from 'react'
import PeopleList from '../components/People/PeopleList'
import { getPeople } from '../services/PeopleService'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Spinner from '../components/Spinner/Spinner';

export default function People() {
  const [people, setPoeple] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getPeople(true)
      .then(response => {
        setPoeple(response.data.results)
        setLoading(false)
      }).catch(error => {
        console.error(`Error: ${error}`)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>People</Navbar.Brand>
        </Container>
      </Navbar>
      <Spinner visible={loading}></Spinner>
      <PeopleList people={people}></PeopleList>
    </>
  )
}
