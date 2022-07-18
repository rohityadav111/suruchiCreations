import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingBag, faPowerOff, faHeart, faMapMarker, faLock } from '@fortawesome/free-solid-svg-icons'
import Sidebar from './Sidebar'
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Helmet } from 'react-helmet';

const Profile = () => {

  const [show, setShow] = useState(false);
  const [name, setName] = useState('')
  const [getProfile, setGetProfile] = useState()
  const [loading, setLoading] = useState(true)
  const [userName, setUserName] = useState("")

  useEffect(() => {
    GetProfile();

  }, [])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userId = JSON.parse(localStorage.getItem('user'))._id
  const ProfileUpdate = async (e) => {

    e.preventDefault()
    const formData = new FormData()
    formData.append('name', name)
    let response = await fetch(`https://web-click-api.herokuapp.com/users/updateprofile/${userId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`
      },
      body: formData
    })

    response = await response.json()
    if (response.success) {

      GetProfile()
      handleClose()
      toast.success(response.message, {
        position: "top-center",
        autoClose: 1000,
      });
    }

  }

  const GetProfile = async () => {
    let response = await fetch(`https://web-click-api.herokuapp.com/users/${userId}`, {
      method: "GET",

    })
    response = await response.json()

    setLoading(false)
    setGetProfile(response.user)
    setUserName(response.user.name)
    {
      if (response.user._id == userId) {
        return (
          setName(response.user.name)

        )

      }
    }
  }


  return (


    <div>
      <Helmet>
        <title>My Account</title>
      </Helmet>
      
      <div className="body-content py-5">
        <div className="container">
          <div className="my-wishlist-page">
            <div className="row">
              <Sidebar  />
              <div className="col-md-8 col-lg-9 profileinfo">
                <div className="bordarea">
                  <h3 className="text-center mb-4 w-100">Personal information </h3>
                  {
                    (loading) ? <Stack spacing={2}>


                      <Skeleton variant="rectangular" width={900} height={150} animation="wave" />
                      <Skeleton variant="text" width={900} height={50} />
                      <Skeleton variant="text" width={900} height={50} />
                      <Skeleton variant="text" width={900} height={50} />

                    </Stack>
                      :
                      <>
                        <div className="profilelist">
                          <ul className="text-center w-100">
                            <li className="list-inline-item flaot-left"><p>Name:</p> </li>
                            <li className="list-inline-item"><span> {getProfile.name}</span></li>
                            <li className="list-inline-item flaot-right"><a role="button" data-toggle="modal" data-target="#basicExampleModal" className="rounded edit_profile btn-blues hover_effect1"> <p className="m-0 p-0  text-white" onClick={handleShow}>Edit </p></a>
                            </li>
                          </ul>
                        </div>
                        <div className="profilelist">
                          <ul className="text-center w-100">
                            <li className="list-inline-item"> <p>Mobile no:</p></li>
                            <li className="list-inline-item"> <span> 8376923484 </span> </li>
                            <li className="list-inline-item"><a href="" data-toggle="modal" data-target="#basicExampleModal3" className="rounded edit_profile btn-blues hover_effect1 "><p className="m-0 p-0 text-white"> Edit </p></a> </li>
                          </ul>
                        </div>
                        <div className="profilelist">
                          <ul className="text-center w-100">
                            <li className="list-inline-item"> <p>Deactivated my account </p></li>
                            <li className="list-inline-item"></li>
                            <li className="list-inline-item"><a href="#" data-toggle="modal" data-target="#basicExampleModal5" className="rounded edit_profile btn-blues btn-danger hover_effect1"><p className="m-0 p-0 text-white"> Delete </p> </a> </li>
                          </ul>
                        </div>
                        <div className="profilelist profilefaq">
                          <p>What happens when i update my email address (or mobile number)? Your logn email id (or mobile number ) changes, likewise. you&#39;ll recive all your account related communication on your updated email address.</p>

                          <p>When will my Ramanata account be updated with the new email address (or mobile number)? It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>

                          <p>What happens when i update my email address (or mobile number)? Your logn email id (or mobile number ) changes, likewise. you&#39;ll recive all your account related communication on your updated email address</p>


                        </div>
                      </>
                  }
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="modal fade" id="basicExampleModal3" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="text-capitalize text-center w-100">Change Mobile Number</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
            </div>
            <div className="modal-body">
              <div className="my-wishlist-page buynowpage ">
                <div className="row">
                  <div className="col-12 profileinfo manage-address">
                    <div className="bordarea">
                      <div className="profilelist">
                        <div className="row">
                          <div className="col-12">
                            <form action="" name="chagfrm" method="post">
                              <div className="box">
                                <div className="form-group row">
                                  <div className="col-md-12 col-xs-12 change-name">
                                    <input type="text" name="phone_no" className="form-control w-100" placeholder="Mobile Number*" required="required" />
                                  </div>
                                </div>
                              </div>
                              <div className="change-name-btn text-center w-100">
                                <button type="submit" name="update_phone" className="btn btn-warning p-0"><p className="text-white">Submit</p></button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="basicExampleModal5" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <ul className="w-100 d-block text-center">
                <li>Delete your account</li>
                <li>Please enter your password to delete your account</li>
              </ul>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
            </div>
            <div className="modal-body">
              <div className="my-wishlist-page buynowpage">
                <div className="row">
                  <div className="col-12 profileinfo manage-address">
                    <div className="bordarea">
                      <div className="profilelist">
                        <div className="row">
                          <div className="col-12">
                            <form action="" name="dafrm" method="post">
                              <div className="box">
                                <div className="form-group row">
                                  <div className="col-md-12 col-12 change-name">
                                    <input type="password" name="password" className="form-control" placeholder="Enter Password*" required="required" />
                                  </div>
                                </div>
                              </div>
                              <div className="change-name-btn text-center w-100">
                                <button type="submit" name="delete_account" className="btn btn-warning p-0"><p className="text-white">Delete account</p></button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="modal fade" id="basicExampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <Modal show={show}>
            <div className="modal-content">
              <Modal.Header className="modal-header">
                <Modal.Title>
                  <h4 className="text-capitalize text-center w-100">Change Name</h4> </Modal.Title>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true" onClick={handleClose}>&times;</span> </button>

              </Modal.Header>
              <Modal.Body className="modal-body">
                <div className="my-wishlist-page buynowpage ">
                  <div className="row">
                    <div className="col-12 profileinfo manage-address">
                      <div className="bordarea">
                        <div className="profilelist">
                          <div className="row">
                            <div className="col-12">
                              <form onSubmit={ProfileUpdate} >
                                <div className="box">
                                  <div className="form-group row">
                                    <div className="col-md-12 col-xs-12 change-name">
                                      <input type="text" name="name" defaultValue={name} onChange={(e) => setName(e.target.value)} className="form-control w-100" placeholder="Name*" required="required" />
                                    </div>
                                  </div>

                                </div>
                                <div className="change-name-btn text-center w-100">
                                  <button type="submit" className="btn btn-warning p-0"><p className="text-white">Submit</p></button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </div>
          </Modal>
        </div>

      </div>
   
    </div >

  )
}

export default Profile