import React from 'react'

class SearchBar extends React.Component {
  state = {
    query: ''
  }
  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.query)
  }
  onInputChange = (e) => {
    this.setState({query: e.target.value})
  }
  render () {
    return (
    <div className="ui segment" style={{marginTop: '1rem'}}>
      <form className="ui form" action="" onSubmit={this.onFormSubmit}><div className="field">
        <label htmlFor="">Image Search</label>
        <input type="text" value={this.state.query} name="" id="" onChange={this.onInputChange}/>
      </div></form>
    </div>
    )
  }
}

export default SearchBar