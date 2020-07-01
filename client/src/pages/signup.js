import React, { useState, useEffect } from "react";
import SignUpBtn from "../components/SignUpBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";



function SignUp() {
  
  const [formObject, setFormObject] = useState({})
  

  

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject(values => {
      return {...values, [name]: value};
    } )
  };
  
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.email && formObject.password) {
      API.saveUser({
        email: formObject.email,
        password: formObject.password,
      
      })
        // .then(res => loadUser())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Jumbotron>
          <h1 className="titleHead"> CodeProConnection</h1>
          <h4>As a Freelancer search job postings to match your skill set.  As a Employer post a job and find a qualified Candidate</h4>
      <li><a href="/PostaProject/">Post a Job</a></li>
      <li><a href="/ProjectPosts/">View Jobs</a></li>
      <li><a href="/signup/">SignUp</a></li>
      <li class="active"><a href="/">Login</a></li>
        </Jumbotron>
              <div className="signUpText">
                <form >
                  <div className="signup ">
                    <h4>SignUp:</h4>
                  </div>
                  </form>
               </div>   
              <div>
            <form onSubmit={handleFormSubmit}>
              <Input
                onChange={handleInputChange}
                name="email"
                placeholder="email (required)"
              />
              <Input
                onChange={handleInputChange}
                name="password"
                placeholder="Password (required)"
              />
               <Input
                onChange={handleInputChange}
                name="password"
                placeholder="Password Verification (required)"
              />
              <button type='submit'>Signup</button>
                   
              <div>
                <h5>
                Brought to you by the Silver Foxes Group This is an app that will allow a freelancer to be connect with people that have coding jobs they need completed.
                I have a coding project that I need someone to complete. Where can I go to find potential candidates. CPC is a website that provides the projects to many possible applicants for a small fee. I am a freelancer looking for paying coding projects. Where can I go to find project possibilities. CPC is a website that brings coding projects to the freelancers attention."
                </h5>
              </div>
                     </form>
                </div>
               
       </Container>
        )
        }
       
  


export default SignUp;