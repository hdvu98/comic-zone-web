import React, { useState } from 'react';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    NavDropdown,
    Dropdown
} from 'react-bootstrap';
import IntegrationDownshift from '../../components/input/search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import logo from '../../assets/logo.png';
import {MENU} from '../../common/constant/menu';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {username} ={username: 'Hoàng Dương'}

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar bg="dark" id="header" expand="lg" fixed="top" variant="dark">
    <Navbar.Brand href="/"><img className="logo" alt="" src={logo}></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav bg-dark" >
    <Nav className="mr-auto">
        {
            MENU.map((item,index)=>{
                if(item.children)
                return( 
                <NavDropdown title={item.parents} id="collasible-nav-dropdown">
                    {item.children.map(item=>(<NavDropdown.Item href="/">{item.category || item.country}</NavDropdown.Item>))}
                </NavDropdown>)

                return(<Nav.Link>{item.parents}</Nav.Link>);
            })
        }
    </Nav>
    <IntegrationDownshift/>
    <div>
    <Dropdown alignRight>
  <Dropdown.Toggle variant="dark" id="dropdown-basic">
  <AccountCircle />{username}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#=">Cập nhật thông tin</Dropdown.Item>
    <Dropdown.Item href="#">Đổi mật khẩu</Dropdown.Item>
    <Dropdown.Item href="#">Lịch sử đọc</Dropdown.Item>
    <Dropdown.Item href="#">Yêu thích</Dropdown.Item>
    <Dropdown.Item href="#">Đăng xuất</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
  
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Example;