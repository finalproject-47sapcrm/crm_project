import React,{useState} from "react";

import './entry.style.css';
//import { Jumbotron } from 'react-bootstrap';
import {LoginForm} from "../../components/login/Login.comp"
import {ResetPasswordForm} from "../../components/password-reset/PasswordReset.comp"
export const Entry = () => {
const [email,setEmail] = useState('');

const [password,setPassword] = useState('') ;
const [resetpassword,setResetPassword] = useState('login') ; 

const handleOnChange = e =>{

 const {name , value}= e.target;


 switch(name){
   case 'email':
     setEmail(value)
     break
   case 'password':
     setPassword(value)
     break


    default:
       break
 }
 

};


const handleOnSubmit = e =>{
  e.preventDefault();
  if(!email || !password)
  {
   return alert('Please enter a valid email and password');
  }
};//e= event
const handleOnResetSubmit = e =>{
  e.preventDefault();
  if(!email )
  {
   return alert('Please enter a valid email ');
  }
};


const  frmSwitcher =  frmtype => {
  setResetPassword(frmtype);

}


return(

        <div className="entry-page bg">
        {/* <div className="container-fluid bg-light text-dark p-5">
  <div className="container bg-light p-5">
    <h1 className="display-4 fw-bold">Welcome to Admin Dashboard</h1>
    <hr>
      <p>Go to My Website</p>
      <a href="google" className="btn btn-primary">link</a>
      </hr>
      </div>
</div> */}
<div className="container-tablet bg-dark text-dark p-5 form-box">
  
    {/* <h1 className="display-5 fw-bold">Welcome to Admin Dashboard</h1>

      <p>Go to My Website</p> */}
      {resetpassword === "login" && <LoginForm handleOnChange={handleOnChange}
       email={email}
        pas= {password} 
        frmSwitcher={frmSwitcher}
         handleOnSubmit={handleOnSubmit}/> }
      {resetpassword === "reset" && <ResetPasswordForm handleOnChange={handleOnChange}
       email={email}  
       frmSwitcher={frmSwitcher}
        handleOnResetSubmit={handleOnResetSubmit}/> }
      
      
      </div>
</div>
    
    );
};