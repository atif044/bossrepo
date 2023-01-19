import React from 'react';
import image from '../../src/images/orderBg.png'
import '../styles/order.css'
//import Order from 'react-bootstrap';
//import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoIosCheckmarkCircle, IoIosCart } from "react-icons/io";
// import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function Order() {
  const navigate=useNavigate();
  const onSUbmit=(e)=>
  {
      e.preventDefault();
      if(!localStorage.getItem('token'))
      {
          navigate("/Signup")
          window.scrollTo(0,0)
      }
      else{
        console.log("placed success")
      }
  }
  return (
    <div style={{
      backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat',
      width: '100%', height: "100%", padding:"1%"
    }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <h3>TOP SOCIAL</h3>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

        <IoIosCheckmarkCircle style={{ height: "60px", width: "50px" }} /><lu style={{ height: "3px", width: "40px", backgroundColor: "black" }} />
        <IoIosCheckmarkCircle style={{ height: "60px", width: "50px" }} /><lu style={{ height: "3px", width: "40px", backgroundColor: "black" }} />
        <IoIosCart style={{ height: "60px", width: "50px" }} />

      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", fontSize: "large", marginTop: "1rem" }}>
        <h5 style={{ marginRight: "2rem", border: "30px", borderColor: "black" }}>2</h5> <h5>CONFIRM YOUR ORDER</h5></div>

      <div className="forms" style={{   justifyContent: "center", alignItems: "center" }}>

        <div className="form1-col" style={{  justifyContent: "center", alignItems: "center", flexDirection: "column" }} >

          <div style={{ header: "rounded", flexDirection: "row", width: "100%", textAlign: "start", color: "white", background: "linear-gradient(90deg, rgb(18, 194, 233), rgb(196, 113, 237), rgb(246, 79, 89)" }}>
            <ul class="list-unstyled d-flex px-5 align-items-center">
              <li class="text-center d-flex justify-content-center align-items-center">1 </li>
              <li class="mx-3"> 
                <h6 class="mb-0 mt-2">CONTACT INFORMATION</h6>
                
              </li>
            </ul>
          </div>

          <form style={{ width: "100%", height: "270px", backgroundColor: "white",padding:'1%'}}>

            <div class="row">
              <div class="col">
                <label for="firstname" class="form-label"><h6>First Name</h6></label>
                <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
              </div>
              <div class="col">
                <label for="lastname" class="form-label"><h6>Last Name</h6></label>
                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
              </div>
            </div>

            <div class="col-md-6" style={{ width: "100%" }}>
              <label for="inputEmail4" class="form-label"><h6>Email</h6></label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
            </div>


            <div class="col-md-2" style={{ width: "100%" }}>
              <label for="inputZip" class="form-label"><h6>Zip</h6></label>
              <input type="text" class="form-control" id="inputZip" placeholder="Zip Code" />
            </div>
          </form>

        </div>

        <div className="form2-col" style={{  justifyContent: "center", alignItems: "center", flexDirection: "column" }}>

          <div style={{ header: "rounded", flexDirection: "row", width: "100%", textAlign: "start", color: "white", background: "linear-gradient(90deg, rgb(18, 194, 233), rgb(196, 113, 237), rgb(246, 79, 89)" }}>
            <ul class="list-unstyled d-flex px-5 align-items-center">
              <li class="text-center d-flex justify-content-center align-items-center">2 </li>
              <li class="mx-3">
                <h6 class="mb-0 mt-2">TikTok Account Info</h6>
              </li>
            </ul>
          </div>

          <form style={{ width: "100%", height: "340px", backgroundColor: "white",padding:'1%'  }}>

            <div class="col">
              <div class="col">
                <label for="firstname" class="form-label"><h6>TikTok Username</h6></label>
                <input type="text" class="form-control" name id="email" placeholder="username" aria-label="TikTok Username" />
              </div>
              <div class="col">
                <label for="lastname" class="form-label"><h6>Discription</h6></label>
                <textarea placeholder="Tell us what should we target.." name="" id="" cols="35" rows="5" class="form-control"></textarea>
              </div>
            </div>



          </form>

        </div>

        <div className="form3-col" style={{ justifyContent: "center", alignItems: "center", flexDirection: "column" }}>

          <div style={{ header: "rounded", flexDirection: "row", width: "100%", textAlign: "start", color: "white", background: "linear-gradient(90deg, rgb(18, 194, 233), rgb(196, 113, 237), rgb(246, 79, 89)" }}>
            <ul class="list-unstyled d-flex px-5 align-items-center">
              <li class="text-center d-flex justify-content-center align-items-center">3 </li>
              <li class="mx-3">
                <h6 class="mb-0 mt-2">Payment Information</h6>
              </li>
            </ul>
          </div>

          <form style={{ width: "100%", height: "500px", backgroundColor: "white",padding:'1%' }} onSubmit={onSUbmit}>
            <div class="my-3">
              <ul class="list-unstyled d-flex">
                <li class="me-5"><p class="m-0"><h6>Credit Card</h6></p></li>
                <li class="d-flex"><div class="mx-2">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g><path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M1 4h22v2H1V4zm0 14h22v2H1v-2zm18.622-3.086l-.174-.87h-1.949l-.31.863-1.562.003c1.005-2.406 1.75-4.19 2.236-5.348.127-.303.353-.457.685-.455.254.002.669.002 1.245 0L21 14.912l-1.378.003zm-1.684-2.062h1.256l-.47-2.18-.786 2.18zM7.872 9.106l1.57.002-2.427 5.806-1.59-.001c-.537-2.07-.932-3.606-1.184-4.605-.077-.307-.23-.521-.526-.622-.263-.09-.701-.23-1.315-.419v-.16h2.509c.434 0 .687.21.769.64l.62 3.289 1.574-3.93zm3.727.002l-1.24 5.805-1.495-.002 1.24-5.805 1.495.002zM14.631 9c.446 0 1.01.138 1.334.267l-.262 1.204c-.293-.118-.775-.277-1.18-.27-.59.009-.954.256-.954.493 0 .384.632.578 1.284.999.743.48.84.91.831 1.378-.01.971-.831 1.929-2.564 1.929-.791-.012-1.076-.078-1.72-.306l.272-1.256c.656.274.935.361 1.495.361.515 0 .956-.207.96-.568.002-.257-.155-.384-.732-.702-.577-.317-1.385-.756-1.375-1.64C12.033 9.759 13.107 9 14.63 9z"></path></g></svg></div>
                  <div class="mx-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g><path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M1 4h22v2H1V4zm0 14h22v2H1v-2zm18.622-3.086l-.174-.87h-1.949l-.31.863-1.562.003c1.005-2.406 1.75-4.19 2.236-5.348.127-.303.353-.457.685-.455.254.002.669.002 1.245 0L21 14.912l-1.378.003zm-1.684-2.062h1.256l-.47-2.18-.786 2.18zM7.872 9.106l1.57.002-2.427 5.806-1.59-.001c-.537-2.07-.932-3.606-1.184-4.605-.077-.307-.23-.521-.526-.622-.263-.09-.701-.23-1.315-.419v-.16h2.509c.434 0 .687.21.769.64l.62 3.289 1.574-3.93zm3.727.002l-1.24 5.805-1.495-.002 1.24-5.805 1.495.002zM14.631 9c.446 0 1.01.138 1.334.267l-.262 1.204c-.293-.118-.775-.277-1.18-.27-.59.009-.954.256-.954.493 0 .384.632.578 1.284.999.743.48.84.91.831 1.378-.01.971-.831 1.929-2.564 1.929-.791-.012-1.076-.078-1.72-.306l.272-1.256c.656.274.935.361 1.495.361.515 0 .956-.207.96-.568.002-.257-.155-.384-.732-.702-.577-.317-1.385-.756-1.375-1.64C12.033 9.759 13.107 9 14.63 9z"></path></g></svg></div>
                  <div class="mx-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M1 4h22v2H1V4zm0 14h22v2H1v-2zm18.622-3.086l-.174-.87h-1.949l-.31.863-1.562.003c1.005-2.406 1.75-4.19 2.236-5.348.127-.303.353-.457.685-.455.254.002.669.002 1.245 0L21 14.912l-1.378.003zm-1.684-2.062h1.256l-.47-2.18-.786 2.18zM7.872 9.106l1.57.002-2.427 5.806-1.59-.001c-.537-2.07-.932-3.606-1.184-4.605-.077-.307-.23-.521-.526-.622-.263-.09-.701-.23-1.315-.419v-.16h2.509c.434 0 .687.21.769.64l.62 3.289 1.574-3.93zm3.727.002l-1.24 5.805-1.495-.002 1.24-5.805 1.495.002zM14.631 9c.446 0 1.01.138 1.334.267l-.262 1.204c-.293-.118-.775-.277-1.18-.27-.59.009-.954.256-.954.493 0 .384.632.578 1.284.999.743.48.84.91.831 1.378-.01.971-.831 1.929-2.564 1.929-.791-.012-1.076-.078-1.72-.306l.272-1.256c.656.274.935.361 1.495.361.515 0 .956-.207.96-.568.002-.257-.155-.384-.732-.702-.577-.317-1.385-.756-1.375-1.64C12.033 9.759 13.107 9 14.63 9z">
                  </path></g></svg></div>
                  <div class="mx-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M1 4h22v2H1V4zm0 14h22v2H1v-2zm18.622-3.086l-.174-.87h-1.949l-.31.863-1.562.003c1.005-2.406 1.75-4.19 2.236-5.348.127-.303.353-.457.685-.455.254.002.669.002 1.245 0L21 14.912l-1.378.003zm-1.684-2.062h1.256l-.47-2.18-.786 2.18zM7.872 9.106l1.57.002-2.427 5.806-1.59-.001c-.537-2.07-.932-3.606-1.184-4.605-.077-.307-.23-.521-.526-.622-.263-.09-.701-.23-1.315-.419v-.16h2.509c.434 0 .687.21.769.64l.62 3.289 1.574-3.93zm3.727.002l-1.24 5.805-1.495-.002 1.24-5.805 1.495.002zM14.631 9c.446 0 1.01.138 1.334.267l-.262 1.204c-.293-.118-.775-.277-1.18-.27-.59.009-.954.256-.954.493 0 .384.632.578 1.284.999.743.48.84.91.831 1.378-.01.971-.831 1.929-2.564 1.929-.791-.012-1.076-.078-1.72-.306l.272-1.256c.656.274.935.361 1.495.361.515 0 .956-.207.96-.568.002-.257-.155-.384-.732-.702-.577-.317-1.385-.756-1.375-1.64C12.033 9.759 13.107 9 14.63 9z">
                  </path></g></svg></div></li></ul></div>

            <div class="col" >
              <label for="firstname" class="form-label">
                <h6 style={{ marginTop: "1rem" }}>Card Number</h6></label>
              <input type="text" class="form-control" name id="email" placeholder="username" aria-label="TikTok Username" />
            </div>
            <div class="row">
              <div class="col">
                <label for="firstname" class="form-label"><h6 style={{ marginTop: "1rem" }}>Expiration</h6></label>
                <input type="text" class="form-control" placeholder="First Name" aria-label="First name" />
              </div>
              <div class="col">
                <label for="lastname" class="form-label"><h6 style={{ marginTop: "1rem" }}>CVC</h6></label>
                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
              </div>
            </div>

            <div class="d-flex" style={{ marginTop: "1rem" }}>
              <input type="checkbox" name="" id="" /><p class="m-0 mx-3"><h6>
                I have read and agree with the policy
              </h6></p></div>

            <button class="my-3 mx-3 px-5 py-2" type='submit' style={{ width: "80%", borderColor: "none", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#38c838", color: "white", borderRadius: "30px" }}>Place order</button>

            <ul class="list-unstyled d-flex justify-content-center"><li class="mx-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <g><path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M1 4h22v2H1V4zm0 14h22v2H1v-2zm18.622-3.086l-.174-.87h-1.949l-.31.863-1.562.003c1.005-2.406 1.75-4.19 2.236-5.348.127-.303.353-.457.685-.455.254.002.669.002 1.245 0L21 14.912l-1.378.003zm-1.684-2.062h1.256l-.47-2.18-.786 2.18zM7.872 9.106l1.57.002-2.427 5.806-1.59-.001c-.537-2.07-.932-3.606-1.184-4.605-.077-.307-.23-.521-.526-.622-.263-.09-.701-.23-1.315-.419v-.16h2.509c.434 0 .687.21.769.64l.62 3.289 1.574-3.93zm3.727.002l-1.24 5.805-1.495-.002 1.24-5.805 1.495.002zM14.631 9c.446 0 1.01.138 1.334.267l-.262 1.204c-.293-.118-.775-.277-1.18-.27-.59.009-.954.256-.954.493 0 .384.632.578 1.284.999.743.48.84.91.831 1.378-.01.971-.831 1.929-2.564 1.929-.791-.012-1.076-.078-1.72-.306l.272-1.256c.656.274.935.361 1.495.361.515 0 .956-.207.96-.568.002-.257-.155-.384-.732-.702-.577-.317-1.385-.756-1.375-1.64C12.033 9.759 13.107 9 14.63 9z"></path></g></svg></li><li class="mx-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M1 4h22v2H1V4zm0 14h22v2H1v-2zm18.622-3.086l-.174-.87h-1.949l-.31.863-1.562.003c1.005-2.406 1.75-4.19 2.236-5.348.127-.303.353-.457.685-.455.254.002.669.002 1.245 0L21 14.912l-1.378.003zm-1.684-2.062h1.256l-.47-2.18-.786 2.18zM7.872 9.106l1.57.002-2.427 5.806-1.59-.001c-.537-2.07-.932-3.606-1.184-4.605-.077-.307-.23-.521-.526-.622-.263-.09-.701-.23-1.315-.419v-.16h2.509c.434 0 .687.21.769.64l.62 3.289 1.574-3.93zm3.727.002l-1.24 5.805-1.495-.002 1.24-5.805 1.495.002zM14.631 9c.446 0 1.01.138 1.334.267l-.262 1.204c-.293-.118-.775-.277-1.18-.27-.59.009-.954.256-.954.493 0 .384.632.578 1.284.999.743.48.84.91.831 1.378-.01.971-.831 1.929-2.564 1.929-.791-.012-1.076-.078-1.72-.306l.272-1.256c.656.274.935.361 1.495.361.515 0 .956-.207.96-.568.002-.257-.155-.384-.732-.702-.577-.317-1.385-.756-1.375-1.64C12.033 9.759 13.107 9 14.63 9z"></path></g></svg></li>
              <li class="mx-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M1 4h22v2H1V4zm0 14h22v2H1v-2zm18.622-3.086l-.174-.87h-1.949l-.31.863-1.562.003c1.005-2.406 1.75-4.19 2.236-5.348.127-.303.353-.457.685-.455.254.002.669.002 1.245 0L21 14.912l-1.378.003zm-1.684-2.062h1.256l-.47-2.18-.786 2.18zM7.872 9.106l1.57.002-2.427 5.806-1.59-.001c-.537-2.07-.932-3.606-1.184-4.605-.077-.307-.23-.521-.526-.622-.263-.09-.701-.23-1.315-.419v-.16h2.509c.434 0 .687.21.769.64l.62 3.289 1.574-3.93zm3.727.002l-1.24 5.805-1.495-.002 1.24-5.805 1.495.002zM14.631 9c.446 0 1.01.138 1.334.267l-.262 1.204c-.293-.118-.775-.277-1.18-.27-.59.009-.954.256-.954.493 0 .384.632.578 1.284.999.743.48.84.91.831 1.378-.01.971-.831 1.929-2.564 1.929-.791-.012-1.076-.078-1.72-.306l.272-1.256c.656.274.935.361 1.495.361.515 0 .956-.207.96-.568.002-.257-.155-.384-.732-.702-.577-.317-1.385-.756-1.375-1.64C12.033 9.759 13.107 9 14.63 9z"></path></g></svg></li>
              <li class="mx-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M1 4h22v2H1V4zm0 14h22v2H1v-2zm18.622-3.086l-.174-.87h-1.949l-.31.863-1.562.003c1.005-2.406 1.75-4.19 2.236-5.348.127-.303.353-.457.685-.455.254.002.669.002 1.245 0L21 14.912l-1.378.003zm-1.684-2.062h1.256l-.47-2.18-.786 2.18zM7.872 9.106l1.57.002-2.427 5.806-1.59-.001c-.537-2.07-.932-3.606-1.184-4.605-.077-.307-.23-.521-.526-.622-.263-.09-.701-.23-1.315-.419v-.16h2.509c.434 0 .687.21.769.64l.62 3.289 1.574-3.93zm3.727.002l-1.24 5.805-1.495-.002 1.24-5.805 1.495.002zM14.631 9c.446 0 1.01.138 1.334.267l-.262 1.204c-.293-.118-.775-.277-1.18-.27-.59.009-.954.256-.954.493 0 .384.632.578 1.284.999.743.48.84.91.831 1.378-.01.971-.831 1.929-2.564 1.929-.791-.012-1.076-.078-1.72-.306l.272-1.256c.656.274.935.361 1.495.361.515 0 .956-.207.96-.568.002-.257-.155-.384-.732-.702-.577-.317-1.385-.756-1.375-1.64C12.033 9.759 13.107 9 14.63 9z"></path></g></svg></li>
              <li class="mx-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M1 4h22v2H1V4zm0 14h22v2H1v-2zm18.622-3.086l-.174-.87h-1.949l-.31.863-1.562.003c1.005-2.406 1.75-4.19 2.236-5.348.127-.303.353-.457.685-.455.254.002.669.002 1.245 0L21 14.912l-1.378.003zm-1.684-2.062h1.256l-.47-2.18-.786 2.18zM7.872 9.106l1.57.002-2.427 5.806-1.59-.001c-.537-2.07-.932-3.606-1.184-4.605-.077-.307-.23-.521-.526-.622-.263-.09-.701-.23-1.315-.419v-.16h2.509c.434 0 .687.21.769.64l.62 3.289 1.574-3.93zm3.727.002l-1.24 5.805-1.495-.002 1.24-5.805 1.495.002zM14.631 9c.446 0 1.01.138 1.334.267l-.262 1.204c-.293-.118-.775-.277-1.18-.27-.59.009-.954.256-.954.493 0 .384.632.578 1.284.999.743.48.84.91.831 1.378-.01.971-.831 1.929-2.564 1.929-.791-.012-1.076-.078-1.72-.306l.272-1.256c.656.274.935.361 1.495.361.515 0 .956-.207.96-.568.002-.257-.155-.384-.732-.702-.577-.317-1.385-.756-1.375-1.64C12.033 9.759 13.107 9 14.63 9z"></path></g></svg></li></ul>

            <p class="text-center"><h6>
              Your account manager will contact you within a few hours!</h6></p>

          </form>

        </div>

      </div>


    </div>


  );
}
export default Order;