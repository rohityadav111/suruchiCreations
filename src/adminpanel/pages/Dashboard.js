import React from 'react'
import Sidebar from './Sidebar'
import './Dashboard.css'
import Header from './Header';

const Dashboard = () => {
    const d = new Date();
    let text = d.toDateString()
    console.log(text)


    return (
        <>

            <Header />

            <div className="container-fluid">
                <Sidebar />
                <div className="right-section">
                    <div className="dashboard-bar">
                        <h2 className="left">Dashboard</h2>
                    </div>
                    <div className="main-section">
                        <div className="row">
                            <div className="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Admin Details</h3>
                                    </div>
                                    <div className="panel-body">
                                        <h5 className="headn-h5 change"><strong>Logged in as:</strong>
                                            <span>Suruchi Creations</span></h5>
                                        <h5 className="headn-h5 change"><strong style={{ marginLeft: "20" }}>Access:</strong>
                                            <span>Supar Admin</span></h5>
                                        <h5 className="headn-h5 change"><strong>Date:</strong>
                                            <span>{text}</span></h5>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                <div className="panel panel-default he-200 pb-3">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Sales Overview</h3>
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <h5 className="headn-h5 text-center wid92" style={{ marginBottom: "7px" }}>Total Items Sold:</h5>
                                                <a className="counts" href="http://www.webclickdigital.info/suruchi-creations/admin/orders_mgmt.php">0</a>
                                            </div>
                                            <div className="col-sm-12">
                                                <h5 className="headn-h5 text-center wid92" style={{ marginBottom: "7px" }}>Total Orders:</h5>
                                                <a className="counts" href="http://www.webclickdigital.info/suruchi-creations/admin/orders_mgmt.php">0</a>
                                            </div>
                                            <div className="col-sm-12">
                                                <h5 className="headn-h5 text-center wid92" style={{ marginBottom: "7px" }}>Total Revenue:</h5>
                                                <a className="counts" href="http://www.webclickdigital.info/suruchi-creations/admin/orders_mgmt.php">INR  </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                                <div className="panel panel-default he-200 pb-3">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Customers Overview</h3>
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <h5 className="headn-h5 text-center wid92" style={{ marginBottom: "7px" }}>Total Users:</h5>
                                                <a className="counts" href="http://www.webclickdigital.info/suruchi-creations/admin/users_mgmt.php">0 </a>
                                            </div>
                                            <div className="col-sm-12">
                                                <h5 className="headn-h5 text-center wid92" style={{ marginBottom: "7px" }}>Total Subscribers:</h5>
                                                <a className="counts" href="http://www.webclickdigital.info/suruchi-creations/admin/subscribers_mgmt.php">0 </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">

                                <div className="panel panel-default he-200 pb-3">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Catalog Overview</h3>
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <h5 className="headn-h5 text-center wid92" style={{ marginBottom: "7px" }}>Total Categories:</h5>
                                                <a className="counts" href="http://www.webclickdigital.info/suruchi-creations/admin/categories_mgmt.php">0</a>
                                            </div>
                                            <div className="col-sm-12">
                                                <h5 className="headn-h5 text-center wid92" style={{ marginBottom: "7px" }}>Total Products:</h5>
                                                <a className="counts" href="http://www.webclickdigital.info/suruchi-creations/admin/products_mgmt.php">0</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="bar-chart"></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard