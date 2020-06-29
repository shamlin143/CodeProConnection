
import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";


function PorjectPosts () {
    
const [projectsState, setProjectsState] = useState([]);

useEffect(() => {
    API.getProjects()
    .then(data => {
        console.log(data);
        setProjectsState(data);
        
    })
    }, []);
  
     return (
        <div className="projectposts">
        <Jumbotron>
            <h6>Code Pro Job Postings</h6>
            <h4>Review the projects listed below to find one you are qualified to do and interests you and apply. Good Luck!</h4>
      <li><a href="/PostaProject/">Post a Job</a></li>
      <li><a href="/ProjectPosts/">View Jobs</a></li>
      <li><a href="/signup/">SignUp</a></li>
      <li class="active"><a href="/">Login</a></li>
            </Jumbotron>
        <p>Code Pro Jobs Listings</p>
       
        <div>
           <h3>Project Fee: {projectsState.employerFee}</h3>
            <p>Website description: {projectsState.employerProjectDesc}</p>
          <p>Date Posted: {projectsState.date}</p>

        </div>
        </div>
    )

}

export default PorjectPosts;
