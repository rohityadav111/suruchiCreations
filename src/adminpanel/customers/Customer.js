import React from 'react'
import Header from '../pages/Header'
import Sidebar from './Sidebar'


const Customer = () => {
    return (
        <div>
            <Header/>
            <div className="container-fluid">
                <Sidebar/>
              
                <div className="right-section">
                    <div className="dashboard-bar">
                        <h2 className="headn-h2">Customers</h2>
                    </div>
                    <div className="main-section">
                        <div className="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                            <div className="col-sm-12 col-lg-2 col-md-2 col-xs-2">&nbsp;</div>
                            <div className="col-sm-12 col-lg-6 col-md-4 col-xs-12">
                                <div className="panel panel-default he-200">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Customers Overview</h3>
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <h5 className="headn-h5 text-center wid92" style={{marginBottom:"7px"}}>Total Users:</h5>
                                                <a className="counts" href="http://www.webclickdigital.info/suruchi-creations/admin/users_mgmt.php">0 </a>
                                            </div>
                                            <div className="col-sm-12">
                                                <h5 className="headn-h5 text-center wid92" style={{marginBottom:"7px"}}>Total Subscribers:</h5>
                                                <a className="counts" href="http://www.webclickdigital.info/suruchi-creations/admin/subscribers_mgmt.php">0</a>
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

export default Customer