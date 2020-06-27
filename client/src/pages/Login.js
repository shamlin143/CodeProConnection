import React, { useState, useEffect } from "react";
import LoginBtn from "../components/LoginBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import button from "../components/Button/button";
import {Redirect} from "react-router-dom";



function Login() {
  const [user, setUser] = useState([])
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
  loadUser()
  }, [])

  function loadUser() {
    // API.getUser()
    //   .then(res => 
    //     setUser(res.data)
    //   )
    //   .catch(err => console.log(err));
  };


    function signupclick(event) {
        // return <Redirect to="/signup/" />
        event.preventDefault();
        window.location.href ="/signup";
    }
    
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.email && formObject.password) {
      API.loginUser({
        eamil: formObject.email,
        password: formObject.password,
        })
        .then(res => loadUser())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Jumbotron>
          <h1 className="titleHead"> CodeProConnection</h1>
          <h4>As a Freelancer search job postings to match your skill set.  As a Employer post a job and find a qualified Candidate</h4>
        </Jumbotron>
              <div className="loginText">
                <form >
                  <div className="login ">
                    <h4>Login:</h4>
                  </div>
                  </form>
               </div>   
              <div>
            <form>
              <Input
                onChange={handleInputChange}
                name="email"
                placeholder="email (required)"
              />
              <Input
                onChange={handleInputChange}
                name="Password"
                placeholder="Password (required)"
              />
               <Input
                onChange={handleInputChange}
                name="Password"
                placeholder="Password Verification (required)"
              />
              <div>
                <h5>
                Brought to you by the Silver Foxes Group This is an app that will allow a freelancer to be connect with people that have coding jobs they need completed.
                I have a coding project that I need someone to complete. Where can I go to find potential candidates. CPC is a website that provides the projects to many possible applicants for a small fee. I am a freelancer looking for paying coding projects. Where can I go to find project possibilities. CPC is a website that brings coding projects to the freelancers attention."
                </h5>
              </div>
        
                   
                      <Link to="/login">
                      <LoginBtn renderAs="button">
                      <button onClick={() => { handleFormSubmit()}}></button>
                       <span>Login</span>
                      </LoginBtn>
                      </Link>
                   
                   
                <button type="button" onClick={signupclick} value="SignUp">SignUp</button>
                                   
              </form>
                </div>
               
       </Container>
        )
        }
       
        export default Login;
