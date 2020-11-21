import React, { Component } from 'react'
import { 
    Container,
    Row,
    Col,
    Card,
    Button,
} from 'reactstrap'
import { Commonquantityinput } from './CommonQuantityInput'
import Imagecontainer from './ImageContainer'
import {connect} from 'react-redux';
import Swal from 'sweetalert2'

class CartPorduct extends React.Component {
    state={
        quantity: 0,
    }
    componentDidMount(){
        this.setState({quantity:this.props.product.quantity})
    }

    handleDelete=()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                console.log(this.props.product.id_cart);
                this.props.deleteCart(this.props.product.id_cart)
                Swal.fire(
                   {
                       title:"Deleted",
                       showConfirmButton:false,
                       timer:1000,
                       icon:'success',
                       timerProgressBar:true
                   }
                )
            }
          })
    }
    handleChangeQuantity=(data,operator = false)=>{
        if(operator){
            if(this.state.quantity === 1 && data === -1){
                //delete
                this.handleDelete()
            }
            return this.setState({
                quantity:this.state.quantity + data
            },()=>{
                this.props.updateCart(this.props.product.id_cart,this.state.quantity)
            })
        }
        if(data === 0 || data < 0 ){
            //delete
            return this.handleDelete()
        }
        this.setState({
            quantity: data
        },()=>{
            this.props.updateCart(this.props.product.id_cart,this.state.quantity)
        })
    }
   render(){
    const {name,price,quantity,images,id,cart_id} = this.props.product;
    return <Card className="p-3">
        <Container fluid>
            <Row>
                <Col md={3}>
                    {/* <Imagecontainer items={images}/> */}
                    <img src={images}></img>
                </Col>
                <Col md={9}>
                        <h3>
                            {name}
                        </h3>
                        <h5 className="text-warning">
                            Price: {price}$
                        </h5>
                        <Commonquantityinput onChange={this.handleChangeQuantity} value={this.state.quantity} />
                        <Button color="primary" outline>Submit</Button>
                </Col>
            </Row>
        </Container>
    </Card>
   }
}

class Cart extends Component {

    render() {
        return (
            <>
                <Container className="my-5">
                  <Row>
                      <Col md={9}>
                          {this.props.cart.length>0 ? 
                          this.props.cart.map(product=>{
                              return <CartPorduct deleteCart={this.props.deleteCart} updateCart={this.props.updateCart} product={product} key={product.cart_id}/>
                          }):
                          <h3>Empty</h3>}
                      </Col>
                      <Col md={3} cls>
                          <Card className="p-3">
                              <h3>Total items: 20 </h3>
                              <h4 className="text-warning">Total price: 200$</h4>
                              <Button color="primary" >Checkout</Button>
                          </Card>
                      </Col>
                  </Row>      
              </Container>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart:state.cart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateCart: (id_cart,quantity) => {
            dispatch({
                type:"UPDATE_CART",
                payload:{
                    id_cart,
                    quantity
                }
            })
        },
        deleteCart: id_cart => {
            dispatch({
                type:"DELETE_CART",
                payload: id_cart
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)