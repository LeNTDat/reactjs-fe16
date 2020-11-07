import React from 'react'
import Product from './Product'
import { 
    Row, 
} from 'reactstrap'
export default class Productlist extends React.Component {
    state={
        products:[{"name":"Product 0","price":65,"img":"https://product.hstatic.net/1000351433/product/e5c92366-2f71-425b-8d4b-49be6b8d2399_36fdea90d03a43cf8c53c7079f0c2db1_grande.jpg"},{"name":"Product 1","price":15,"img":"https://product.hstatic.net/1000351433/product/2e35c540-17a6-467c-9ba3-f79441278f95_0b9cf34a976141858c255bf20260929e_grande.jpg"},{"name":"Product 2","price":80,"img":"https://product.hstatic.net/1000351433/product/9792bb1b-166c-4ea0-a9a2-8ca8986f6b24_18a905a5e6554acb91c51f691df48518_grande.jpg"},{"name":"Product 3","price":40,"img":"https://product.hstatic.net/1000351433/product/bf9d7ad1-8566-44f2-8b23-347680e98612_cd9f1bc7bbe244cf96dddf4c88607497_grande.jpg"},{"name":"Product 4","price":74,"img":"https://product.hstatic.net/1000351433/product/5f0df9ac-1630-4bd0-8d40-74150952c03f_0b852dbc36c84bfeb0d81d8ecb037a64_grande.jpg"},{"name":"Product 5","price":16,"img":"https://product.hstatic.net/1000351433/product/9b7b9316-075c-4e9f-a401-1581aa5a81bd_184ddd6bc34145fbb1414e4d213d75c8_grande.jpg"},{"name":"Product 6","price":9,"img":"https://product.hstatic.net/1000351433/product/z2147232346500_ea9a4c3613a2203db7e3836bdc2980d1_e26d05e95354402b9fd4483137d7dbc4_grande.jpg"},{"name":"Product 7","price":91,"img":"https://product.hstatic.net/1000351433/product/1_a0a2a6dc66894a409db66d91760fdec0_grande.jpg"},{"name":"Product 8","price":53,"img":"https://product.hstatic.net/1000351433/product/03c36126-a0cb-4ae7-8e9b-e539bc0cdcce_282e1c6e7def4304a279ec06121defa7_grande.jpg"},{"name":"Product 9","price":94,"img":"https://product.hstatic.net/1000351433/product/b06ca889-a567-4865-aa1b-11793f5f9e92_73f52bb5ec9c4e5fa745a71533614277_grande.jpg"},{"name":"Product 10","price":37,"img":"https://product.hstatic.net/1000351433/product/8a8ec5d4-7206-4138-b40c-63c6ce7a8357_fd19a6ec60564f1db5cf1e268de3537a_grande.jpg"},{"name":"Product 11","price":11,"img":"https://product.hstatic.net/1000351433/product/5055b824-d09e-4cc9-a407-f83eca4ddad3_0288a0865fe04949972791d0e3289f75_grande.jpg"},{"name":"Product 12","price":6,"img":"https://product.hstatic.net/1000351433/product/8926eaad-d33c-4700-94d2-4f45e5f39397_74f02e1f723649e4adb597476dcdfcd4_grande.jpg"},{"name":"Product 13","price":51,"img":"https://product.hstatic.net/1000351433/product/9f6d8b7e-397a-4c4d-91fa-5d773f2ff7a1_654b4e58c29740118b689b3179bb0384_grande.jpg"},{"name":"Product 14","price":52,"img":"https://product.hstatic.net/1000351433/product/heat1_70de580ccb8a49ab84e03fe18cb2874c_grande.jpg"},{"name":"Product 15","price":76,"img":"https://product.hstatic.net/1000351433/product/193d9383-2e68-459f-9410-5e2401faafd0_0acca79e2ab04140913356573bf595f0_grande.jpg"},{"name":"Product 16","price":89,"img":"https://product.hstatic.net/1000351433/product/a1612015-3b99-4f80-a884-b24ef08296e8_30c6eeb7acb048589f3b3f8146d0c0ac_grande.jpg"},{"name":"Product 17","price":41,"img":"https://product.hstatic.net/1000351433/product/02ed9133-9013-402d-9ba2-0cbac9abaa02_f990c5b32055460c90bfe5cafe24a62b_grande.jpg"},{"name":"Product 18","price":76,"img":"https://product.hstatic.net/1000351433/product/wash_5f5afef0247d4b2eabcb1e4530da4612_grande.jpg"},{"name":"Product 19","price":93,"img":"https://product.hstatic.net/1000351433/product/4a3c7686-0b83-4ab1-abff-de3d21a1758e_31d51d9c063940f09bddd0e5ac3475d3_grande.jpg"}]
    }
    render(){
        return (
            <Row>
                {this.state.products.map((product,index)=>{
                    return <Product key={`$product_${index}`} name={product.name} img={product.img} price={product.price}/>
                 })}
            </Row>
        )
    }
  
}
