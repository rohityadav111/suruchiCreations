import React from 'react'
import Sidebar from './Sidebar'

const Discount = () => {
    return (
        <div>
            <div className='container-fluid'>
                <Sidebar/>
            <div className="right-section">
                <form name="pageinfo" method="get" action="/suruchi-creations/admin/discount_mgmt.php">
                    <input type="hidden" name="searchQuery" value="" />
                    <input type="hidden" name="pageno" value="1" />
                </form>
                <div className="dashboard-bar">
                    <h2 className="headn-h2">Catalog</h2>
                </div>
                <div className="main-section">
                    <div className="col-sm-12 col-md-12 col-xs-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Discount</h3>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <form name="searchform" method="get" action="/suruchi-creations/admin/discount_mgmt.php">
                                            <div className="input-group">
                                                <input style={{border:"1px solid #d3d3d3", height:"38.5px"}} type="text" name="searchQuery" className="form-control" placeholder="Search By Code" value="" required />
                                                <span className="input-group-btn">
                                                    <button className="btn btn-default" type="submit" name="search" value="Search">Search</button>
                                                </span>
                                            </div>
                                        </form>
                                        
                                    </div>
                                    <form id="header" name="header" action="" method="post">
                                        <div className="col-sm-4">
                                            <a href="discount.php"><button className="btn btn-primary center-block" type="button">Add New</button></a>
                                        </div>
                                        <div className="col-sm-4">
                                            <input type="submit" className="btn btn-default pull-right" name="delete_all" value="Delete" onClick="return confirm('Are you sure? You want to Delete');" />
                                        </div>
                                        </form>
                                </div>
                                <div className="clearfix"></div>
                                <table className="table table-bordered" style={{marginTop:"15px"}}>
                                    <thead style={{background:"#d6d6d7"}}>
                                        <tr>
                                            <th>S.No.</th>
                                            <th>Code</th>
                                            <th>Discount%</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                            <th><label><input type="checkbox" id="checkAllbox" /></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>SCPROM10</td>
                                            <td>10</td>
                                            <td>03/09/2022</td>
                                            <td>10/15/2022</td>
                                            <td>
                                                <input type="checkbox" onclick="return chkstatus('discount','0','1');" name="status1" id="status1" value="1" checked />
                                            </td>
                                            <td>
                                                <a href="discount_mgmt.php?id=1" title="Delete" className="btn btn-primary btn-xs" onClick="return confirm('Are you sure to delete?');"> <i className="glyphicon glyphicon-trash"></i> </a>
                                                <a href="discount.php?id=1" title="Edit" className="btn btn-primary btn-xs"><i className="glyphicon glyphicon-edit"></i></a>
                                            </td>
                                            <th>
                                                <label><input type="checkbox" className="checkbox" value="1" name="check_status[]"/></label>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>SCPROM20</td>
                                            <td>20</td>
                                            <td>05/25/2022</td>
                                            <td>06/28/2022</td>
                                            <td>
                                                <input type="checkbox" onclick="return chkstatus('discount','0','2');" name="status2" id="status2" value="1" checked />
                                            </td>
                                            <td>
                                                <a href="discount_mgmt.php?id=2" title="Delete" className="btn btn-primary btn-xs" > <i className="glyphicon glyphicon-trash"></i> </a>
                                                <a href="discount.php?id=2" title="Edit" className="btn btn-primary btn-xs"><i className="glyphicon glyphicon-edit"></i></a>
                                            </td>
                                            <th>
                                                <label><input type="checkbox" className="checkbox" value="2" name="check_status[]"/></label>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                       
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
</div >
  
  )
}

export default Discount