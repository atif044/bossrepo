import React,{useState,useContext} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import image from '../../images/orderBg.png'
import account from '../../images/account.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiOutlineLock } from 'react-icons/ai';
import { HiUser } from 'react-icons/hi';
import { AiOutlineMail } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import noteContext from '../../contexts/Notes/noteContext';

const SignUp = () => {
    const auth=useContext(noteContext);
    let {signAcc}=auth;
    let history=useNavigate();
    const [credentials,setCredentials]=useState({name:"",email:"",password:""});
    let data=false;
    const handleChange=async(e)=>
{
  e.preventDefault();
  setCredentials({...credentials,[e.target.name]:e.target.value});
  
}
const handleSubmit=async(e)=>
{
  try {
    e.preventDefault();
     data=await signAcc(credentials.name,credentials.email,credentials.password);
   if(data.successSign===true)
    {
      localStorage.setItem('token',data.authToken);
console.log(localStorage.getItem('token'))
      if(localStorage.getItem('token'))
        {
        history("/account","")  
    }
  }
    else{
      if(data.errorr.length>0)
  { //eslint-disable-next-line
     data.errorr.reverse().map(error=>{
        return toast.error(error.msg);
    }) 
  }
    }

  } catch (error) {
    return toast.error("Server Not Responding")
  }
    
}



  return (
    <>
    <Toaster containerStyle={{fontSize:"15px"}} />
      <div style={{backgroundImage: `url(${image})`,backgroundRepeat: 'no-repeat',
  width:'100%',height:"800px",paddingTop:"20px"}}>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"100px"}}>
        <Card style={{ width: '18rem',borderRadius:"20px",marginTop:"-30px"}}>
        <div style={{ display:"flex",alignItems:"center",flexDirection:'column'}}>
    <div style={{display:'flex',justifyContent:"center",flexDirection:"column",alignItems:"center",backgroundColor:"grey",width:"100px",height:"100px",borderRadius:"100% 100% 100% 100%",marginTop:"30px"}}>
    <img src={account} alt={'USER'}style={{width:"50px",height:"50px"}}/>
        </div>
    </div>  
      <Card.Body style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <Card.Title style={{textAlign:"center",paddingTop:"15px",color:"rgb(178,178,178)"}}>SignUp</Card.Title>
        <form onSubmit={handleSubmit}>
        <div style={{display:"flex",backgroundColor:"rgb(217,217,217)", borderRadius:"360px", height:"40px",justifyContent:"center",alignItems:"center",marginBottom:"10px"}}>
                <div><HiUser style={{height:"40px",width:"30px",paddingLeft:"4px",marginRight:"4px"}}/></div>
                <div><input style={{backgroundColor:"rgb(217,217,217)",border:"rgb(217,217,217)",borderRadius:"360px",outline:"none",width:"auto"}} type='text' name='name' autoComplete='off' onChange={handleChange} value={credentials.name}  placeholder='Name'/></div>
            </div>
            <div style={{display:"flex",backgroundColor:"rgb(217,217,217)", borderRadius:"360px", height:"40px",justifyContent:"center",alignItems:"center",marginBottom:"10px"}}>
                <div><AiOutlineMail style={{height:"40px",width:"30px",paddingLeft:"4px",marginRight:"4px"}}/></div>
                <div><input style={{backgroundColor:"rgb(217,217,217)",border:"rgb(217,217,217)",borderRadius:"360px",outline:"none",width:"auto"}} type='email' name='email' autoComplete='off' onChange={handleChange} value={credentials.email}  placeholder='Email'/></div>
            </div>
            <div style={{display:"flex",backgroundColor:"rgb(217,217,217)", borderRadius:"360px", height:"40px",justifyContent:"center",alignItems:"center",marginBottom:"10px"}}>
                <div><AiOutlineLock style={{height:"40px",width:"30px",paddingLeft:"4px",marginLeft:"4px"}}/></div>
                <div><input style={{backgroundColor:"rgb(217,217,217)",border:"rgb(217,217,217)",borderRadius:"360px",outline:"none"}} type='password' name='password' autoComplete='off' onChange={handleChange} value={credentials.password}  placeholder='Password'/></div>
            </div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Button variant="primary" type='submit' style={{width:"100%",borderRadius:"360px"}}>SignUp</Button>
          </div>
    </form>
      </Card.Body>
    </Card>    
    </div>
  </div>
    </>
  )
}

export default SignUp
