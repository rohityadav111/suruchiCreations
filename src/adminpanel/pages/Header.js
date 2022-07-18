import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
    let navigate = useNavigate()
    const Logout = () => {
        localStorage.clear()
        navigate("/admin")
    }
    return (
        <div>
            <div className="top-bar">
                <div className="row">
                    <div className="col-sm-12 col-lg-9 col-md-9 col-xs-12" >
                        <nav className=''>
                            <ul className="">
                               
                                <li className="list-inline-item links"><NavLink to="/admin-dashboard" >Dashboard</NavLink></li>
                                <li className="list-inline-item links"><NavLink to="/admin-catalog" >Catalog</NavLink></li>
                                <li className="list-inline-item links"><NavLink to="/admin-customer" >Customers</NavLink></li>
                                <li className="list-inline-item links"><NavLink to="/admin-sales" >Sales</NavLink></li>
                                <li className="list-inline-item links"><NavLink to="/admin-cms" >CMS</NavLink></li>
                            </ul>
                        </nav>
                       
                    </div>
                    <div className="col-sm-2 col-lg-2 col-md-2 col-xs-6"> <a href="http://www.webclickdigital.info/suruchi-creations/" target="_blank" title="Open site" className="spensit">Open Site</a> </div>
                    <div className="col-sm-1 col-lg-1 col-md-1 col-xs-6"> <button role="button"  className="spensit btn btn-outline-dark" onClick={Logout}>Logout</button> </div>
                </div>
            </div>
        </div>
    )
}

export default Header