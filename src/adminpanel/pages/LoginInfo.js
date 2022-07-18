import React from 'react'
import Sidebar from './Sidebar'

const LoginInfo = () => {
    return (
        <div className='container-fluid'>
            <Sidebar />
            <div className="right-section">
                <div className="dashboard-bar">
                    <h2 className="headn-h2">Dashboard</h2>
                </div>
                <div className="main-section">
                    <div className="col-sm-12 col-md-12 col-xs-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Login Info</h3>
                            </div>
                            <div className="panel-body" style={{padding:"30px"}}>
                                <div className="row">
                                    <div className="col-sm-5">
                                        <form name="searchform" method="get" action="/suruchi-creations/admin/login-info.php">
                                            <div className="input-group">
                                                <input style={{ border: "1px solid #d3d3d3", height: "38.5px" }} type="text" name="searchQuery" className="form-control" placeholder="Search By IP" value="" required />
                                                <span className="input-group-btn">
                                                    <button className="btn btn-default" type="submit" name="search" value="Search">Search</button>
                                                    <a href="#"><i className="glyphicon glyphicon-refresh"></i></a>
                                                </span>
                                                <a href="login-info.php"><button className="btn btn-default doi" type="button"><i className="glyphicon glyphicon-refresh"></i></button></a>
                                            </div>
                                        </form>
                                    </div>
                                    <form id="header" name="header" action="" method="post">
                                        <div className="col-sm-4 col-sm-offset-3">
                                            <input type="submit" className="btn btn-default pull-right" name="delete_all" value="Delete" onClick="return confirm('Are you sure? You want to Delete');" />
                                        </div>
                                    </form>
                                </div>
                                <div className="clearfix"></div>
                                <table className="table table-bordered" style={{ marginTop: "15px" }}>
                                    <thead style={{ background: "#d6d6d7" }}>
                                        <tr>
                                            <th>S.No.</th>
                                            <th>User Name</th>
                                            <th>IP Address</th>
                                            <th>Login Date And Time</th>
                                            <th>Action</th>
                                            <th><label><input type="checkbox" id="checkAllbox" /></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginInfo