import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import logo from '../../images/suruchi-creations-logo-1.png'
import devlogo from '../../images/dev-logo.png'


const Sidebar = () => {
    return (
        <div>
            <div class="left-section">
                <a href="index.php" title=""><img src={logo} alt="logo" class="img-responsive"/></a>
                <div class="Admin-Panel">
                    <h3 class="headn-h3">Admin Panel</h3>
                </div>

                <div class="bs-example" data-example-id="simple-nav-stacked">
                    <ul class="nav nav-pills nav-stacked nav-pills-stacked-example">
                        <li role="presentation"><NavLink to="/admin-dashboard">Dashboard</NavLink></li>
                        
                        {/* <li role="presentation"  ><NavLink to="/dashboard/edit-admin-profile">Edit Admin Profile</NavLink></li>
                        <li role="presentation" ><NavLink to="/dashboard/login-info">Login Info</NavLink></li>
                        <li role="presentation" ><NavLink to="/dashboard/add-admins">Add Admins</NavLink></li> */}
                    </ul>
                </div>
                <div class="develop">
                    <p>Developed By: </p>
                    <a href=""><img src={devlogo} alt="logo" class="img-responsive"/></a>
                </div>
            </div>	</div>
   
  )
}

export default Sidebar