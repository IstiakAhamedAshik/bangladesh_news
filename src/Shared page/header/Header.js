import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { FaUser } from 'react-icons/fa'
import LeftSideNews from '../leftSideNews/LeftSideNews'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/Authprovider/Authprovider'
import { Button, Image } from 'react-bootstrap'

const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  const handlelogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'
        className='mb-3'
      >
        <Container>
          <Navbar.Brand>
            <Link to='/'>BanglaDesh News</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#features'>All News</Nav.Link>
              <Nav.Link href='#pricing'>Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='#deets'>{user?.displayName}</Nav.Link>
              <Nav.Link>
                {user?.uid ? (
                  <>
                    <Image
                      rounded
                      style={{ height: '30px' }}
                      src={user?.photoURL}
                    ></Image>
                    <Button
                      className='ms-2'
                      variant='info'
                      onClick={handlelogout}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                    <FaUser className='ms-3'></FaUser>
                  </>
                )}
              </Nav.Link>
            </Nav>
            <div className='d-lg-none'>
              <LeftSideNews></LeftSideNews>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
