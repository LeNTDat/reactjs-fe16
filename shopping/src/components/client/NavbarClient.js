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
    UncontrolledDropdown, 
    Navbar}
from 'reactstrap'
import {NavLink} from 'react-router-dom'
import { ShoppingCartSolid } from '../../assets/icons/shopping-cart-solid';
import {connect} from 'react-redux';

function Navbarclient(props) {
    
    const toggle=false;
    const isOpen=false;

    return (
        <Container fluid={true}>
            <Navbar color="light" light expand="md">
                <NavbarBrand>
                    <NavLink exact to="/">
                        LOGO
                    </NavLink>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                          <NavLink to="/products/">Products</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/cart">Cart</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <div className="cart-icon">
                            <span class="badge badge-pill badge-primary">{props.cart_total}</span>
                            <ShoppingCartSolid/>
                        </div>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </Container>
    )
}

const mapStateToProps = (state)=>{
    const total = state.cart.reduce((sum,product)=>{
        return sum = product.quantity + sum
    },0) // tinh tong so luong san pham trong gio
    return {
        cart_total:total
    }
}

export default connect(mapStateToProps)(Navbarclient)