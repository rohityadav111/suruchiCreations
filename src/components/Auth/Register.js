import React, { useState } from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import SocialTags from '../pages/SocialTags'
import { useNavigate } from 'react-router';

const Register = () => {
    let navigate = useNavigate()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [password, setPassword] = useState("")

     let data = {name,email,phone,password}
     
    const submit =async(e)=>{
        e.preventDefault();
        
        let response = await fetch ("https://web-click-api.herokuapp.com/users/signup",{
            method:"POST",
            headers:{
         'Content-Type':'application/json',
         'Accept': 'application/json'
            },
            body:JSON.stringify(data)
        })
      response = await response.json();
      console.log(response)
      if(response.success){
         navigate("/login")
      }
    }
    return (
        <>
        
            <section className="breadcumb py-5">
                <div className="container">
                    <div className="row">
                        <h1 className="text-center w-100 text-white">Create An Account</h1>
                    </div>
                </div>
                <div className="ul-list">
                    <ul className="text-center mt-3">
                        <li className="list-inline-item"><a href="#" className="text-white">Home</a></li>
                        <li className="list-inline-item text-white">/</li>
                        <li className="list-inline-item text-white">Create An Account</li>
                    </ul>
                </div>
            </section>

            
            <section className="create-form py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 margin-auto-center">
                            <p>Sign up for a free account at Dearpet.</p>
                            <form onSubmit={submit} className="p-3 mt-4 pt-5 pb-5">
                                <div className="row">
                                    <div className="col-md-6 create_filed">
                                        <input type="text" name="name" placeholder=" Name *" required  value={name} onChange={e => setName(e.target.value)} className="w-100 border-0 mb-3"/>
                                    </div>

                                    <div className="col-md-6 create_filed">
                                        <input type="email" name="email" placeholder=" Email *" required value={email} onChange={e => setEmail(e.target.value)} className="w-100 border-0 mb-3"/>
                                    </div>

                                    <div className="col-md-6 create_filed">
                                        <input type="text" name="phone" placeholder=" Phone *" required value={phone} onChange={e => setPhone(e.target.value)} className="w-100 border-0 mb-3"/>
                                    </div>

                                    <div className="col-md-6 create_filed">
                                        <input type="text" name="password" placeholder=" Password *" required value={password} onChange={e => setPassword(e.target.value)} className="w-100 border-0 mb-3"/>
                                    </div>

                                    <div className="col-md-12 create_filed text-center">
                                        <button type="submit" className="border-0 text-white px-3 py-2">Create An Account</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
  
            <SocialTags/>
        </>
    )
}

export default Register