import axios from 'axios'
import { BaseUrl } from './Env'

export const getFilms = (live) => {
    var url = live ? `${BaseUrl}films` : 'http://localhost:3000/data/films.json'

    return axios.get(url)
}

export const getFilm = (url, live) => {
    url = live ? url : 'http://localhost:3000/data/film.json'

    return axios.get(url)
}