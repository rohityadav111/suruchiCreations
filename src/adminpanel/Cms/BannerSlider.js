import React from 'react'
import Header from '../pages/Header'
import Sidebar from './Sidebar'

const BannerSlider = () => {
    return (
        <>
            <Header />

            <div className='container-fluid'>
                <Sidebar />
                <div class="right-section">
                    <form name="pageinfo" method="get" action="/suruchi-creations/admin/sliders_mgmt.php">
                        <input type="hidden" name="searchQuery" value="" />
                        <input type="hidden" name="pageno" value="1" />
                    </form>
                    <div class="dashboard-bar">
                        <h2 class="headn-h2">CMS</h2>
                    </div>
                    <div class="main-section">
                        <div class="col-sm-12 col-md-12 col-xs-12">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <h3 class="panel-title">Sliders</h3>
                                </div>
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <form name="searchform" method="get" action="/suruchi-creations/admin/sliders_mgmt.php">
                                                <div class="input-group">
                                                    <input style={{ border: "1px solid #d3d3d3", height: "38.5" }} type="text" name="searchQuery" class="form-control" placeholder="Search By Title" value="" required />
                                                    <span class="input-group-btn">
                                                        <button class="btn btn-default" type="submit" name="search" value="Search">Search</button>
                                                    </span>
                                                    <a href="sliders_mgmt.php"><button class="btn btn-default doi pull-right" type="button"><i class="glyphicon glyphicon-refresh"></i></button></a>
                                                </div>
                                            </form>

                                        </div>
                                        <form id="header" name="header" action="" method="post">
                                            <div class="col-sm-4">
                                                <a href="sliders.php"><button class="btn btn-primary center-block" type="button">Add New</button></a>
                                            </div>
                                            <div class="col-sm-4">
                                                <input type="submit" class="btn btn-default pull-right" name="delete_all" value="Delete" onClick="return confirm('Are you sure? You want to Delete');" />
                                            </div>
                                        </form>
                                    </div>
                                    <div class="clearfix"></div>
                                    <table class="table table-bordered" style={{ marginTop: "15px" }}>
                                        <thead style={{ background: "#d6d6d7" }}>
                                            <tr>
                                                <th>S.No.</th>
                                                <th>Title</th>
                                                <th>Image</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                                <th><label><input type="checkbox" id="checkAllbox" /></label></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Banner 1</td>
                                                <td><img src="http://www.webclickdigital.info/suruchi-creations/uploads/sliders/1653565982slider-1.jpg" alt="Banner 1" height="80" width="100" /></td>
                                                <td>
                                                    <input type="checkbox" onclick="return chkstatus('sliders','0','1');" name="status1" id="status1" value="1" checked />
                                                </td>
                                                <td>
                                                    <a href="sliders_mgmt.php?id=1" title="Delete" class="btn btn-primary btn-xs" onClick="return confirm('Are you sure to delete?');"> <i class="glyphicon glyphicon-trash"></i> </a>
                                                    <a href="sliders.php?id=1" title="Edit" class="btn btn-primary btn-xs"><i class="glyphicon glyphicon-edit"></i></a>
                                                </td>
                                                <th>
                                                    <label><input type="checkbox" class="checkbox" value="1" name="check_status[]" /></label>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Banner 2</td>
                                                <td><img src="http://www.webclickdigital.info/suruchi-creations/uploads/sliders/1653566003slider-3.jpg" alt="Banner 2" height="80" width="100" /></td>
                                                <td>
                                                    <input type="checkbox" onclick="return chkstatus('sliders','0','2');" name="status2" id="status2" value="1" checked />
                                                </td>
                                                <td>
                                                    <a href="sliders_mgmt.php?id=2" title="Delete" class="btn btn-primary btn-xs" onClick="return confirm('Are you sure to delete?');"> <i class="glyphicon glyphicon-trash"></i> </a>
                                                    <a href="sliders.php?id=2" title="Edit" class="btn btn-primary btn-xs"><i class="glyphicon glyphicon-edit"></i></a>
                                                </td>
                                                <th>
                                                    <label><input type="checkbox" class="checkbox" value="2" name="check_status[]" /></label>
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
        </>

    )
}

export default BannerSlider