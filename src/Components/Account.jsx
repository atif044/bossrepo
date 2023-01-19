import React,{useEffect,useContext,useState,useRef} from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Avatar from '../images/avatar.png'
import noteContext from '../contexts/Notes/noteContext';
const Account = () => {
    let getDetail=useContext(noteContext)
    let {getDetails}=getDetail
    let result=useRef(0)
    const [results,setResult]=useState({name:"Jackie Chan",email:"supremeforce786@gmail.com",tikUser:"@alexa"});
    useEffect(  () =>{

     const fetchData=async()=>{
         
        result.current=await getDetails();
        setResult({name:result.name,email:result.email})
    };
      fetchData(); 
      // eslint-disable-next-line     
    },[] )

  return (
    <div>

            
      <Card style={{ width: 'auto',marginLeft:"20px",marginRight:"20px" }}>
          <Container style={{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"20px",width:"auto"}}>
            <Col style={{display:"block"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img src={Avatar} alt={'Avatar'} style={{height:"200px",width:"250px"}}/>
        </div>
        <div>
            <h3 style={{textAlign:"center",paddingTop:"20px"}}>{results.name}</h3>
        </div>
        <div>
            <hr style={{color:"black",borderWidth:"3px"}}/>
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
            <div><b>Current Niche</b></div>
            <h6>Artist,Developer</h6>
        </div>
        <div style={{display:"flex",flexDirection:"column",paddingTop:"10px"}}>
            <div><b>TikTok Username</b></div>
            <h6>{results.tikUser}</h6>
        </div>
        <div style={{display:"flex",flexDirection:"column",paddingTop:"10px"}}>
            <div><b>Email</b></div>
            <h6>{results.email}</h6>
        </div>
        <div style={{display:"flex",flexDirection:"column",paddingTop:"10px"}}>
            <div><b>Phone Number</b></div>
            <h6>090078601</h6>
        </div>
        <div>
                <p><b>Quick View</b></p>
                <h5>Date: 29 Dec 2022 </h5>
            </div>
            <div style={{marginTop:"40px"}}>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Tempora fugit repellendus ipsam perspiciatis nem
                o saepe commodi asperiores cumque id labore ad nesciunt 
                necessitatibus mollitia, at aliquid accusantium in corporis quisquam!
                </p>
            </div>
            <div style={{height:"auto",width:"200px",border:"2px solid rgba(0,0,0,0.5)"}}>
            <Table>
                <tbody>
                    <tr style={{textAlign:"center"}}>
                    <td>
                    Total Engagement<br/>178
                    </td>    
                    </tr>
                    <tr style={{textAlign:"center"}}>
                    <td>
                    Likes<br/> 77
                    </td>    
                    </tr>
                    <tr style={{textAlign:"center"}}>
                    <td>
                    Comments<br/> 77
                    </td>    
                    </tr>
                </tbody>
                </Table>            

            </div>
            </Col>
            <Col style={{marginLeft:"30px",marginTop:"20px"}}>
            

            </Col>
        </Container>
    </Card>
    
    </div>
  )
}

export default Account;
