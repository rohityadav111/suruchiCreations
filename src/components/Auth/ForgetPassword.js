import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import SocialTags from '../pages/SocialTags'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';



const ForgetPassword = () => {

    let navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [show, setShow] = useState(true);
    const [loading, setLoading] = useState(true)

    const [otp,setOtp] = useState("");
  
    const [new_password,setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
 
    let data = { email }
    const sendEmail = async (e) => {
        e.preventDefault()
        let result = await fetch("https://web-click-api.herokuapp.com/users/forgetpassword", {
            method: "POST",

            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })
        result = await result.json()
        console.log(result)

        if (result.success) {
            toast.success(result.message, {
                position: "top-center",
                autoClose: 1000,
             
                })
            setShow(false)
            setLoading(false)
        }else{
            toast.error(result.message, {
                position: "top-center",
                autoClose: 1000,
               
                })

        }

    }

    let value = {otp, email,new_password,confirm_password}

    const resetPassword =async(e)=>{
        console.log(value)
        e.preventDefault()
        let result = await fetch("https://web-click-api.herokuapp.com/users/resetpassword",{
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': "application/json"
            },
          body: JSON.stringify(value)
        })
        result = await result.json()
        console.log(result)
     if(result.success){
        toast.success(result.message, {
            position: "top-center",
            autoClose: 1000,
       
            })
            navigate("/login")
     }else{
        toast.error(result.message, {
            position: "top-center",
            autoClose: 1000,
           
            })

     }
    }
    return (
        <>
           
            <section className="breadcumb py-5">
                <div className="container">
                    <div className="row">
                        <h1 className="text-center w-100 text-white">Forget Password</h1>
                    </div>
                </div>
                <div className="ul-list">
                    <ul className="text-center mt-3">
                        <li className="list-inline-item"><a href="#" className="text-white">Home</a></li>
                        <li className="list-inline-item text-white">/</li>
                        <li className="list-inline-item text-white">Forget Password</li>
                    </ul>
                </div>
            </section>
            

            {
                show ?

                    <section className="forget-password py-5">
                        <div className="container">
                            <div className="row">

                                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 forget-password text-center py-3 p-0 align-self-center">
                                    <div className="gray-color py-2 border-top border-bottom mb-3">
                                        <span className="text-uppercase font-weight-bold">Returning Customer</span>
                                    </div>

                                    <p className="mb-3">We will send you an email to reset your password.</p>


                                    <form onSubmit={sendEmail}>
                                        <div className="col-md-8 login-method">
                                            <input type="email" name="email" placeholder="Email" required="" className="w-100 pl-3 mb-4" value={email} onChange={e => setEmail(e.target.value)} />
                                        </div>

                                        <div className="col-md-7 login-method align-self-center">
                                            <ul className="text-left">
                                                <li className="list-inline-item"><button type='submit' className="border-0"><p className="text-white">Submit Now </p></button></li>
                                                <li className="list-inline-item">Or</li>
                                                <li className="list-inline-item"><a href="#">Cancel</a></li>
                                            </ul>
                                        </div>
                                    </form>

                                </div>

                                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 div-one align-self-center text-center">
                                    <span className="text-white">Or</span>
                                </div>


                                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 forget-password text-center p-0 py-3 ">
                                    <div className="gray-color py-2 border-top border-bottom mb-3 align-self-center">
                                        <span className="text-uppercase font-weight-bold">New Customer</span>
                                    </div>
                                    <ul>
                                        <li>Register with us for a faster checkout,</li>
                                        <li>to track the status of your order and more.</li>

                                        <li><Link to="/suruchi-creations/register" className="create_an">Create An Account</Link></li>
                                    </ul>

                                </div>

                            </div>
                        </div>
                    </section>

                    :
                    <section className="create-form py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 margin-auto-center">
                                    <p>Reset Password</p>
                                    <form  onSubmit={resetPassword} className="p-3 mt-4 pt-5 pb-5">
                                        <div className="row">
                                            <div className="col-md-6 create_filed">
                                                <input type="text" name="otp" placeholder="Enter OTP *" required="" className="w-100 border-0 mb-3" value={otp} onChange={e=> setOtp(e.target.value)} />
                                            </div>

                                            <div className="col-md-6 create_filed">
                                                <input type="email" name="email" placeholder="Your Email Address *" required="" className="w-100 border-0 mb-3" value={email} onChange={e=> setEmail(e.target.value)} />
                                            </div>

                                            <div className="col-md-6 create_filed">
                                                <input type="password" name="new_password" placeholder="Password *" required="" className="w-100 border-0 mb-3" value={new_password} onChange={e=> setPassword(e.target.value)} />
                                            </div>

                                            <div className="col-md-6 create_filed">
                                                <input type="password" name="confirm_password" placeholder="Confirm Password *" required="" className="w-100 border-0 mb-3" value={confirm_password} onChange={e=> setConfirmPassword(e.target.value)}/>
                                            </div>

                                            <div className="col-md-12 create_filed text-center">
                                                <button type="submit" className="border-0 text-white px-3 py-2">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <ToastContainer/>
                    </section>


            }
            <SocialTags />
        
        </>
    )
}

export default ForgetPassword