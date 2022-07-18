import React from 'react'

const Notification = () => {
    return (


        <div className="container-fluid">
            <div className="left-section">
                <a href="index.php" title=""><img src="images/logo.png" alt="logo" className="img-responsive" /></a>
                <div className="Admin-Panel">
                    <h3 className="headn-h3">Admin Panel</h3>
                </div>
                <div className="bs-example" data-example-id="simple-nav-stacked">
                    <ul className="nav nav-pills nav-stacked nav-pills-stacked-example">
                        <li role="presentation" className="active"><a href="notifications_mgmt.php">Notifications</a></li>
                    </ul>
                </div>
                <div className="develop">
                    <p>Developed By: </p>
                    <a href=""><img src="images/dev-logo.png" alt="logo" className="img-responsive" /></a>
                </div>
            </div>
            <div className="right-section">
                <form name="pageinfo" id="pageinfo" >
                    <input type="hidden" name="user_id" id="user_id" value="" />
                    <input type="hidden" name="searchQuery" value="" />
                    <input type="hidden" name="pageno" value="1" />
                </form>
                <div className="dashboard-bar">
                    <h2 className="headn-h2">Notifications</h2>
                </div>
                <div className="main-section">
                    <div className="col-sm-12 col-md-12 col-xs-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Notifications List</h3>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="input-group">
                                            <select name="firebase_token" id="firebase_token" className="form-control" >
                                                <option value="">--Select--</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                    </div>
                                    <div className="col-sm-4">
                                    </div>
                                </div>
                                <div className="clearfix"></div><br />
                                <div className="row">
                                    <div className="col-sm-4">
                                        <form name="searchform" method="get" action="/suruchi-creations/admin/notifications_mgmt.php">
                                            <div className="input-group">
                                                <input style={{ border: "1px solid #d3d3d3", height: "38.5px" }} type="text" name="searchQuery" className="form-control" placeholder="Search By Message" value="" required />
                                                <span className="input-group-btn">
                                                    <button className="btn btn-default" type="submit" name="search" value="Search">Search</button>
                                                </span>
                                                <a href="notifications_mgmt.php"><button className="btn btn-default doi pull-right" type="button"><i className="glyphicon glyphicon-refresh"></i></button></a>
                                            </div>
                                        </form>

                                    </div>
                                    <form id="header">
                                        <div className="col-sm-4">
                                            <a href="notifications.php"><button className="btn btn-primary center-block" type="button">Send Notification</button></a>
                                        </div>
                                        <div className="col-sm-4">
                                            <input type="submit" className="btn btn-default pull-right" name="delete_all" value="Delete" />
                                        </div>
                                    </form>
                                </div>
                                <div className="clearfix"></div>
                                <table className="table table-bordered" style={{ marginTop: "15px" }}>
                                    <thead style={{ background: "#d6d6d7" }}>
                                        <tr>
                                            <th>S.No.</th>
                                            <th>User Name</th>
                                            <th>Message</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                            <th><label><input type="checkbox" id="checkAllbox" /></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <td colspan="6" align="center"><font color="red" size="2">Record Not Found</font></td>
                                    </tbody>
                                </table>

                                <div className="bs-example" data-example-id="disabled-active-pagination">
                                    <nav aria-label="...">
                                        <ul className="pagination text-center center-block" style={{ display: "table" }}>

                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Notification