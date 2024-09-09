import React from 'react'
import './RoundedImage.css'


export const RoundedImage = ({ src, alt, width}) => {
    return (
        <img src={src} alt={alt} className={`${width} rounded-image`} />
  )
}
