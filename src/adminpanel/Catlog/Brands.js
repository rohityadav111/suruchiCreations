import React from 'react'
import Sidebar from './Sidebar'

const Brands = () => {
    return (
    
            <div className="container-fluid">
               <Sidebar/>

                <div className="right-section">
                    <form name="pageinfo" method="get" >
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
                                    <h3 className="panel-title">Brands</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <form name="searchform" >
                                                <div className="input-group">
                                                    <input style={{ border: "1px solid #d3d3d3", height: "38.5px" }} type="text" name="searchQuery" className="form-control" placeholder="Search By Brand" value="" required />
                                                    <span className="input-group-btn">
                                                        <button className="btn btn-default" type="submit" name="search" value="Search">Search</button>
                                                    </span>
                                                    <a href="brands_mgmt.php"><button className="btn btn-default doi" type="button"><i className="glyphicon glyphicon-refresh"></i></button></a>
                                                </div>
                                            </form>

                                        </div>
                                        <form id="header" name="header">
                                            <div className="col-sm-3">
                                                <a href="brands.php"><button className="btn btn-primary center-block" type="button">Add New</button></a>
                                            </div>
                                            <div className="col-sm-5">
                                                <a href="exportbrand.php"><button className="btn btn-default doi" type="button">Export</button></a>
                                                <input type="submit" className="btn btn-default pull-right" name="delete_all" value="Delete" />
                                            </div>
                                            </form>
                                    </div>


                                    <div className="clearfix"></div>
                                    <table className="table table-bordered" style={{ marginTop: " " }}>
                                        <thead style={{ background: "#d6d6d7" }}>
                                            <tr>
                                                <th>S.No.</th>
                                                <th>Brand</th>
                                                <th>Total Product</th>
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

export default Brands