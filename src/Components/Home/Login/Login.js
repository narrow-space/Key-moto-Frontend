import React, { useState } from 'react';
import { Alert, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import Useauth from '../../Hooks/Useauth';
import Header from '../Header/Header';

const Login = () => {
  const { EmailLogin, user, setUser, setIsLoading } = Useauth()
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('')
  const [alert, setAlert] = useState()
  const history = useHistory()
  const location = useLocation()
  const redirect_uri = location.state?.from || '/home'
 console.log(alert)


  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    console.log(e.target.value)
  }


  const handlePasswordChange = (e) => {
    setpassword(e.target.value)
    console.log(e.target.value)
  }

  const handleEmailLogIn = (e) => {
    e.preventDefault()
    EmailLogin(email, password)
      .then((res) => {
        if(res.user.accessToken){
          swal("Good job!", "Successfully Log In", "success");
        }
        setIsLoading(true)
        setUser(res.user)
        console.log(user)
        history.push(redirect_uri)
        setAlert('')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if(errorCode=="auth/wrong-password"){
          swal("Worng!", "Password Wrong", "warning");
        }
        if(errorCode=="auth/user-not-found"){
          swal("Worng!", "Invalid Email & password", "warning");
        }
       
      })
      .finally(() => {
        setIsLoading(false)
      })


  }



  return (
    <>
      <Header></Header>
      <Row>
        <Col sm={8}></Col>
        <Col sm={4}></Col>
      </Row>
      <Row>
        <Col sm></Col>
        <Col sm={5}>
          <h3 className="mt-3 text-info">Please Login</h3>


          <Form onSubmit={handleEmailLogIn} className="mt-5" >
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
            </Form.Group>

            {/* {
              alert == "auth/wrong-password" &&
              <Alert variant="danger">Password Wrong</Alert>
            }
            {
              alert == "auth/user-not-found" &&
              <Alert variant="danger">Invalid Email & password</Alert>
            } */}

            <input className="btn btn-danger w-100" type="submit" value="LogIn" />
          </Form>
          {/* <div className="d-flex">
            <input className="btn btn-warning w-50 mt-4" onClick={handlegooglelogin} type="submit" value="Google sign in" />
            <input className="btn btn-success w-50 mt-4 mx-4 p-4" onClick={handleGithublogin} type="submit" value="Github SignIn" />


          </div> */}



        </Col>
        <Col sm></Col>
      </Row>
      <Link className="text-decoration-none " to="/register"><p className="text-info my-3">Are you new user? please register</p></Link>
    </>
  );
};

export default Login;