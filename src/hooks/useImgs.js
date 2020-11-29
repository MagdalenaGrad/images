import {useState, useEffect} from 'react'
import unsplash from '../api/unsplash'

const useImgs = (defaultSearchTerm) => {
  const [list, setList] = useState([])
  useEffect(()=>{
    search(defaultSearchTerm)
  }, [])
  const search = async (q) => {
    try {
    const res = await unsplash.get('https://api.unsplash.com/search/photos', {
      params: {
        query: q,
        per_page: 20,
        page: 1
      }
    })
    setList(res.data.results)
    console.log(res)
    } catch (e) {
      console.log(e)
    }
  }
  return [list, search]
}

export default useImgs