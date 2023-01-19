import './App.css';
import NavBar2 from './Components/NavBar2';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import LogIn from './Components/Auth/LogIn'
import Home from './Components/Home';
import NoteState from './contexts/Notes/NoteState';
import Contact from './Components/Contact';
import SignUp from './Components/Auth/SignUp';
import Account from './Components/Account';
import AccountPageFinal from './Components/AccountPageFinal';
import AccountPAgeAuth from './Private/AccountPAgeAuth';
import LoginSignupPrivate from './Private/LoginSignupPrivate';
import Order from './Components/Order';
import ChangePwd from './Components/ChangePwd';
import ChangePd from './Private/ChangePwd';
function App() {
  return (
    <>
    <NoteState>

    
    <NavBar2/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/account' element={<AccountPAgeAuth/>} >
        <Route exact path='/account' element={<AccountPageFinal/>}/>
        </Route>
      <Route exact path='/Login' element={<LoginSignupPrivate/>}>
      <Route exact path='/Login' element={<LogIn/>}/>
      </Route>
      <Route exact path='/Signup' element={<LoginSignupPrivate/>}>
      <Route exact path='/Signup' element={<SignUp/>}/>
      </Route>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/Order' element={<Order/>}/>
      <Route exact path='/changepwd' element={<ChangePd/>}>
        <Route exact path='/changepwd' element={<ChangePwd/>}/>
        </Route>
        <Route exact path='/*' element={<h1>Doesnt exist</h1>}/>
    </Routes>
   
    </NoteState>

    </>
  );
}

export default App;
