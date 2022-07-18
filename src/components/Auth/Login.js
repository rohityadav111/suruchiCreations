import React, { useState } from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import SocialTags from '../pages/SocialTags'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {

    let navigate = useNavigate()
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");



    let data = { phone, password }
    const Login = async (e) => {
        e.preventDefault()
        let result = await fetch("https://web-click-api.herokuapp.com/users/signin", {
            method: "POST",
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': "application/json"
            },

            body: JSON.stringify(data)
        });


        result = await result.json();
        console.log(result)

        if (result.success) {
            toast.success(result.message, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            localStorage.setItem("Token", JSON.stringify(result.token))
            localStorage.setItem("user", JSON.stringify(result.result))

            navigate("/suruchi-creations/my-account")
        } else {
            toast.error(result.message, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })

        }

    }



    return (

      

            <div>

                <div>
                    <section className="breadcumb py-5">
                        <div className="container">
                            <div className="row">
                                <h1 className="text-center w-100 text-white">Login</h1>
                            </div>
                        </div>
                        <div className="ul-list">
                            <ul className="text-center mt-3">
                                <li className="list-inline-item"><Link to="/" className="text-white">Home</Link></li>
                                <li className="list-inline-item text-white">/</li>
                                <li className="list-inline-item text-white">Login</li>
                            </ul>
                        </div>
                    </section>
                </div>

                <div>
                    <section className="create-form py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 margin-auto-center">
                                    <p>LOGIN</p>

                                    <form onSubmit={Login} className="p-3 mt-4 pt-5 pb-5">
                                        <div className="row">

                                            <div className="col-md-6 create_filed">
                                                <input type="text" name="phone" id="phone" placeholder="Phone" className="w-100 border-0 mb-3" value={phone} onChange={e => setPhone(e.target.value)} />
                                            </div>

                                            <div className="col-md-6 create_filed">
                                                <input type="text" name="password" id="password" placeholder="Password" className="w-100 border-0 mb-3" value={password} onChange={e => setPassword(e.target.value)} />
                                            </div>

                                            <div className="col-md-12 create_filed text-center">
                                                <button type='submit' className="border-0 text-white px-3 py-2 create_filed" >Login</button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </section>

                    <SocialTags />
                    <ToastContainer />
                </div>
            </div>
      

    )
}

export default Login