import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import './ManageAddress.css'
import { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';




const ManageAddress = () => {
    const [getAddress, setGetAddress] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        AddressList();

    }, [])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [add_type, setType] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const [address, setAddress] = useState({
        city: "",
        pinCode: "",
        street: "",
        houseNumber: "",
    })

    const handleAddress = (e) => {
        const newdata = { ...address }
        newdata[e.target.name] = e.target.value
        setAddress(newdata)
    }
    let user = JSON.parse(localStorage.getItem('user'))._id
    const addAddress = async (e) => {
        e.preventDefault()

        const data = {
            user, name, phone, add_type, address
        }

        let response = await fetch("https://web-click-api.herokuapp.com/shipaddress", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': "application/json",
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,

            },
            body: JSON.stringify(data)
        })
        response = await response.json()
        console.log(response)
        if (response.success) {
            toast.success(response.message, {
                position: "top-center",
                autoClose: 2000,
               
            });
            handleClose()
            AddressList()

        }
        else {
            toast.error(response.message, {
                position: "top-center",
                autoClose: 2000,
                
            });

        }

    }


    const AddressList = async () => {
        let result = await fetch(`https://web-click-api.herokuapp.com/shipaddress/${user}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
            }
        });
        result = await result.json();
       console.log(result)
        setGetAddress(result.shippingAddressList)
        setLoading(false)


    }

    const DeleteAddress = async (id) => {
        let result = await fetch(`https://web-click-api.herokuapp.com/shipaddress/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`
            }
        })

        result = await result.json()
        console.log(result)
        if (result.success) {
            toast.success(result.message, {
                position: "top-center",
                autoClose: 1000,
              
            });
            AddressList()

        }

    }

    return (
        <>
       
            <div className="body-content py-5">
                <div className="container">
                    <div className="my-wishlist-page ">
                        <div className="row">
                            <Sidebar />
                            <div className="col-md-8 col-lg-9 profileinfo manage-address border p-4">

                                {

                                    (loading) ? <Stack spacing={2}>
                                        <Skeleton variant="text" width={150} />
                                        <Skeleton variant="rectangular" width={180} height={50} />
                                        <Skeleton variant="rectangular" width={400} height={200} animation="wave" />

                                    </Stack>
                                        :
                                        <div className="bordarea">
                                            <h3 className="ma_adatitle">Manage Address </h3>

                                            <h5 className="ma_adadd">
                                                <a data-toggle="modal"
                                                    data-target="#basicExampleModal"
                                                    className="btn-upper mb-3 mt-3 text-white btn btn-boder manage-address"
                                                    onClick={handleShow}>  Add a New Address

                                                </a>
                                            </h5>

                                            <div className="profilelist">
                                                <div className="row">

                                                    {
                                                        getAddress && getAddress.map((element, index) => {
                                                            return (
                                                                <div key={index} className="col-md-5 col-12 address-box mb-4">
                                                                    <div className="address_box_chktoship">
                                                                        <h5 className="dausername coshipradio">{element.name}</h5>
                                                                        <address>
                                                                            {element.address.houseNumber}<br />
                                                                            {element.address.street}<br />
                                                                            {element.address.city} {element.address.pinCode}
                                                                        </address>
                                                                        <div className="deliver_option  text-left">
                                                                            <ul className="bg-transparent border-0">
                                                                                <li className="list-inline-item text-center blc"><Link to={`/suruchi-creations/edit-address/${element._id}`} className="blc" data-toggle="modal" data-target="#basicExampleModal1" >Edit</Link></li>
                                                                                <li className="list-inline-item text-center"><a role="button" onClick={() => DeleteAddress(element._id)}>Delete</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )

                                                        })
                                                    }

                                                </div>
                                            </div>

                                        </div>
                                }

                            </div>

                        </div >

                    </div >

                </div >
            </div >

            <div className="modal fade modalcoship" id="basicExampleModal" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <Modal show={show}>
                        <div className="modal-content">
                            <Modal.Header className="modal-header">
                                <Modal.Title className='text-center text-capitalize w-100'>
                                    <h3 className="text-center text-capitalize w-100">Add Address </h3>
                                </Modal.Title>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}> <span aria-hidden="true">&times;</span> </button>
                            </Modal.Header>
                        </div>
                        <Modal.Body className="modal-body">
                            <div className="my-wishlist-page buynowpage ">
                                <div className="row">
                                    <div className="col-12 profileinfo manage-address">
                                        <div className="bordarea">

                                            <div className="profilelist">
                                                <div className="row">
                                                    <div className="col-md-12 col-12">
                                                        <form onSubmit={addAddress} >
                                                            <div className="box">
                                                                <h4 className="text-capitalize edit-heading mb-4">Contact Details</h4>
                                                                <div className="form-group row">
                                                                    <div className="col-md-6 col-xs-12 change-name">
                                                                        <input type="text"
                                                                            className="form-control"
                                                                            name="name"
                                                                            placeholder="Name*"
                                                                            required="required"
                                                                            value={name}
                                                                            onChange={(e) => setName(e.target.value)}
                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 col-xs-12 change-name">
                                                                        <input type="text"
                                                                            className="form-control"
                                                                            name="phone"
                                                                            placeholder="Mobile No*"
                                                                            required="required"
                                                                            value={phone}
                                                                            onChange={(e) => setPhone(e.target.value)}
                                                                        />
                                                                    </div>

                                                                </div>

                                                            </div>
                                                            <div className="box">
                                                                <h4 className="text-capitalize mb-4">Address</h4>
                                                                <div className="form-group row">
                                                                    <div className="col-md-6 col-xs-12 change-name">
                                                                        <input type="text"
                                                                            className="form-control"
                                                                            name="houseNumber"
                                                                            placeholder="Flat, House no.*"
                                                                            required="required"
                                                                            value={address.houseNumber}
                                                                            onChange={(e) => handleAddress(e)}


                                                                        />
                                                                    </div>
                                                                    <div className="col-md-6 col-xs-12 change-name">
                                                                        <input type="text"
                                                                            className="form-control"
                                                                            name="street"
                                                                            placeholder="Area, Colony, Street, Village*"
                                                                            required="required"
                                                                            value={address.street}
                                                                            onChange={(e) => handleAddress(e)}

                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <div className="col-md-6 col-xs-12 change-name">
                                                                        <input type="text"
                                                                            className="form-control"
                                                                            name="city"
                                                                            placeholder="City/Town*"
                                                                            required="required"
                                                                            value={address.city}
                                                                            onChange={(e) => handleAddress(e)}
                                                                        />
                                                                    </div>

                                                                    <div className="col-md-6 col-xs-12 change-name">
                                                                        <input type="text"
                                                                            className="form-control"
                                                                            name="pinCode"
                                                                            value={address.pinCode}
                                                                            onChange={(e) => handleAddress(e)}
                                                                            placeholder="Pin Code*" required="required" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">

                                                                    <div className="col-md-6 col-xs-12">
                                                                        <select className="form-control" name="add_type" value={add_type} onChange={(e) => setType(e.target.value)} required >
                                                                            <option value="">Address Type</option>
                                                                            <option value="Home">Home</option>
                                                                            <option value="Office">Office</option>

                                                                        </select>
                                                                    </div>
                                                                </div>



                                                                <div className="change-name-btn update-btn text-center w-100">
                                                                    <button type="submit" className="btn btn-warning p-0 btn btn-warning">Add address</button></div>
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
                    </Modal>
                </div>
            </div>


     

            <ToastContainer />

        </>

    )
}

export default ManageAddress