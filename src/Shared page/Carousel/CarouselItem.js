import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import pic1 from '../.././asset/brands/1.jpg'
import pic2 from '../.././asset/brands/2.jpg'
const CarouselItem = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' src={pic1} alt='First slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100 ' src={pic2} alt='Second slide' />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselItem
