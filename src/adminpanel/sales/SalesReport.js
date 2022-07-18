import React from 'react'
import Header from '../pages/Header'
import Sidebar from './Sidebar'

const SalesReport = () => {
    return (
        <div>
            <Header/>
            <div className='container-fluid'>
                <Sidebar />

                <div className="right-section">
                    <form name="pageinfo" method="get" action="/suruchi-creations/admin/orders_mgmt.php">
                        <input type="hidden" name="searchQuery" value="" />
                        <input type="hidden" name="pageno" value="1" />
                    </form>
                    <div className="dashboard-bar">
                        <h2 className="headn-h2">Sales</h2>
                    </div>
                    <div className="main-section">
                        <div className="col-sm-12 col-md-12 col-xs-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Report</h3>
                                </div>
                                <div className="panel-body order-mgmt">
                                    <div className="row">
                                        <div className="col-sm-5">

                                            <div className="input-group">
                                                <input style={{ border: "1px solid #d3d3d3", height: "38.5px" }} type="text" name="searchQuery" className="form-control" placeholder="Search By Order Id / Date" value="" required />
                                                <span className="input-group-btn">
                                                    <button className="btn btn-default" type="submit" name="search" value="Search">Search</button>
                                                </span>

                                            </div>


                                        </div>


                                        <div className="col-sm-4">
                                            <input type="submit" className="btn btn-default pull-right" name="delete_all" value="Delete" onClick="return confirm('Are you sure? You want to Delete');" />
                                        </div>

                                    </div>
                                    <div className="clearfix"></div>
                                    <table className="table table-bordered" style={{ marginTop: "15px" }}>
                                        <thead style={{ background: "#d6d6d7" }}>
                                            <tr>
                                                <th>Order Id</th>
                                                <th>Date of Order</th>
                                                <th>Date of Delivery</th>
                                                <th>Payment Status</th>
                                                <th>Shipping Method</th>
                                                <th>Status</th>
                                                <th>Invoice</th>
                                                <th>Order Description</th>
                                                <th>Customer Description</th>
                                                <th><label><input type="checkbox" id="checkAllbox" /></label></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>


                                    </table>





                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SalesReport