import React from 'react'
import Sidebar from './Sidebar'

const AddAdmin = () => {
    return (
        <div className='container-fluid'>
            <Sidebar/>
            <div className="right-section">
                <div className="dashboard-bar">
                    <h2 className="headn-h2">Dashboard</h2>
                </div>
                <div className="main-section">
                    <div className="col-sm-12 col-md-12 col-xs-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Add Admin</h3>
                            </div>
                            <div className="panel-body" style={{padding:"30px"}}>
                                <form className="frm-clls" method="post" name="admin" id="admin" enctype="multipart/form-data">
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Name</label>
                                            <input type="text" className="form-control" id="name" name="name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">Email</label>
                                            <input type="email" className="form-control" id="contact_id" name="contact_id" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">Contact Number</label>
                                            <input type="text" className="form-control" id="contact_number" name="contact_number" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">Username</label>
                                            <input type="text" className="form-control" id="user_name" name="user_name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" className="form-control" name="password"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">Role</label>
                                            <select name="role" id="role" className="form-control">
                                                <option value="">--Select--</option>
                                                <option value="Editor">Editor</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <button type="submit" name="submit" value="update" className="btn btn-primary">Update</button>
                                        <a href="index.php" className="btn btn-primary ">Cancel</a>
                                    </div>
                                </form>
                                <div className="border"></div>
                                <div className="col-md-12"><table className="table table-bordered" style={{marginTop:"15px"}}>
                                    <thead style={{background:"#d6d6d7"}}>
                                        <tr>
                                            <th>S.No.</th>
                                            <th>Name</th>
                                            <th>Contact Id</th>
                                            <th>Contact Number</th>
                                            <th>User Name</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Nikhil</td>
                                            <td>nikhil.webclickindia@gmail.com</td>
                                            <td>1111111111</td>
                                            <td>nik</td>
                                            <td>
                                                <a href="admin-info.php?id=9" title="Delete" className="btn btn-primary btn-xs" onClick="return confirm('Are you sure to delete?');"> <i className="glyphicon glyphicon-trash"></i> </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Anzar</td>
                                            <td>anzar.webclickindia@gmail.com</td>
                                            <td>7417815127</td>
                                            <td>anzi</td>
                                            <td>
                                                <a href="admin-info.php?id=8" title="Delete" className="btn btn-primary btn-xs" onClick="return confirm('Are you sure to delete?');"> <i className="glyphicon glyphicon-trash"></i> </a>
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
        </div>


  )
}

export default AddAdmin