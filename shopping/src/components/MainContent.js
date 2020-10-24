import React from 'react'
import ProductRow from './ProductRow'

export default function MainContent(){
    return  <main>
    <div className="content-header color">
        <h3>Products</h3>
        <button>+ Add</button>
    </div>
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
        <ProductRow name="Product 1" price="2" id="1" image="https://kmin.edu.vn/assets/teacher/ashark.png"></ProductRow>
        <ProductRow name="Product 2" price="3" id="2" image="abc"></ProductRow>
        <ProductRow></ProductRow>
        <ProductRow></ProductRow>

    </div>
</main>

}