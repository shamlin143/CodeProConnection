import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import SubmitBtn from "../components/SubmitBtn"
const mongoose = require("mongoose");

export default PostaProject;


// function handleInputChange(event) {
    // const { name, value } = event.target;
    // setFormObject({...formObject, [name]: value})


    function PostaProject(event) {
        event.preventDefault();
        window.location.href ="/PostaJob";
   
     
    ProjectPost.create() 
      const [ProjectPost, setProjectPost] = useState([])
      const [formObject, setFormObject] = useState({
      employerProjectId: "",
      employerProjectDesc: "",
      employerFee: "",
      date: ""
    })
    .then(user => {
      console.log(`${user.length} users created`);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      mongoose.connection.close();
    })
  
  

    const [projectsState, setProjectsState] = useState([]);

useEffect(() => {
    API.ProjectPost()
    .then(data => {
        console.log(data);
        setProjectsState(data);
    })
    },[])
 
    
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.Employer && formObject.ProjectDescription && formObject.Timeallowed && formObject.DatePosted) {
      API.ProjectPost({
       Employer: formObject.employer,
       ProjectDescription: formObject.ProjectDescription,
       Timeallowed: formObject.Timeallowed,
       DatePosted: formObject.DatePosted,
        })
        .then(user => {
          console.log(`${user.length} users created`);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          mongoose.connection.close();
        });
    }
  };
  var Input = this.Input = Input
    return (
       <div className="PostaJob">
        <Jumbotron>
            <h6>Post Your Code Pro Job Here</h6>
      <li><a href="/PostaProject/">Post a Job</a></li>
      <li><a href="/ProjectPosts/">View Jobs</a></li>
      <li><a href="/signup/">SignUp</a></li>
      <li class="active"><a href="/">Login</a></li>
            </Jumbotron>
           <p>Code Pro Post Form</p>
      <form>
           <Input
                onChange={handleInputChange}
                Employer="name"
                placeholder="name (required)"
              />
           <Input
                onChange={handleInputChange}
                ProjectDescription ="Description"
                placeholder="Description (required)"
              />
           <Input
                onChange={handleInputChange}
                Timeallowed ="Lenght of time"
                placeholder="Lenght of time (required)"
              />
           <Input
                onChange={handleInputChange}
                DatePosted ="Date"
                placeholder="Date Posted (required)"
              />

            <button type="button" onClick={ProjectPost()} value="SubmitBtn">Submit</button>
            </form>
            </div>
        
    );
    }
// const PostaJob = require('../models/ProjectPost');
// PostaJob.collection.drop();


