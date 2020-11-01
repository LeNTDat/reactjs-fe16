import React from 'react'
import BarsSolid from '../assets/icons/bars-solid'

export default function Navbar(props){
    return   <div className="navbar">
   <button onClick={props.toggleSidebar}>
        <BarsSolid/>   
    </button>
    Admin
</div>
}