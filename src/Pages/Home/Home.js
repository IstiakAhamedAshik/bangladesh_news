import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ShowNews from '../../Shared page/shownews/ShowNews'

const Home = () => {
  const allnews = useLoaderData()
  return (
    <div>
      <h4>this is Home news :{allnews.length}</h4>
      <div>
        {allnews.map((news) => (
          <ShowNews key={news._id} news={news}></ShowNews>
        ))}
      </div>
    </div>
  )
}

export default Home
