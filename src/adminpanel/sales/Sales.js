import React from 'react'
import logo from '../../images/suruchi-creations-logo-1.png'
import devlogo from '../../images/dev-logo.png'
import Sidebar from './Sidebar'
import Header from '../pages/Header'

const Sales = () => {
    return (
        <div>
            <Header/>
            <div class="container-fluid">
                <Sidebar />
          
                <div class="right-section">
                    <div class="dashboard-bar">
                        <h2 class="headn-h2">Sales</h2>
                    </div>
                    <div class="main-section">
                        <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                            <div class="col-sm-12 col-lg-2 col-md-2 col-xs-2">&nbsp;</div>
                            <div class="col-sm-12 col-lg-6 col-md-12 col-xs-12">
                                <div class="panel panel-default he-200">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">Sales Overview</h3>
                                    </div>
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <h5 class="headn-h5 text-center wid92" style={{ marginBottom: "7px" }}>Total Items Sold:</h5>
                                                <a class="counts" href="http://www.webclickdigital.info/suruchi-creations/admin/orders_mgmt.php">0</a>
                                            </div>
                                            <div class="col-sm-12">
                                                <h5 class="headn-h5 text-center wid92" style={{ marginBottom: "7px" }}>Total Orders:</h5>
                                                <a class="counts" href="http://www.webclickdigital.info/suruchi-creations/admin/orders_mgmt.php">0 </a>
                                            </div>
                                            <div class="col-sm-12">
                                                <h5 class="headn-h5 text-center wid92" style={{ marginBottom: "7px" }}>Total Revenue:</h5>
                                                <a class="counts" href="http://www.webclickdigital.info/suruchi-creations/admin/orders_mgmt.php">INR 0.00 </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-lg-2 col-md-2 col-xs-12">&nbsp;</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Sales