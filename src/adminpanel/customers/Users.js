import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { useEffect } from 'react'
import Header from '../pages/Header'

const Users = () => {
    const [user, setUser] = useState("")
    useEffect(()=>{
        GetUsers() 
    },[])

    const userId = JSON.parse(localStorage.getItem('user'))._id
    const GetUsers = async()=>{
        let response = await fetch(`https://web-click-api.herokuapp.com/users/${userId}`,{
            method:"GET"
        })
        response = await response.json()
        setUser(response.user)
    
    }
    return (
        <div>
            <Header/>
            <div className='container-fluid'>
                <Sidebar/>
            <div className="right-section">
                <form name="pageinfo" method="get" action="/suruchi-creations/admin/users_mgmt.php">
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
                                <h3 className="panel-title">Users</h3>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-4">
                                     
                                            <div className="input-group">
                                                <input style={{border:"1px solid #d3d3d3", height:"38.5px"}} type="text" name="searchQuery" className="form-control" placeholder="Search By Name" value="" required />
                                                <span className="input-group-btn">
                                                    <button className="btn btn-default" type="submit" name="search" value="Search">Search</button>
                                                </span>
                                                
                                            </div>
                                        
                                      
                                    </div>

                                </div>
                                <div className="clearfix"></div>
                                <table className="table table-bordered" style={{marginTop:"15px"}}>
                                    <thead style={{background:"#d6d6d7"}}>
                                        <tr>
                                            <th>S.No.</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>History</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                            <th><label><input type="checkbox" id="checkAllbox" /></label></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                1
                                            </td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td></td>
                                            <td>{user.status}</td>
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

export default Users