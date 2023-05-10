import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { FaBookmark, FaShareAltSquare, FaStar, FaEye } from 'react-icons/fa'
import Image from 'react-bootstrap/Image'
const ShowNews = ({ news }) => {
  const { title, details, _id, image_url, author, rating, total_view } = news
  return (
    <div>
      <Card className='mb-3'>
        <Card.Header className='d-flex justify-content-between align-items-center'>
          <div className='d-flex'>
            <Image style={{ height: '50px' }} src={author.img} roundedCircle />
            <div className='ms-2'>
              <p className='mb-0'>{author.name}</p>
              <p>{author.published_date}</p>
            </div>
          </div>
          <div className='d-flex'>
            <FaBookmark className='me-2' />
            <FaShareAltSquare />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div>
            <Card.Img variant='top' src={image_url} />
          </div>
          <Card.Text>
            {details.length > 250 ? (
              <p>
                {details.slice(0, 250) + '...'}
                <Link to={`/news/${_id}`}>Read more</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-between'>
          <div className='d-flex align-items-center'>
            <FaStar className='text-warning me-2' />
            <span>{rating.number}</span>
          </div>
          <div className='d-flex align-items-center'>
            <FaEye className='me-2' />
            <span>{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default ShowNews
