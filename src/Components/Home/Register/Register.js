
               import { Alert, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
               import { Link, useLocation, useHistory } from 'react-router-dom';
               import './Register.css'
               import React, { useState } from 'react';
               import Useauth from '../../Hooks/Useauth';
               import Header from '../Header/Header';

               const Register = () => {
               const [name, setName] = useState('')
               const [email, setEmail] = useState('')
               const { emailregister,setUserName,setUser,setIsLoading,saveUser} = Useauth()
               const [password, setPassword] = useState('')
               const history = useHistory()
               const location = useLocation()
               const [alert,setAlert]=useState('')
               const redirect_uri = location.state?.from ||'/home'

               console.log(alert)



               const handlenameChange = e => {
               setName(e.target.value)
               console.log(e.target.value)
               }



               const handleEmailChange = e => {
               setEmail(e.target.value)
               console.log(e.target.value)
               }
               const handlepasswordChange = e => {
               setPassword(e.target.value)
               console.log(e.target.value)
               }

               const handlereg = (e) => {
               e.preventDefault()
               emailregister(email, password)
               .then((res) => {
               setIsLoading(true)

               //////// send user data to database///

               saveUser(email,name)

               /////////////////////////////
               history.push(redirect_uri)
               setUser(res.user)
               setUserName(name)
               // window.location.reload()
               setAlert("")
               })
               .catch((error) => {
               const errorCode = error.code;
               const errorMessage = error.message;
               setAlert(errorCode)
               })
               .finally(()=>{
               setIsLoading(false)
               })

               }





               return (
               <>
               <Header></Header>
               <div className="banner ">


               <div className="row container ">
               <div className="col-md-5">

               </div>

               <div className="col-md-4 mt-5 ">
               <div className="text-center">

               <h4 className="text-info">Please Register</h4>
               </div>
               <form onSubmit={handlereg} >
               <div className="mb-3 input-from">




               <input onBlur={handlenameChange} placeholder="Enter your name" type="text" className="form-control mt-3" required />

               <input onBlur={handleEmailChange} placeholder="Email" type="email" className="form-control mt-3" required />

               <input onBlur={handlepasswordChange} placeholder="Password" type="password" className="form-control mt-3" required />
               {
               alert =="auth/weak-password" &&
               <Alert variant="danger">Password should be 6 Character</Alert>
               } 
               {
                  alert =="auth/email-already-in-use" && <Alert variant="danger">Email Already Used</Alert>
               }

               <input className="from-btn mt-2 p-3" type="Submit" value="Submit" />


               </div>

               <br /> <br />

               <Link to="/login" className="text-decoration-none "><p className="text-info">Already have an account !! please log in</p></Link>


               {/* <h4 className="text-center mt-3 already-btn">Already have an account??</h4> */}




               </form>


               </div>
               <div className="col-md-4">

               </div>
               </div>
               </div>
               </>
               );
               };

               export default Register;