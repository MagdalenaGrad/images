import React, {useState} from 'react'

const SearchBar = ({onSubmit}) => {

  const [query, setQuery] = useState('') 

  const onFormSubmit = (e) => {
    e.preventDefault()
    onSubmit(query)
  }

  const onInputChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className="ui segment" style={{marginTop: '1rem'}}>
      <form className="ui form" action="" onSubmit={onFormSubmit}><div className="field">
        <label htmlFor="">Image Search</label>
        <input type="text" value={query} name="" id="" onChange={onInputChange}/>
      </div></form>
    </div>
  )
}

export default SearchBar