import React, { useState } from 'react'
import './CarouselGallery.css'

const CarouselGallery = ({ images, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
  }

  const getImageIndex = offset => {
    return (currentIndex + offset + images.length) % images.length
  }

  const displayInfo = img => onImageClick(img)

  return (
    <div className='carousel-container'>
      <button className='nav-button left' onClick={goToPrevious}>‹</button>

      <div className='carousel-images'>
        <img
          src={images[getImageIndex(-1)]}
          alt='Previous'
          className='carousel-image behind left-image' />
        <img
          src={images[currentIndex]}
          alt='Current'
          className='carousel-image front'
          onClick={() => displayInfo(images[currentIndex])} />
        <img
          src={images[getImageIndex(1)]}
          alt='Next'
          className='carousel-image behind right-image' />
      </div>

      <button className='nav-button right' onClick={goToNext}>›</button>
    </div>
  )
}

export default CarouselGallery
