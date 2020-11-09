import React from 'react'
import '../style/ImageList.css'
import ImageCard from './ImageCard'

const ImageList = (props) => {
  const images = props.images.map(item => {
    return (
      <ImageCard key={item.id} image={item} ></ImageCard>
    )
  })
  return (
  <div className="image-list">{images}</div>
  )
}

export default ImageList