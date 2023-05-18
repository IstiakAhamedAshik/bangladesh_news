import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { AuthContext } from '../../context/Authprovider/Authprovider'

const Register = () => {
  const { createUser, updateProfileUser } = useContext(AuthContext)
  const [accepted, setAccepted] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const url = form.photoUrl.value
    const password = form.password.value

    createUser(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
        setUserProfile(name, url)
        form.reset()
      })
      .catch((error) => {
        console.log('error:', error)
      })
  }
  const setUserProfile = (name, url) => {
    let profile = {
      displayName: name,
      photoURL: url,
    }
    updateProfileUser(profile)
      .then(() => {})
      .catch((error) => {
        console.log('error:', error)
      })
  }

  const handalechecked = (event) => {
    setAccepted(event.target.checked)
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
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check
            onClick={handalechecked}
            type='checkbox'
            label='Check me out'
          />
        </Form.Group>
        <Button variant='primary' type='submit' disabled={!accepted}>
          Signup
        </Button>
      </Form>
    </div>
  )
}

export default Register
