import React, { useState } from "react";

import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import button from "../components/Button/button";


function PostaProject() {
  const [project, setProject] = useState({})
  const [formObject, setFormObject] = useState({})
  console.log(formObject);

 

  function handleInputChange(event) {
    const { name, value } = event.target;
    // setFormObject(values => {
    //   return {...values, [name]: value};
    // } )
    setProject(values =>{
      return {...values, [name]:value}
      
    })
  };
  
  function handleFormSubmit(event) {
    event.preventDefault();
    if (project) {
      API.saveProject(project)
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
      <li className="active"><a href="/">Login</a></li>
        </Jumbotron>
              <div className="signUpText">
                <form >
                  <div className="signup ">
                    <h4>Post a Project:</h4>
                  </div>
                  </form>
               </div>   
              <div>
            <form onSubmit={handleFormSubmit}>
             <Input
                onChange={handleInputChange}
                name="userName"
                placeholder="UserName (required)"
              />
              <Input
                onChange={handleInputChange}
                name="projectName"
                placeholder="Project Name (required)"
              />
              <Input
                onChange={handleInputChange}
                name="businessType"
                placeholder="Primary Industry"
              />
               <Input
                onChange={handleInputChange}
                name="projectFeatures"
                placeholder="Functionality Requested"
              />
              <Input
                onChange={handleInputChange}
                name="projectDescription"
                placeholder="Basic description (required)"
              />
              <Input
              onChange={handleInputChange}
              name="projectNotes"
              placeholder="Additional notes about the project"
            />
              <Input
              onChange={handleInputChange}
              name="fee"
              placeholder="Proposed Payment"
            />
            <button onClick={handleFormSubmit}>
             Submit 
            </button>
              <div>
                <h5>
                Please input the information above to post a job. Thank you
                </h5>
              </div>
                   
                </form>
                </div>
               
       </Container>
        )
        }    


export default PostaProject;