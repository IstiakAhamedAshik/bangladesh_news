import React from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
  FaWhatsapp,
  FaTwitterSquare,
} from 'react-icons/fa'
import ListGroup from 'react-bootstrap/ListGroup'
import CarouselItem from '../Carousel/CarouselItem'
const RightSideNews = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button variant='outline-primary'>
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button className='mt-2' variant='outline-dark'>
          <FaGithub></FaGithub> Login with Github
        </Button>
      </ButtonGroup>
      <div className='mt-3'>
        <p>Find us on</p>
        <ListGroup>
          <ListGroup.Item className='mt-2'>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className='mt-2'>
            <FaYoutube /> Youtube
          </ListGroup.Item>
          <ListGroup.Item className='mt-2'>
            <FaTwitterSquare /> Twiter
          </ListGroup.Item>
          <ListGroup.Item className='mt-2'>
            <FaWhatsapp /> Whats App
          </ListGroup.Item>
          <ListGroup.Item className='mt-2'>
            <FaInstagramSquare /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className='mt-4'>
        <CarouselItem></CarouselItem>
      </div>
    </div>
  )
}

export default RightSideNews
