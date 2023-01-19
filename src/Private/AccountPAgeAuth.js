import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const AccountPAgeAuth = () => {
  return (
    !localStorage.getItem('token')?<Navigate to='/Login' replace/>
    :
    <Outlet/>
  )
}

export default AccountPAgeAuth
