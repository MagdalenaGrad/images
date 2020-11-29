import React, {useState, useEffect, useRef} from 'react';

const ImageCard = ({image}) => {
  const [spans, setSpans] = useState(0)

  useEffect(()=>{
    imgHeight.current.addEventListener('load', calcSpans)
  }, [])

  const imgHeight = useRef(null)

  const calcSpans = () => {
    const height = imgHeight.current.clientHeight
    const spans = Math.ceil(height / 10 + 1)
    console.log(spans, height)
    setSpans(spans)
  }

  const {alt_description, urls} = image
  return (
    <div style={{gridRowEnd: `span ${spans}`}}><a href={urls.full}><img ref={imgHeight} alt={alt_description} src={urls.regular}/></a></div>
  )
}

export default ImageCard