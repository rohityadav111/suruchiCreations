import React from 'react'
import Header from '../pages/Header'
import Sidebar from './Sidebar'

const Pages = () => {
    return (
        <>
            <Header />

            <div className='container-fluid'>
                <Sidebar />
                <div className="right-section">
                    <div className="dashboard-bar">
                        <h2 className="headn-h2">CMS</h2>
                    </div>
                    <div className="main-section">
                        <div className="col-sm-12 col-md-6 col-lg-offset-3 col-xs-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Pages</h3>
                                </div>
                                <div className="panel-body">
                                    <ul className="list-none">
                                        <li><a href="pages.php?id=1" >Home <span className="badge pull-right"><i className="glyphicon glyphicon-pencil"></i></span></a></li>
                                        <li><a href="pages.php?id=2" >About Us <span className="badge pull-right"><i className="glyphicon glyphicon-pencil"></i></span></a></li>
                                        <li><a href="pages.php?id=3" >Contact Us <span className="badge pull-right"><i className="glyphicon glyphicon-pencil"></i></span></a></li>
                                        <li><a href="pages.php?id=4" >Create Account <span className="badge pull-right"><i className="glyphicon glyphicon-pencil"></i></span></a></li>
                                        <li><a href="pages.php?id=5" >Frequently Asked Questions <span className="badge pull-right"><i className="glyphicon glyphicon-pencil"></i></span></a></li>
                                        <li><a href="pages.php?id=6" >Privacy Policy <span className="badge pull-right"><i className="glyphicon glyphicon-pencil"></i></span></a></li>
                                        <li><a href="pages.php?id=8" >Returns & Refunds <span className="badge pull-right"><i className="glyphicon glyphicon-pencil"></i></span></a></li>
                                        <li><a href="pages.php?id=9" >My Account <span className="badge pull-right"><i className="glyphicon glyphicon-pencil"></i></span></a></li>
                                        <li><a href="pages.php?id=10" >Terms Of Use <span className="badge pull-right"><i className="glyphicon glyphicon-pencil"></i></span></a></li>
                                        <li><a href="pages.php?id=11" >Brands <span className="badge pull-right"><i className="glyphicon glyphicon-pencil"></i></span></a></li>
                                        <li><a href="pages.php?id=13" >Footer <span className="badge pull-right"><i class="glyphicon glyphicon-pencil"></i></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Pages