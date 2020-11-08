import React from 'react'
import Product from './Product'
import { 
    Row, Spinner, 
} from 'reactstrap';
import Axios from 'axios';

export default class Productlist extends React.Component {
    state={
        products:[],
        loading:false
    }

    componentDidMount(){
        this.setState({
            loading:true
        })
        Axios.get('https://shopping-api-with-jwt.herokuapp.com/products').then(res=>{
            this.setState({
                products:res.data,
                loading:false
            })
        }).catch(err=>{
            console.log(err)
        })
    }

    render(){
        return (
            <Row>
                {this.state.loading &&  <Spinner color="primary" />}
                {this.state.products.map((product,index)=>{
                    return <Product key={`$product_${index}`} name={product.name} img={product.image} price={product.price}/>
                 })}
            </Row>
        )
    }
  
}
