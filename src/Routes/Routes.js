import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../Pages/Home/Home'
import Category from '../Pages/category/Category'
import News from '../Pages/News/News'
import { Login } from '../Pages/login/Login'
import Register from '../Pages/login/Register'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/news'),
      },
      {
        path: '/category/:id',
        element: <Category></Category>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/categori/${params.id}`)
        },
      },
      {
        path: '/news/:id',
        element: <News></News>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/news/${params.id}`)
        },
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
])
