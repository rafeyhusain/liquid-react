import axios from 'axios'
import { BaseUrl } from './Env'

export const getShips = (live) => {
    var url = live ? `${BaseUrl}starships` : 'http://localhost:3000/data/ships.json'

    return axios.get(url)
}

export const getShip = (url, live) => {
    url = live ? url : 'http://localhost:3000/data/ship.json'

    return axios.get(url)
}