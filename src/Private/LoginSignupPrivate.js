import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const LoginSignupPrivate = () => {
  return (
    localStorage.getItem('token')?<Navigate to= '/' />:<Outlet/>
  )
}

export default LoginSignupPrivate
