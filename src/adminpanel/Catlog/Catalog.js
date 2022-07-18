import React from 'react'
import './catalog.css'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from '../pages/Header'
const Catalog = () => {
    return (
        <div>
            <Header/>
            <div className="container-fluid">
               <Sidebar/>
                <div className="right-section">
                    <div className="dashboard-bar">
                        <h2 className="headn-h2">Catalog</h2>
                    </div>
                    <div className="main-section">
                        <div className="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                            <div className="col-sm-12 col-lg-2 col-md-2 col-xs-2">&nbsp;</div>
                            <div className="col-sm-12 col-lg-6 col-md-4 col-xs-12">
                                <div className="panel panel-default he-200">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Catalog Overview</h3>
                                    </div>
                                    <div className="panel-body ">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <h5 className="headn-h5 text-center wid92" style={{marginBottom: "7px"}}>Total Categories:</h5>
                                                <a className="counts" href="http://www.webclickdigital.info/suruchi-creations/admin/categories_mgmt.php">0 </a>
                                            </div>
                                            <div className="col-sm-12">
                                                <h5 className="headn-h5 text-center wid92" style={{marginBottom: "7px"}}>Total Brands:</h5>
                                                <a className="counts" href="http://www.webclickdigital.info/suruchi-creations/admin/brands_mgmt.php">0 </a>
                                            </div>
                                            <div className="col-sm-12">
                                                <h5 className="headn-h5 text-center wid92" 
                                                style={{marginBottom: "7px"}}>Total Products:</h5>
                                                <a className="counts" href="http://www.webclickdigital.info/suruchi-creations/admin/products_mgmt.php">0 </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-2 col-md-2 col-xs-12">&nbsp;</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Catalog