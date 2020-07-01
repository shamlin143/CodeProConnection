import React, { useState } from "react";

import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import Button from "../components/Button/Button";


function PostaProject() {
  const [project, setProject] = useState({})
  const [formObject, setFormObject] = useState({})
  console.log(formObject);

 

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject(values => {
      return {...values, [name]: value};
    } )
    setProject(value =>{
      return {...project, [name]:value}
      
    })
  };
  
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject) {
      API.saveUser(formObject)
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
                    <h4>SignUp:</h4>
                  </div>
                  </form>
               </div>   
              <div>
            <form onSubmit={handleFormSubmit}>
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
            <Button onClick={handleFormSubmit}>
             Submit 
            </Button>
              <div>
                <h5>
                Brought to you by the Silver Foxes Group This is an app that will allow a freelancer to be connect with people that have coding jobs they need completed.
                I have a coding project that I need someone to complete. Where can I go to find potential candidates. CPC is a website that provides the projects to many possible applicants for a small fee. I am a freelancer looking for paying coding projects. Where can I go to find project possibilities. CPC is a website that brings coding projects to the freelancers attention."
                </h5>
              </div>

              {/* const ProjectPostSchema = new Schema({
    // userCreator: { type: Schema.Types.ObjectId, ref: "login User" },
    freelancerCredentials: { type: String},
    freelancerExperience: { type: String},
    businessType: {type: String},
    employerID: {type: String},
    employerUserName: {type: String},
    appFeatures: [ {type: String}],
    projectId: { type: Schema.Types.ObjectId, ref: "CodePro"},
    projectDesc: { type: String},
    projectNotes: {type: String},
    fee: { type: String},
    date: { type: Date, default: Date.now }
  }); */}
                  
                      <button type='submit'>Signup</button>
                    {/* </SignUpBtn> */}
                
                </form>
                </div>
               
       </Container>
        )
        }
       
  


export default PostaProject;