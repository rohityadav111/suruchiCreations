import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {

    const navigate = useNavigate()
    const [phone, setPhone] = useState("");
    const[password ,setPassword] = useState("");

    const Login = async(e)=>{
     
        let data = {phone , password}
        e.preventDefault();
        let  response = await fetch("https://web-click-api.herokuapp.com/users/signin",{
            method:"POST",
            headers:{
                'Content-Type': "application/json",
                 'Accept': "application/json"
            },
            body: JSON.stringify(data)
        })
        response = await response.json()
        console.log(response)
        if(response.success){
           
            localStorage.setItem("Token", JSON.stringify(response.token))
            localStorage.setItem("user", JSON.stringify(response.result))
            toast.success(response.message, {
                position: "top-center",
                autoClose: 1000,
               
                });
                navigate("/admin-dashboard")
        }else{
            toast.error(response.message, {
                position: "top-center",
                autoClose: 1000,
               
                });

        }
    }
    return (
        <>
            <section id="bg">
                <div className="container">
                    <div className="login">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                <div className="logins">

                                    <img src={""} alt=""/>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                <div className="logins " style={{padding: 60}}>
                                
                                    <form name="login" id="login" onSubmit={Login}>
                                        <h3>Login</h3>
                                        <div className="form-group">
                                            <label className="font" for="user_name">Phone Number :</label>
                                            <input id="user_name" name="phone" value={phone} onChange={e => setPhone(e.target.value)} className="form-controls font text" required  />
                                        </div>
                                        <div className="form-group">
                                            <label className="font" for="password">Password :</label>
                                            <input id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} className="form-controls font text" type="password" required  />
                                        </div>
                                        <Link className="big-font" to="/forget-password">Forgot password</Link>
                                        <div className="form-group">
                                            <button type="submit" name="submit" className="ok style-design">Login</button>
                                        </div>


                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <ToastContainer/>
            </section>
        </>
    )
}

export default AdminLogin