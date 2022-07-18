import React from 'react'
import Sidebar from './Sidebar'

const AdminProfile = () => {
    return (
        <div className='container-fluid'>
            <Sidebar/>
            <div className="right-section">
                <div className="dashboard-bar">
                    <h2 className="headn-h2">Dashboard</h2>
                </div>
                <div className="main-section">
                    <div className="col-sm-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Edit Profile</h3>
                            </div>
                            <div className="panel-body" style={{padding:"30px"}}>
                                <form className="frm-clls" method="post" name="admin" id="admin" enctype="multipart/form-data">
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Name</label>
                                            <input type="text" className="form-control" id="name" name="name" value="Suruchi Creations"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12"><div className="form-group">
                                        <label for="exampleInputPassword1">Email</label>
                                        <input type="text" className="form-control" id="contact_id" name="contact_id" value="suruchiprints.delhi@gmail.com" required />
                                    </div></div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">Contact Number</label>
                                            <input type="text" className="form-control" id="contact_number" name="contact_number" value="011 45607395" required />
                                        </div></div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">Whatsapp Number</label>
                                            <input type="text" className="form-control" id="whatsapp_number" name="whatsapp_number" value="+91 9871051648" required />
                                        </div></div>
                                    <div className="col-lg-4 col-md-6 col-sm-12"><div className="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="new_password" name="new_password" value=""/>
                                    </div></div>
                                    <div className="col-lg-4 col-md-6 col-sm-12"><div className="form-group">
                                        <label for="exampleInputPassword1">Re-Enter Password</label>
                                        <input type="password" className="form-control" id="conform_password" name="conform_password" value=""/>
                                    </div></div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label>Address</label>
                                                    <textarea name="address" id="address" className="form-control" rows="4" >628, Gali Ghanteshwar, Katra Neel, Chandni Chowk, Delhi 110006</textarea>
                                                </div>
                                            </div>
                                        </div></div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <a href="" className="btn btn-primary pull-right">Cancel</a>
                                        <button type="submit" name="submit" value="update" onClick="" className="right btn btn-primary pull-right">Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
  )
}

export default AdminProfile