import React from 'react'
import { useState,useContext } from 'react';
import { Button } from 'react-bootstrap';
import { toast, Toaster } from 'react-hot-toast';
import noteContext from '../contexts/Notes/noteContext';
import image from '../images/Background.png'
const ChangePwd = () => {
    let auth=useContext(noteContext);
const {ChangePwd}=auth;
let result
    const [changepass,setchangepass]=useState({op:"",np:""})
    const onChange=(e)=>
    {
            setchangepass({...changepass,[e.target.name]:e.target.value})
           
    }
    const onSubmit=async(e)=>
    {
        e.preventDefault()
        result=await ChangePwd(changepass.op,changepass.np)
            if(result.changePwwd===true)
            {
                return toast.success(result.msg)
            }
            if(result.errors.length>=0)
  { //eslint-disable-next-line
     result.errors.map(error=>{
        toast.error(error.msg);
    }) 
  }

    }
  return (
    <div>
   <Toaster/>
        <form onSubmit={onSubmit} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
         <div style={{width:"auto",backgroundColor:"grey",borderRadius:"360px",paddingLeft:"10px",paddingRight:"10px"}}>
          <h1>
          CHANGE YOUR <b>PASSWORD</b> 
          </h1>
         </div>
        <label style={{color:"black",textOverflow:"auto",marginTop:"10px"}}><h6>OLD PASSWORD</h6></label>
      <div style={{width:"15%",background:"black",borderRadius:"360px"}}>
        <input type="password" title='oldpwd' name='op' onChange={onChange} style={{outline:"none",width:"100%",background:"black",color:"green",borderRadius:"360px",border:"none",paddingLeft:"15px",paddingRight:"8px"}}/>
      </div>
      <div>
      </div>
      <label style={{color:"black",textOverflow:"auto",marginTop:"10px"}}><h6>NEW PASSWORD</h6></label>
      <div style={{width:"15%",background:"black",borderRadius:"360px"}}>
        <input type="password" title='newpwd' color='green' name='np' onChange={onChange} style={{outline:"none",width:"100%",background:"black",color:"green",borderRadius:"360px",border:"none",paddingLeft:"15px",paddingRight:"8px"}}/>
      </div>
      <Button type='submit' variant='success' size='sm' style={{marginTop:"10px",borderRadius:"360px"}}>Change Pssword</Button>
        </form>
    </div>
  )
}

export default ChangePwd
