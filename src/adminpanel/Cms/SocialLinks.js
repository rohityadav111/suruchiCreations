import React from 'react'
import Header from '../pages/Header'
import Sidebar from './Sidebar'

const SocialLinks = () => {
    return (
        <>
            <Header />

            <div className='container-fluid'>
                <Sidebar />
                <div className="right-section">
                    <form name="pageinfo" method="get" action="/suruchi-creations/admin/social_links_mgmt.php">
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
                                    <h3 className="panel-title">Social Links</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <form name="searchform" method="get" action="/suruchi-creations/admin/social_links_mgmt.php">
                                                <div className="input-group">
                                                    <input style={{ border: "1px solid #d3d3d3", height: "38.5" }} type="text" name="searchQuery" className="form-control" placeholder="Search By Title" value="" required />
                                                    <span className="input-group-btn">
                                                        <button className="btn btn-default" type="submit" name="search" value="Search">Search</button>
                                                    </span>
                                                    <a href="social_links_mgmt.php"><button className="btn btn-default doi pull-right" type="button"><i className="glyphicon glyphicon-refresh"></i></button></a>
                                                </div>
                                            </form>

                                        </div>
                                        <form id="header" name="header" >
                                            <div className="col-sm-4">
                                                <a href="social_links.php"><button className="btn btn-primary center-block" type="button">Add New</button></a>
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
                                                <td>facebook</td>
                                                <td>
                                                    <input type="checkbox" onclick="return chkstatus('social_links','0','1');" name="status1" id="status1" value="1" checked />
                                                </td>
                                                <td>
                                                    <a href="social_links_mgmt.php?id=1" title="Delete" className="btn btn-primary btn-xs" onClick="return confirm('Are you sure to delete?');"> <i className="glyphicon glyphicon-trash"></i> </a>
                                                    <a href="social_links.php?id=1" title="Edit" className="btn btn-primary btn-xs"><i className="glyphicon glyphicon-edit"></i></a>
                                                </td>
                                                <th>
                                                    <label><input type="checkbox" className="checkbox" value="1" name="check_status[]" /></label>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>instagram</td>
                                                <td>
                                                    <input type="checkbox" onclick="return chkstatus('social_links','0','2');" name="status2" id="status2" value="1" checked />
                                                </td>
                                                <td>
                                                    <a href="social_links_mgmt.php?id=2" title="Delete" className="btn btn-primary btn-xs" onClick="return confirm('Are you sure to delete?');"> <i className="glyphicon glyphicon-trash"></i> </a>
                                                    <a href="social_links.php?id=2" title="Edit" className="btn btn-primary btn-xs"><i className="glyphicon glyphicon-edit"></i></a>
                                                </td>
                                                <th>
                                                    <label><input type="checkbox" className="checkbox" value="2" name="check_status[]" /></label>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>youtube-play</td>
                                                <td>
                                                    <input type="checkbox" onclick="return chkstatus('social_links','0','3');" name="status3" id="status3" value="1" checked />
                                                </td>
                                                <td>
                                                    <a href="social_links_mgmt.php?id=3" title="Delete" className="btn btn-primary btn-xs" onClick="return confirm('Are you sure to delete?');"> <i className="glyphicon glyphicon-trash"></i> </a>
                                                    <a href="social_links.php?id=3" title="Edit" className="btn btn-primary btn-xs"><i className="glyphicon glyphicon-edit"></i></a>
                                                </td>
                                                <th>
                                                    <label><input type="checkbox" className="checkbox" value="3" name="check_status[]" /></label>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>


                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>

    )
}

export default SocialLinks