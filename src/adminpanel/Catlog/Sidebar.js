import React from 'react'
import logo from '../../images/suruchi-creations-logo-1.png'
import devlogo from '../../images/dev-logo.png'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div>
            <div className="left-section">
                <a href="index.php" title=""><img src={logo} alt="logo" className="img-responsive" /></a>
                <div className="Admin-Panel">
                    <h3 className="headn-h3">Admin Panel</h3>
                </div>
                <div className="bs-example" data-example-id="simple-nav-stacked">
                    <ul className="nav nav-pills nav-stacked nav-pills-stacked-example">
                        <li role="presentation" ><NavLink to="/admin-catalog">Catalog</NavLink></li>
                        
                        <li role="presentation" ><NavLink to="/admin-catalog/categories"  >Categories</NavLink></li>
                        <li role="presentation" ><NavLink to="/admin-catalog/products"> Products</NavLink></li>
                       
                       
            
                        {/*
                        <li role="presentation" ><NavLink to="/catalog/review">Product Review</NavLink></li>
                        <li role="presentation" ><a href="#">Shipping Charge</a></li>
                        <li role="presentation" ><NavLink to="/catalog/brands">brands</NavLink></li> 
                         <li role="presentation" ><NavLink to="/catalog/discount">Discount Management</NavLink></li>
                        */}
                        <br />
                    </ul>
                </div>
                <div className="develop">
                    <p>Developed By: </p>
                    <a href=""><img src={devlogo} alt="logo" className="img-responsive" /></a>
                </div>	</div>

        </div>
    )
}

export default Sidebar