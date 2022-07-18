import React from 'react'
import Header from '../pages/Header'
import Sidebar from './Sidebar'

const Subscribers = () => {
    return (
        <div>
            <Header/>
            <div className='container-fluid'>
                <Sidebar/>
   
            <div className="right-section">
                <form name="pageinfo" method="get" action="/suruchi-creations/admin/subscribers_mgmt.php">
                    <input type="hidden" name="searchQuery" value="" />
                    <input type="hidden" name="pageno" value="1" />
                </form>
                <div className="dashboard-bar">
                    <h2 className="headn-h2">Customers</h2>
                </div>
                <div className="main-section">
                    <div className="col-sm-12 col-md-12 col-xs-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Subscribers</h3>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                            <div className="input-group">
                                                <input style={{border:"1px solid #d3d3d3", height:"38.5px"}} type="text" name="searchQuery" className="form-control" placeholder="Search By Email" value="" required />
                                                <span className="input-group-btn">
                                                    <button className="btn btn-default" type="submit" name="search" value="Search">Search</button>
                                                </span>
                                            </div>
                                        
                                    </div>
                                    
                                       
                                        
                                </div>
                                <div className="clearfix"></div><br/></div>

                            <table className="table table-bordered" style={{marginTop:"15px"}}>
                                <thead style={{background:"#d6d6d7"}}>
                                    <tr>
                                        <th>S.No.</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                        <th><label><input type="checkbox" id="checkAllbox" /></label></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>rohit.webclickindia@gmail.com
                                        </td>
                                        <td>
                                            <a href="subscribers_mgmt.php?id=2" title="Delete" className="btn btn-primary btn-xs" onClick="return confirm('Are you sure to delete?');"> <i className="glyphicon glyphicon-trash"></i> </a>
                                            <a href="subscribers.php?id=2" title="Edit" className="btn btn-primary btn-xs"><i className="glyphicon glyphicon-edit"></i></a>
                                        </td>
                                        <th>
                                            <label><input type="checkbox" className="checkbox" value="2" name="check_status[]"/></label>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>santosh@webclickdigital.com
                                        </td>
                                        <td>
                                            <a href="subscribers_mgmt.php?id=1" title="Delete" className="btn btn-primary btn-xs" onClick="return confirm('Are you sure to delete?');"> <i className="glyphicon glyphicon-trash"></i> </a>
                                            <a href="subscribers.php?id=1" title="Edit" className="btn btn-primary btn-xs"><i className="glyphicon glyphicon-edit"></i></a>
                                        </td>
                                        <th>
                                            <label><input type="checkbox" className="checkbox" value="1" name="check_status[]"/></label>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                     
               
                    </div>
                </div>
            </div>
        </div>
	</div >
    </div>



  )
}

export default Subscribers