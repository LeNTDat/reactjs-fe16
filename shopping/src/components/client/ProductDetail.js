import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Col,
     Container, 
     Row,
     Typography,
     FormGroup,
     Label,
     Input,
     Button,
     Card,
     Spinner, } from 'reactstrap'
import { Commonquantityinput } from './CommonQuantityInput'
import Imagecontainer from './ImageContainer'
import Navbarclient from './NavbarClient'
import Axios from 'axios'
import API_CONSTANT  from '../../assets/constants/api'
class Productdetail extends Component {
    state={
        quantity:0,
        product_detail:{
            id:null,
            name:'',
            image:[]
        },
        loading:undefined

    }
    componentDidMount(){
        this.setState({
            loading:true,
        })
        Axios.get(`${API_CONSTANT.DOMAIN}/products/${this.props.match.params.id}`).then(res=>{
            this.setState({
                product_detail:res.data,
                loading:false
            })
        }).catch(err=>{
            console.log(err)
        })
    }
    handleChangeQuantity=(data)=>{
        this.setState({
            quantity:this.state.quantity + data
        })
    }
    items ='https://product.hstatic.net/1000351433/product/4a3c7686-0b83-4ab1-abff-de3d21a1758e_31d51d9c063940f09bddd0e5ac3475d3_grande.jpg'
    render() {
        const {name,price,image} = this.state.product_detail;
        return (
            <>
                <Navbarclient/>
                {this.state.loading === false ?
                  <Container className="my-5">
                  <Row>
                      <Col md={3} cls>
                          <Imagecontainer items={image}/>
                      </Col>
                      <Col md={9}>
                          <Card className="p-3">
                              <h3>
                                  {name}
                              </h3>
                              <h5 className="text-warning">
                                  Price: {price}$
                              </h5>
                              <Commonquantityinput onChange={this.  handleChangeQuantity} value={this.state.quantity}/>
                              <Button color="primary" outline>Submit</Button>
                          </Card>
                      </Col>
                  </Row>      
              </Container>
              :
              <div className="loading d-flex justify-content-center align-items-center">
                   <Spinner color="primary" />
                </div>}
              {/* 
                    Img container (Big img, 3 small img)
                    Info container
                     = Product name
                     = Product price
                     = Quantity Input
                     = Add to cart Button
                     
                
                */}
            </>
        )
    }
}

export default withRouter(Productdetail)