import React from 'react'
import Header from '../pages/Header'
import Sidebar from './Sidebar'

const QuickLinks = () => {
    return (
        <>
            <Header />

            <div className='container-fluid'>
                <Sidebar />
                <div className="right-section">
                    <form name="pageinfo" method="get" action="/suruchi-creations/admin/com_info_mgmt.php">
                        <input type="hidden" name="searchQuery" value="" />
                        <input type="hidden" name="pageno" value="1" />
                    </form>
                    <div className="dashboard-bar">
                        <h2 className="headn-h2">CMS</h2>
                    </div>
                    <div className="main-section">
                        <div className="col-sm-12 col-md-12 col-xs-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Company Information</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <form name="searchform" method="get" action="/suruchi-creations/admin/com_info_mgmt.php">
                                                <div className="input-group">
                                                    <input style={{ border: "1px solid #d3d3d3", height: "38.5px" }} type="text" name="searchQuery" className="form-control" placeholder="Search By Title" value="" required />
                                                    <span className="input-group-btn">
                                                        <button className="btn btn-default" type="submit" name="search" value="Search">Search</button>
                                                    </span>
                                                    <a href="com_info_mgmt.php"><button className="btn btn-default doi pull-right" type="button"><i className="glyphicon glyphicon-refresh"></i></button></a>
                                                </div>
                                            </form>

                                        </div>
                                        <form id="header" name="header" action="" method="post">
                                            <div className="col-sm-4">
                                                <a href="com_info.php"><button className="btn btn-primary center-block" type="button">Add New</button></a>
                                            </div>
                                            <div className="col-sm-4">
                                                <input type="submit" className="btn btn-default pull-right" name="delete_all" value="Delete" onClick="return confirm('Are you sure? You want to Delete');" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="clearfix"></div>
                                    <table className="table table-bordered" style={{ marginTop: "15px" }}>
                                        <thead style={{ background: "#d6d6d7" }}>
                                            <tr>
                                                <th>S.No.</th>
                                                <th>Title</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                                <th><label><input type="checkbox" id="checkAllbox" /></label></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Company Profile</td>
                                                <td>
                                                    <input type="checkbox" onclick="return chkstatus('com_info','0','1');" name="status1" id="status1" value="1" checked />
                                                </td>
                                                <td>
                                                    <a href="com_info_mgmt.php?id=1" title="Delete" className="btn btn-primary btn-xs" onClick="return confirm('Are you sure to delete?');"> <i className="glyphicon glyphicon-trash"></i> </a>
                                                    <a href="com_info.php?id=1" title="Edit" className="btn btn-primary btn-xs"><i className="glyphicon glyphicon-edit"></i></a>
                                                </td>
                                                <th>
                                                    <label><input type="checkbox" className="checkbox" value="1" name="check_status[]" /></label>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Our Products</td>
                                                <td>
                                                    <input type="checkbox" onclick="return chkstatus('com_info','0','2');" name="status2" id="status2" value="1" checked />
                                                </td>
                                                <td>
                                                    <a href="com_info_mgmt.php?id=2" title="Delete" className="btn btn-primary btn-xs" onClick="return confirm('Are you sure to delete?');"> <i className="glyphicon glyphicon-trash"></i> </a>
                                                    <a href="com_info.php?id=2" title="Edit" className="btn btn-primary btn-xs"><i className="glyphicon glyphicon-edit"></i></a>
                                                </td>
                                                <th>
                                                    <label><input type="checkbox" className="checkbox" value="2" name="check_status[]" /></label>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Sitemap</td>
                                                <td>
                                                    <input type="checkbox" onclick="return chkstatus('com_info','0','3');" name="status3" id="status3" value="1" checked />
                                                </td>
                                                <td>
                                                    <a href="com_info_mgmt.php?id=3" title="Delete" className="btn btn-primary btn-xs" onClick="return confirm('Are you sure to delete?');"> <i className="glyphicon glyphicon-trash"></i> </a>
                                                    <a href="com_info.php?id=3" title="Edit" className="btn btn-primary btn-xs"><i className="glyphicon glyphicon-edit"></i></a>
                                                </td>
                                                <th>
                                                    <label><input type="checkbox" className="checkbox" value="3" name="check_status[]" /></label>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>Our Presence</td>
                                                <td>
                                                    <input type="checkbox" onclick="return chkstatus('com_info','0','4');" name="status4" id="status4" value="1" checked />
                                                </td>
                                                <td>
                                                    <a href="com_info_mgmt.php?id=4" title="Delete" className="btn btn-primary btn-xs" onClick="return confirm('Are you sure to delete?');"> <i className="glyphicon glyphicon-trash"></i> </a>
                                                    <a href="com_info.php?id=4" title="Edit" className="btn btn-primary btn-xs"><i className="glyphicon glyphicon-edit"></i></a>
                                                </td>
                                                <th>
                                                    <label><input type="checkbox" className="checkbox" value="4" name="check_status[]" /></label>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>Contact Us</td>
                                                <td>
                                                    <input type="checkbox" onclick="return chkstatus('com_info','0','5');" name="status5" id="status5" value="1" checked />
                                                </td>
                                                <td>
                                                    <a href="com_info_mgmt.php?id=5" title="Delete" className="btn btn-primary btn-xs" onClick="return confirm('Are you sure to delete?');"> <i className="glyphicon glyphicon-trash"></i> </a>
                                                    <a href="com_info.php?id=5" title="Edit" className="btn btn-primary btn-xs"><i className="glyphicon glyphicon-edit"></i></a>
                                                </td>
                                                <th>
                                                    <label><input type="checkbox" className="checkbox" value="5" name="check_status[]" /></label>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}

export default QuickLinks