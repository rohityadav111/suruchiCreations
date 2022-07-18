import React from 'react'
import logo from '../../images/suruchi-creations-logo-1.png'
import devlogo from '../../images/dev-logo.png'
import { NavLink } from 'react-router-dom'
import Header from '../pages/Header'
const Sidebar = () => {
  return (
    <div>
        <Header/>
          <div className="left-section">
                    <a href="index.php" title=""><img src={logo} alt="logo" className="img-responsive"/></a>
                    <div className="Admin-Panel">
                        <h3 className="headn-h3">Admin Panel</h3>
                    </div>
                    <div className="bs-example" data-example-id="simple-nav-stacked">
                        <ul className="nav nav-pills nav-stacked nav-pills-stacked-example">
                            <li role="presentation"><NavLink to="/admin-customer">Customers</NavLink></li>
                            <li role="presentation" ><NavLink to="/admin-customer/user">Add/Edit Customer</NavLink></li>
                            <li role="presentation" ><NavLink to="/admin-customer/subscribers">Manage Subscribers</NavLink></li>
                        </ul>
                    </div>
                    <div className="develop">
                        <p>Developed By: </p>
                        <a href=""><img src={devlogo} alt="logo" className="img-responsive"/></a>
                    </div>
                </div>
    </div>
  )
}

export default Sidebar