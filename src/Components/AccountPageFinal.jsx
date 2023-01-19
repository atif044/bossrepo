import React,{useEffect,useContext,useState} from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Avatar from '../images/avatar.png';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ListGroup from 'react-bootstrap/ListGroup';
import Account from './Account';
import AccountPageSetting from './AccountPageSetting';
import noteContext from '../contexts/Notes/noteContext';
import { useNavigate } from 'react-router-dom';
const AccountPageFinal = () => {
    let getDetail=useContext(noteContext)
    let {getDetails}=getDetail
    let result={}
    const [results,setResult]=useState({name:"Jackie Chan",email:"supremeforce786@gmail.com"});
    useEffect(  () =>{

     const fetchData=async()=>{
        // eslint-disable-next-line
        result=await getDetails();
        setResult({name:result.name,email:result.email})
        //console.log(result.name)
        //return result;
    };
      fetchData();      
    },[] )

    const theme=useTheme();
    let history=useNavigate();
    const isMedia=useMediaQuery(theme.breakpoints.down('md'));
  return (
   ! isMedia?<>
    <Container style={{display:"flex"}}>
        <Col style={{paddingTop:"40px",width:"auto"}}>
        <Card style={{ width: '13rem',borderRadius:"0px" }}>
        <Card.Header style={{textAlign:"center",height:"80px"}}>Account</Card.Header>
      <ListGroup >
        <ListGroup.Item style={{height:"70px",textAlign:"center",cursor:"pointer"}}>Setting</ListGroup.Item>
        <ListGroup.Item style={{height:"70px",textAlign:"center",cursor:"pointer"}}>My Membership</ListGroup.Item>
        <ListGroup.Item style={{height:"70px",textAlign:"center",cursor:"pointer"}}>Engagement Tracker</ListGroup.Item>
        <ListGroup.Item style={{height:"70px",textAlign:"center",cursor:"pointer"}} onClick={()=>{history('/changepwd')}}>Update Password</ListGroup.Item>
        <ListGroup.Item style={{height:"70px",textAlign:"center",cursor:"pointer"}} onClick={()=>{localStorage.removeItem('token');history("/Login","")}}>Logout</ListGroup.Item>
      </ListGroup>
    </Card>
        </Col>
        <Col style={{height:"auto",width:"auto",marginLeft:"70px"}}>
        <Card style={{ width: 'auto',height:"610px",marginLeft:"0px" }}>
          <Container style={{display:"flex",paddingTop:"20px",width:"auto",height:"auto"}}>
            <Col>
        <div>
            <img src={Avatar} alt={'Avatar'} style={{height:"100%",width:"100%"}}/>
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
            <h6>@alexa</h6>
        </div>
        <div style={{display:"flex",flexDirection:"column",paddingTop:"10px"}}>
            <div><b>Email</b></div>
            <h6>{results.email}</h6>
        </div>
        <div style={{display:"flex",flexDirection:"column",paddingTop:"10px"}}>
            <div><b>Phone Number</b></div>
            <h6>090078601</h6>
        </div>
            </Col>
            <Col style={{marginLeft:"30px",marginTop:"20px",height:"500px"}}>
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
            <div style={{height:"200px",width:"200px",border:"2px solid rgba(0,0,0,0.5)"}}>
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
        </Container>
    </Card>
        </Col>

    </Container>
    </>:
    <>
    <Account/>
    <AccountPageSetting/>    
    </>
  )
}

export default AccountPageFinal
