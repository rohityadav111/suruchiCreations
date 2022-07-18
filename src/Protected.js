import React from 'react'
import { Navigate } from 'react-router'

const Protected = (props) => {
 const {Cmp}  = props

  if(!localStorage.getItem('Token')){
    return <Navigate to={"/"}/>;
   }
  return (
    <div>
      <Cmp />
    </div>
  )
}

export default Protected