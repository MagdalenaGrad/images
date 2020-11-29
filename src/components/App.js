import React, {useState} from 'react'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import LoadMore from './LoadMore'
import useImgs from '../hooks/useImgs'

const App = () => {
  const [list, search] = useImgs('dogs')

  return (
    <div className="ui container">
      <SearchBar onSubmit={search} />
      <ImageList images={list} />
      {list.length > 1 ? <LoadMore /> : ''}
    </div>
  )
}

export default App