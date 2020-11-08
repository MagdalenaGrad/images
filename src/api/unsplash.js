import axios from 'axios'

export default axios.create({
  headers: {
    Authorization: 'Client-ID WonG8JY9aI3ALLwEM91j15PAWBRM3NPBzHjOOZF9P3A'
  },
  baseURL: 'https://api.unsplash.com/'
})