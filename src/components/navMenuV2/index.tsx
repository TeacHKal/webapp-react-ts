import React from 'react';
import {RouteComponentProps} from "react-router-dom";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Avatar} from '../baseComponents/avatar';
import pictures from '../../resources/pictures';
//interface props extends RouteComponentProps {}
import "bootstrap/dist/css/bootstrap.min.css";
interface IProps{

}

export const NavMenuV2: React.FC<IProps> = (props) => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <Avatar
                    width={30}
                    path={pictures.siteAvatar}
                    //className="d-inline-block align-top"
                />
                TeacH Kal
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
