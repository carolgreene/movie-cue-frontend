import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

export const Layout = (props) => (
  <Container fluid={true}> 
    <Row style={{ marginLeft: -15, marginRight: -15 }}>
      <Col style={{ paddingLeft: 0, paddingRight: 0 }}>    
        {props.children} 
      </Col>
    </Row>
  </Container>
)

