import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';


const ChangePassword = () => {
    let navigate = useNavigate()
    const [input, setInput] = useState({
        password: '',
        new_password: '',
        confirm_password: ''
    });
    const [error, setError] = useState({
        password:'',
        new_password: '',
        confirm_password: ''
    })

    const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({ ...prev, [name]: value }));
        validateInput(e);
    }

    const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
            const stateObj = { ...prev, [name]: "" };

            switch (name) {
                case "password":
                    if (!value) {
                        stateObj[name] = "Please enter old password.";
                    }
                    break;
                case "new_password":
                    if (!value) {
                        
                    } else if (input.confirm_password && value !== input.confirm_password) {
                        stateObj[" confirm_password"] = "Password and Confirm Password does not match.";
                    } else {
                        stateObj[" confirm_password"] = input.confirm_password ? "" : error.confirm_password;
                    }
                    break;

                case "confirm_password":
                    if (!value) {
                        
                    } else if (input.new_password && value !== input.new_password) {
                        stateObj[name] = "Password and Confirm Password does not match.";
                    }
                    break;

                default:
                    break;
            }

            return stateObj;
        });
    }
    const PasswordSubmit = async (e) => {
        e.preventDefault()
        if (localStorage.getItem('user')) {
            const userId = JSON.parse(localStorage.getItem('user'))._id
            const formData = new FormData()
            formData.append('password', input.password)
            formData.append('new_password', input.new_password)
            formData.append('confirm_password', input.confirm_password)
            formData.append('id', userId)

            let response = await fetch("https://web-click-api.herokuapp.com/users/changepassword", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('Token'))}`
                },
                body: formData
            })
            response = await response.json()
            if (response.success) {
                toast.success(response.message, {
                    position: "top-center",
                    autoClose: 1000,

                })
                navigate('/suruchi-creations/my-account')
            }
            else {
                toast.error(response.message, {
                    position: "top-center",
                    autoClose: 1000,

                })

            }

        } else {
            toast.warn("Please Login", {
                position: "top-center",
                autoClose: 1000,

            })

        }

    }

    return (
        <div>

            <div className="body-content py-5">
                <div className="container">
                    <div className="my-wishlist-page">
                        <div className="row">
                            <Sidebar />
                            <div className="col-md-8 col-lg-9 profileinfo change-password">
                                <div className="bordarea">
                                    <h3 className='text-center'> Change Password </h3>
                                    
                                    <div className="login-form  changepass-form ">
                                        <form onSubmit={PasswordSubmit}>
                                            <p className="loginsubtitle text-center">Use the form below to change the password for your account.</p>
                                            <div className='text-center' style={{fontSize: "25px", color:"red"}}>
                                            {error.confirm_password && <span className='err'>{error.confirm_password}</span>}
                                            </div>
                                           
                                            <div className="form-group create_filed change-name mt-3">
                                                <input type="password"
                                                    name="password"
                                                    value={input.password}
                                                    onChange={onInputChange}
                                                    className="w-100"
                                                    required="required"
                                                    placeholder="Current Password:"
                                                />
                                                
                                            </div>
                                            <div className="form-group create_filed change-name">
                                                <input type="password"
                                                    className="w-100"
                                                    value={input.new_password}
                                                    onChange={onInputChange}
                                                    name="new_password"
                                                    required="required"
                                                    placeholder="New Password:"
                                                    onBlur={validateInput} 
                                                />
                                               
                                            </div>
                                            <div className="form-group create_filed change-name">
                                                <input type="password"
                                                    className="w-100"
                                                    value={input.confirm_password}
                                                    onChange={onInputChange}
                                                    name="confirm_password"
                                                    required="required"
                                                    placeholder="Re-enter New Password"
                                                    onBlur={validateInput}
                                                />
                                               
                                            </div>
                                            <div className="ps_cart">
                                                <button type="submit" name="changepassword" className="btn btn-main py-2 px-3 align-self-center mx-auto">Save Changes </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
          
        </div>
    )
}

export default ChangePassword