import React from 'react'
import {
    Collapse, 
    Container, 
    DropdownItem, 
    DropdownMenu,
    NavbarText, 
    DropdownToggle, 
    Nav, 
    NavbarBrand, 
    NavbarToggler, 
    NavItem, 
    NavLink, 
    UncontrolledDropdown, 
    Navbar}
from 'reactstrap'
export default function Navbarclient(props) {
    
    const toggle=false;
    const isOpen=false;

    return (
        <Container fluid={true}>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Options
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                        Option 1
                        </DropdownItem>
                        <DropdownItem>
                        Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        Reset
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
        </Container>
    )
}
