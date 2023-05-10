import React from 'react'
import { Link } from 'react-router-dom'

const Newsnum = (props) => {
  const { id, name } = props.categori
  return (
    <div>
      <p>
        <Link to={`/category/${id}`}>{name}</Link>
      </p>
    </div>
  )
}

export default Newsnum
