import axios from 'axios'
import { BaseUrl } from './Env'

export const getShips = (live) => {
    var url = live ? `${BaseUrl}starships` : 'http://localhost:3000/data/starships.json'

    return axios.get(url)
}