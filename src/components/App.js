import React from 'react'
import axiosCall from '../api/unsplash' 
import SearchBar from './SearchBar'

class App extends React.Component {
  state = {
    list: []
  }

   onSearchSubmit = async (q) => {
    try {
    const res = await axiosCall.get('https://api.unsplash.com/search/photos', {
      params: {
        query: q
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
        <div>
          {this.state.list.length}
        </div>
      </div>
    )
  }
}

export default App