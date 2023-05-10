import React, { useEffect, useState } from 'react'

import Newsnum from './Newsnum'

const LeftSideNews = () => {
  const [categories, setCategories] = useState()

  useEffect(() => {
    fetch('http://localhost:5000/news-catogories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
  }, [])
  return (
    <div>
      <h5>All Catogories</h5>
      <div>
        {categories?.map((categori) => (
          <Newsnum key={categori.id} categori={categori}></Newsnum>
        ))}
      </div>
    </div>
  )
}

export default LeftSideNews
