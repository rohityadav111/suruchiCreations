import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { useEffect,useState } from 'react';


const Sidebar = () => {
    const [userName, setUserName] = useState("")
    useEffect(() => {
        GetProfile();
    
      }, [])
    
  
   
   let navigate = useNavigate()
    function logout() {
        localStorage.clear();
        toast.success("Logout Successfully", {
            position: "top-center",
            autoClose: 1000,
           
        });
        navigate("/")
        
    }
    const userId = JSON.parse(localStorage.getItem('user'))._id
    const GetProfile = async () => {
        let response = await fetch(`https://web-click-api.herokuapp.com/users/${userId}`, {
          method: "GET",
    
        })
        response = await response.json()
        setUserName(response.user.name)
    }
    return (
        <>
        <div className="col-md-4 col-lg-3 col-12">
            <div className="sidebarmyaccount rounded">
                <div className="myprofile text-center">
                    <div className="myprofileimg mb-2"> <i className="fa fa-user bg-white" aria-hidden="true"></i> </div>
                    <div className="myprofilename text-center">
                        <ul className="side-name mb-3">
                            <li className="list-inline-item mr-0">Hello, </li>
                            <li className="list-inline-item mr-0"> {userName}</li>
                        </ul>
                    </div>
                </div>
                <div className="navaccount">
                    <ul>
                        <li ><Link to='/suruchi-creations/my-account' className="text-white"> <span>
                            <i className="fa fa-user" aria-hidden="true"></i>
                        </span> My Account </Link> </li>
                        <li  ><Link to='/suruchi-creations/my-orders' className="text-white"> <span> <i className="fa fa-shopping-bag" aria-hidden="true"></i> </span> My orders </Link> </li>
                        <li ><Link to="/suruchi-creations/manage-address" className="text-white"> <span>
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                        </span> Manage Address </Link> </li>
                        <li ><Link to="/suruchi-creations/wishlist" className="text-white"> <span>
                            <i className="fa fa-heart" aria-hidden="true"></i> </span> Wishlist </Link> </li>
                        <li className="active" ><Link to="/suruchi-creations/change-password" className="text-white"> <span> <i className="fa fa-lock" aria-hidden="true"></i> </span> Change password </Link> </li>
                        <li><a role="button" className="text-white" onClick={logout}> <span> <i className="fa fa-power-off" aria-hidden="true"></i> </span> Logout </a> </li>
                    </ul>
                </div>
            </div>
            <ToastContainer/>
        </div>
        
        </>
    )
}

export default Sidebar