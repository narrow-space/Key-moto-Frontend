import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../../images/logo1.png'
import Useauth from '../../Hooks/Useauth';
const Header = () => {
  const { user, logOut, admin } = Useauth()
  return (




    <div className=" header-container">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand ><Link to="/home"><img style={{ "width": "150px" }} src={logo} alt="" />  </Link> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Link className="text-decoration-none p-3" to="/home"><span > Home</span>  </Link>
              <Link className="text-decoration-none p-3" to="/explore"><span >Explore</span></Link>
                  {

                user.email ? <button onClick={logOut} className="btn btn-light"><i className="fas fa-sign-out-alt"></i>Logout</button> :
                  <Link className="text-decoration-none p-3" to="/login"><span > Login</span></Link>


                    }

              {
                user.email &&
                <span className="p-3">Name:{user?.displayName}</span>

              }




              {
                admin &&
                <>


                  <NavDropdown className="fs-6 mt-2" active title="Dashboard" id="basic-nav-dropdown">
                    <Link className="text-decoration-none " to="/manageallorders"><NavDropdown.Item href="#action/3.1">Manage All Orders</NavDropdown.Item></Link>

                    <Link className="text-decoration-none " to="/addproducts"><NavDropdown.Item href="#action/3.2">Add A Product</NavDropdown.Item></Link>

                    <Link className="text-decoration-none " to="/makeadmin"> <NavDropdown.Item href="#action/3.3" > Make Admin</NavDropdown.Item></Link>

                    <Link className="text-decoration-none " to="/manageproducts"> <NavDropdown.Item href="#action/3.4" >Manage Products</NavDropdown.Item></Link>



                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logOut}>Log out</NavDropdown.Item>






                  </NavDropdown>
                </>
              }






              {
                user.email && !admin &&
                <>


                  <NavDropdown className="fs-6 mt-2" active title="Dashboard" id="basic-nav-dropdown">
                    <Link className="text-decoration-none " to="/pay"><NavDropdown.Item href="#action/3.1">Pay</NavDropdown.Item></Link>

                    <Link className="text-decoration-none " to="/myorders"><NavDropdown.Item href="#action/3.2">My orders</NavDropdown.Item></Link>

                    <Link className="text-decoration-none " to="/review"> <NavDropdown.Item href="#action/3.3" >Review</NavDropdown.Item></Link>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logOut}>Log out</NavDropdown.Item>






                  </NavDropdown>
                </>
              }


















            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>





    </div>
  );
};

export default Header;