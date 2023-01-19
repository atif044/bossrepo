import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const ChangePwd = () => {
  return (
    !localStorage.getItem('token')?<Navigate to='/Login' replace/>
    :
    <Outlet/>
  )
}

export default ChangePwd
