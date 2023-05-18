import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { AuthContext } from '../../context/Authprovider/Authprovider'
import { useLocation, useNavigate } from 'react-router-dom'
export const Login = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  let location = useLocation()
  let from = location.state?.from?.pathname || '/'

  const handlelogin = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    console.log(email, password)
    login(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
        navigate(from, { replace: true })
        form.reset()
      })
      .catch((error) => {
        console.log('error', error)
      })
  }
  return (
    <div>
      <Form onSubmit={handlelogin}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type='email' placeholder='Enter email' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name='password'
            type='password'
            placeholder='Password'
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Login
        </Button>
      </Form>
    </div>
  )
}
