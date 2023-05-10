import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { FaStar } from 'react-icons/fa'
const News = () => {
  const news = useLoaderData()
  const { title, image_url, details, author, rating, category_id } = news
  return (
    <div>
      <Card>
        <Card.Img variant='top' src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className='d-flex justify-content-between align-items-center'>
            <p>Author :{author.name}</p>
            <p>Published Date :{author.published_date}</p>
            <div className='d-flex align-items-center'>
              <FaStar className='text-warning me-2' />
              <span>{rating.number}</span>
            </div>
          </div>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant='primary'>AllNewsThisCategory</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default News
