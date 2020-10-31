import React from 'react'
import ContentHeader from './ContentHeader'
import Modal from './Modal'
import ProductRow from './ProductRow'

export default class MainContent extends React.Component{
    state={
        open:false,
        products : [
        ]
    }

    addProduct=(name,image,price)=>{
        const product={
            id:this.state.products.length,
            name,
            image,
            price
        }
        this.setState({
            products:[...this.state.products,product]
        })

    }
    toggleModal=()=>{
        this.setState({
            open:!this.state.open
        })
    }
    render(){
        return  <>
        <main>
                <ContentHeader toggleModal={this.toggleModal} addProduct={this.addProduct}/>    
                <div className="content-table">
                    <div className="table-headers">
                        <div className="table-header">
                            Id
                        </div>
                        <div className="table-header">
                            Name
                        </div>
                        <div className="table-header">
                            Price
                        </div>
                        <div className="table-header">
                            Image
                        </div>
                        <div className="table-header">
                            Action
                        </div>
                    </div>
                    {
                        this.state.products.length>0?
                        this.state.products.map((product)=>{
                            return <ProductRow  key={`product_id_${product.id}`} product={product}/>
                        })
                        :<h3>EMPTY</h3>
                    }
                </div>
            </main>
            {
                this.state.open?<Modal addProduct={this.addProduct} toggleModal={this.toggleModal}/>:''
            }
        </>
    }
}