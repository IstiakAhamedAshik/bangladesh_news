import React from 'react'
import { useLoaderData } from 'react-router-dom'

import ShowNews from '../../Shared page/shownews/ShowNews'

const Category = () => {
  const categoriNews = useLoaderData()
  console.log(categoriNews)

  return (
    <div>
      Category news : {categoriNews.length}
      <div>
        {categoriNews.map((news) => (
          <ShowNews key={news._id} news={news}></ShowNews>
        ))}
      </div>
    </div>
  )
}

export default Category
