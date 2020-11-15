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
import Navbarclient from './NavbarClient'

export default class Cart extends Component {

    render() {
        return (
            <>
                <Container className="my-5">
                  <Row>
                      <Col md={9}>
                        <Card className="p-3">
                            <Container fluid>
                                <Row>
                                    <Col md={3}>
                                        <Imagecontainer items={'https://product.hstatic.net/1000351433/product/4a3c7686-0b83-4ab1-abff-de3d21a1758e_31d51d9c063940f09bddd0e5ac3475d3_grande.jpg'}/>
                                    </Col>
                                    <Col md={9}>
                                            <h3>
                                                {'anc'}
                                            </h3>
                                            <h5 className="text-warning">
                                                Price: {2}$
                                            </h5>
                                            <Commonquantityinput/>
                                            <Button color="primary" outline>Submit</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Card>
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
