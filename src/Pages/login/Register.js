import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { AuthContext } from '../../context/Authprovider/Authprovider'

const Register = () => {
  const { createUser } = useContext(AuthContext)
  const handleSubmit = (event) => {
    event.preventDefault()
    const from = event.target
    const name = from.name.value
    const email = from.email.value
    const url = from.photoUrl.value
    const password = from.password.value

    createUser(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
      })
      .catch((error) => {
        console.log('error:', error)
      })
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>User name</Form.Label>
          <Form.Control name='name' type='text' placeholder='Enter user name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            name='photoUrl'
            type='text'
            placeholder='Enter photo url'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name='email'
            type='email'
            placeholder='Enter email'
            required
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name='password'
            type='password'
            placeholder='Password'
            required
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Signup
        </Button>
      </Form>
    </div>
  )
}

export default Register
