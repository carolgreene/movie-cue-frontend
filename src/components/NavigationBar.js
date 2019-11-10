import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Styles = styled.div`
  .navbar {
    background-color: #222;    
  }

  .navbar-toggler {
    background-color: #bbb;
  }

  .navbar-light .navbar-brand {
    color: #bbb;
    
    &:hover {
      color: #bbb
    }
  }  
  
  a, .navbar-nav .nav-link {
    color: #bbb;
    
    &:hover {
      color: white;
    }    
  }  
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand>Movie Cue</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
       <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item componentclass='span'>
            <Nav.Link>
               <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item componentclass='span'>
            <Nav.Link> 
              <Link to="/movies">Movies</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item componentclass='span'>
            <Nav.Link>
              <Link to="/movies/new">Add Movie</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

