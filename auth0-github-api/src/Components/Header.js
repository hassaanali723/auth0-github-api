import React, { Component } from 'react';
import {Navbar, Nav, NavItem, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Header extends Component {

    onLogin(){
        this.props.onLogin();
    }
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
          <Navbar>
              <Container>
                  <Navbar.Brand>
                      Github Searcher
                  </Navbar.Brand>

              </Container>
             <Nav>
                 <NavItem>
                 <Nav.Link onClick={this.onLogin.bind(this)} href="#">Home</Nav.Link>
                 </NavItem>
             </Nav>
          </Navbar>
          </div>
         );
    }
}
 
export default Header;