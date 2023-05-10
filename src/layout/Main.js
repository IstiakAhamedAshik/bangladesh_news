import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Header from '../Shared page/header/Header'
import Footer from '../Shared page/footer/Footer'
import LeftSideNews from '../Shared page/leftSideNews/LeftSideNews'
import RightSideNews from '../Shared page/RightSideNews/RightSideNews'

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container fluid='md'>
        <Row>
          <Col lg='2' className='d-none d-lg-block'>
            <LeftSideNews></LeftSideNews>
          </Col>
          <Col lg='5'>
            <Outlet></Outlet>
          </Col>
          <Col lg='3'>
            <RightSideNews></RightSideNews>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default Main
