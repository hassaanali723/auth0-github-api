import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
          <Navbar>
              <Navbar.Header>
                  <Navbar.Brand>
                      Github Searcher
                  </Navbar.Brand>

              </Navbar.Header>
             <Nav>
                 <NavItem>
                    Login 
                 </NavItem>
             </Nav>
          </Navbar>
          </div>
         );
    }
}
 
export default Header;