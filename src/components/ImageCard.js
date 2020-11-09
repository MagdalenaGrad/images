import React from 'react';

class ImageCard extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      spans: 0
    }
    this.imageRef = React.createRef()
  }

  componentDidMount () {
    this.imageRef.current.addEventListener('load', this.setSpans)
    // console.log(this.imageRef.current.clientHeight)
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight
    const spans = Math.ceil(height / 10 + 1)
    this.setState({spans})

  }

  render () {
    const {alt_description, urls} = this.props.image
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}><a href={urls.full}><img ref={this.imageRef} alt={alt_description} src={urls.regular}/></a></div>
    )
  }
}

export default ImageCard