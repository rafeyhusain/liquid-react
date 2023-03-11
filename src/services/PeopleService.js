import axios from 'axios'
import { BaseUrl } from './Env'

export const getPeople = (live) => {
    var url = live ? `${BaseUrl}people` : 'http://localhost:3000/data/people.json'

    return axios.get(url)
}

export const getPerson = (url, live) => {
    url = live ? url : 'http://localhost:3000/data/person.json'

    return axios.get(url)
}