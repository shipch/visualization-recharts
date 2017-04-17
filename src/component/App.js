import React, { Component } from 'react'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import reactCSS from 'reactcss'
import {Link} from 'react-router'


import '../stylesheet/main.css'
import '../stylesheet/home.css'
import '../stylesheet/animate.min.css'
import Background from '../image/syria.jpg'




class App extends Component {
  render(){
    const styles = reactCSS({
      'default': {
        navheader: {
        backgroundColor : "transparent",
        border : "transparent",
      },
      navItem: {
        color:"white"

      },
      },
    })
    return (
      <div className="homepage">

    <section id="main-slider" className="no-margin">
        <div className="carousel slide">

            <div className="carousel-inner">

                <div className="item active" style={{backgroundImage: `url(${Background})`}}>
                <header id="header">
  <Navbar inverse collapseOnSelect style={styles.navheader}>
    <Navbar.Header>
      <Navbar.Brand>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">  
                 <Link to='about'>
          <span style={styles.navItem}>Thing 2</span>
                  </Link>

        </NavItem>
        <NavItem eventKey={1} href="#" >  
          <span style={styles.navItem}>Thing 2</span>
        </NavItem>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown" style={styles.navItem}>
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#" >  
          <span style={styles.navItem}>Thing 2</span>
        </NavItem>
        <NavItem eventKey={1} href="#" >  
          <span style={styles.navItem}>Thing 2</span>
        </NavItem>
        </Nav>
    </Navbar.Collapse>
  </Navbar>
                  </header>
                                      <div className="container">
                        <div className="row slide-margin">
                            <div className="col-sm-6">
                                <div className="carousel-content">
                                    <h1 className="animation animated-item-1" style={{color:'white'}}>“A nation that cannot control its borders is not a nation.” </h1>
                                    <h2 className="animation animated-item-2">- Ronald Reagan -</h2>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>

    </section>
         {this.props.children}
        <h1>Footer</h1>
      </div>
    )
  }
}

export default App
