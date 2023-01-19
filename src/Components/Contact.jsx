import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import contact from  '../images/c.png'
import { toast, Toaster } from 'react-hot-toast';
const Contact = () => {
    const [mail,setmail]=useState({name:"",email:"",message:""})
    const mykey="ecd0c97f-eae5-4b11-b6a1-8901771d2b44"
    const onChange=(e)=>
    {
            setmail({...mail,[e.target.name]:e.target.value});
    }
    const onSubmit=async(e)=>
    {
      try
      {
        e.preventDefault()
        const response = await fetch(`https://getform.io/f/${mykey}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(mail)
              });
              console.log(response)
              if(response.redirected)
              {
                return toast.success("Form Submitted Successfully")
              }
              return toast.error('Error occured')
            
      }
      catch(error)
      {

      }
        
    }
  return (
    <div>
        <Toaster/>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <img src={contact} style={{height:"111px",width:"170px",marginBottom:"6px"}} alt={"Contact Us logo"}/>
      <h6>A member from out dedicated team will respond in 24 hours</h6>
        </div>
        <form onSubmit={onSubmit}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div style={{display:"flex",marginRight:"50px"}}>

            <div style={{display:"flex",flexDirection:"column",marginLeft:"30px"}}>
                <label style={{marginBottom:"8px"}}><b>Name</b></label>
            <div style={{ width:"150px",webkitClipPath:"polygon(0 50%,15% 0,85% 0,100% 50%,85% 100%,15% 100%)",backgroundColor:"black"}}>
                    <input onChange={onChange} style={{width:"150px",paddingLeft:"20px",paddingRight:"20px"}} name='name' type='text' />
            </div>
            </div>
        </div>
        <div style={{display:"flex",flexDirection:"column",marginLeft:"25px"}}>
                <label style={{marginBottom:"8px"}}><b>Email</b></label>
            <div style={{ width:"150px",height:"35px",webkitClipPath:"polygon(0 50%,15% 0,85% 0,100% 50%,85% 100%,15% 100%)",backgroundColor:"black"}}>
                    <input onChange={onChange} style={{width:"150px",height:"35px",paddingLeft:"20px",paddingRight:"20px"}} name='email' type='email' />
            </div>
            </div>
            </div>


<div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginRight:"40px",marginTop:"25px"}}>

<div style={{display:"flex",flexDirection:"column"}}>
    <label style={{marginBottom:"8px"}}><b>Message</b></label>
<div style={{ width:"300px",height:"100px",webkitClipPath:"polygon(0 50%,15% 0,85% 0,100% 50%,85% 100%,15% 100%)",backgroundColor:"black"}}>
        <textarea onChange={onChange}  name='message' style={{width:"300px",height:"100px",paddingLeft:"45px",paddingRight:"30px",paddingTop:"4px",paddingBottom:"4px"}} />
</div>
</div>
    <div style={{height:"47px",width:"120px",background:"white",borderRadius:"360px", border:"solid rgb(110,166,247)", borderColor:"blue",marginTop:"30px",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Button type='submit' style={{textAlign:"center",width:"110px",borderRadius:"360px", backgroundColor:"rgb(110,166,247",color:"black"}} disabled={mail.email.length>0&&mail.name.length>2&&mail.message.length>5?false:true}>Submit</Button>
    </div>
</div>            
            </form>  
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"10px"}}>
                <p style={{marginRight:"30px",marginLeft:"15px",cursor:"pointer"}}>Terms of Services</p>
                <p style={{marginRight:"30px",marginLeft:"15px",cursor:"pointer"}}>Top Social</p>
                <p style={{marginRight:"30px",marginLeft:"15px",cursor:"pointer"}}>Privacy Policy</p>
                </div> 
    </div>
    
  )
}

export default Contact
