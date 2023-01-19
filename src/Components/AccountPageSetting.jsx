import React from 'react'
;import Card from 'react-bootstrap/card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';

const AccountPageSetting = () => {
  const navigate=useNavigate();
  return (
    <div>
      <Card style={{ width: '18rem',borderRadius:"0px",marginTop:"20px",marginLeft:"10px" }}>
        <Card.Header style={{textAlign:"center",height:"80px"}}>Account</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item style={{height:"70px",textAlign:"center",cursor:"pointer"}}>Setting</ListGroup.Item>
        <ListGroup.Item style={{height:"70px",textAlign:"center",cursor:"pointer"}}>My Membership</ListGroup.Item>
        <ListGroup.Item style={{height:"70px",textAlign:"center",cursor:"pointer"}}>Engagement Tracker</ListGroup.Item>
        <ListGroup.Item style={{height:"70px",textAlign:"center",cursor:"pointer"}}>Update Password</ListGroup.Item>
        <ListGroup.Item style={{height:"70px",textAlign:"center",cursor:"pointer"}} onClick={()=>{}}>Logout</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
  )
}

export default AccountPageSetting;
