import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Sidebar from './Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import Header from '../Header'
import Footer from '../Footer'

const EditAddress = () => {
    let params = useParams()
    let navigate= useNavigate()
    useEffect(()=>{
        AddressList()
    },[])
   
    const [add_type, setType] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState({
        city: "",
        pinCode: "",
        street: "",
        houseNumber: "",
    })

    let user = JSON.parse(localStorage.getItem('user'))._id
    const AddressList = async () => {
        let result = await fetch(`https://web-click-api.herokuapp.com/shipaddress/${user}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
            }
        });
        result = await result.json();
        console.log(result)
        {
            result.shippingAddressList.map((item)=>{
                if(params.id == item._id){
                    console.log(item.address.city)
                    setName(item.name)
                    setPhone(item.phone)
                    setType(item.add_type)
                    setAddress(item.address)
                    setAddress(item.address)
                    setAddress(item.address)
                    setAddress(item.address)
                }

           })
        }

    }


    const handleAddress = (e) => {
        const newdata = { ...address }
        newdata[e.target.name] = e.target.value
        setAddress(newdata)
    }


    const data = {
        user, name, phone, add_type, address
    }
    const updateAddress = async(e) => {
        e.preventDefault()
       
        let response = await fetch(`https://web-click-api.herokuapp.com/shipaddress/${user}`,{
            method:"PUT",
            headers:{
               
                'Content-Type': 'application/json',
                'Accept': "application/json",
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
            },
            body: JSON.stringify(data)
        })
        response = await response.json()
        console.log(response)

        if(response.success){
            toast.success(response.message, {
                position: "top-center",
                autoClose: 2000,
               
            });
            AddressList();
            navigate('/suruchi-creations/manage-address')
        }else{
            toast.error(response.message, {
                position: "top-center",
                autoClose: 2000,
               
            });

        }
          
    }
    return (
      

        <div className="body-content py-5">
            <div className="container">
                <div className="my-wishlist-page ">
                    <div className="row">
                        <Sidebar />
                        <div className="col-md-8 col-lg-9 profileinfo manage-address border p-4">

                        <div className="mt-3" role="document">
                            <div >
                                <div className="">
                                    <div className="">
                                        <ul className="bg-transparent w-100 border-0 top-content-size-large">
                                            <li className="text-capitalize w-100 list-inline-item"><h3 className="text-center d-block">Edit Address <br /> </h3></li>
                                        </ul>

                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" > <span aria-hidden="true"></span> </button>
                                    </div>
                                    <div className="">
                                        <div className="my-wishlist-page buynowpage ">
                                            <div className="row">
                                                <div className="col-12 profileinfo manage-address">
                                                    <div className="bordarea">

                                                        <div className="profilelist">
                                                            <div className="row">
                                                                <div className="col-md-12 col-12">
                                                                    <form onSubmit={updateAddress} >
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
                                                                                <button type="submit" className="btn btn-warning p-0 btn btn-warning">Update address</button></div>
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
                    </div>
                </div>
            </div>
        </div>
    </div >


   
  )
}

export default EditAddress