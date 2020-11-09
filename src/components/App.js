import React from 'react'
import axiosCall from '../api/unsplash' 
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {
  state = {
    list: []
  }

   onSearchSubmit = async (q) => {
    try {
    const res = await axiosCall.get('https://api.unsplash.com/search/photos', {
      params: {
        query: q,
        per_page: 20
      }
    })
    this.setState({list: res.data.results})
    console.log(res)
    } catch (e) {
      console.log(e)
    }
  }
  render () {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.list} />
      </div>
    )
  }
}

export default App