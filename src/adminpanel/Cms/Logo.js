import React from 'react'
import Header from '../pages/Header'
import Sidebar from './Sidebar'

const Logo = () => {
    return (
        
        <>
        <Header/>
      
        <div className='container-fluid'>
            <Sidebar />
            <div class="right-section">
                <div class="dashboard-bar">
                    <h2 class="headn-h2">CMS</h2>
                </div>
                <div class="main-section">
                    <div class="col-sm-12">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h3 class="panel-title">Logo</h3>
                            </div>
                            <div class="panel-body" style={{padding:"30"}}>
                                <form method="post" name="" id="logo" enctype="multipart/form-data">
                                    <div class="col-lg-2 col-md-6 col-sm-12 xs-12"><div class="form-group">
                                        <img src="http://www.webclickdigital.info/suruchi-creations/uploads/logo/1650949432suruchi-creations-logo-1.png" alt="Logo" height="120" width="250" title="Logo Image" />
                                    </div></div>
                                    <div class="col-lg-10 col-md-6 col-sm-12 xs-12">
                                        <div class="form-group">
                                            <input class="btn btn-default" type="file" id="image" name="image" value="" required />
                                            <span class="red" style={{color:"red"}}><font size="2" width="bold">[ Size : 122*51 ]</font></span>
                                        </div></div>

                                    <div class="col-lg-12 col-md-12 col-sm-12 xs-12"><a href="logo.php" class="btn btn-primary pull-right">Cancel</a>
                                        <button type="submit" name="submit" value="add" class="right btn btn-primary pull-right">Update</button></div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}

export default Logo