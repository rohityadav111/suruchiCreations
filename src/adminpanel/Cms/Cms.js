import React from 'react'
import logo from '../../images/suruchi-creations-logo-1.png'
import devlogo from '../../images/dev-logo.png'
import Sidebar from './Sidebar'
import Header from '../pages/Header'
const CMS = () => {
    return (
        <div>
            <Header/>
            <div className="container-fluid">
              <Sidebar/>
                <div className="right-section">
                    <div className="dashboard-bar">
                        <h2 className="headn-h2">CMS</h2>
                    </div>
                    <div className="main-section">
                        <div className="col-sm-12 col-lg-12 col-md-12 col-xs-12">
                            <div className="col-sm-12 col-lg-2 col-md-2 col-xs-2">&nbsp;</div>
                            <div className="col-sm-12 col-lg-6 col-md-12 col-xs-12">
                                <div className="panel panel-default he-200">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">CMS Overview</h3>
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <h5 className="headn-h5 text-center wid92" style={{marginBottom:"7px"}}>Total Pages:</h5>
                                                <a className="counts" href="http://www.webclickdigital.info/suruchi-creations/admin/cms-pages.php">0</a>
                                            </div>
                                            <div className="col-sm-12">
                                                <h5 className="headn-h5 text-center wid92" style={{marginBottom:"7px"}}>Total Banners:</h5>
                                                <a className="counts" href="http://www.webclickdigital.info/suruchi-creations/admin/sliders_mgmt.php">0 </a>
                                            </div>
                                            <div className="col-sm-12">
                                                <h5 className="headn-h5 text-center wid92" style={{marginBottom:"7px"}}>Social Media Links:</h5>
                                                <a className="counts" href="http://www.webclickdigital.info/suruchi-creations/admin/social_links_mgmt.php">0</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-2 col-md-2 col-xs-12">&nbsp;</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CMS