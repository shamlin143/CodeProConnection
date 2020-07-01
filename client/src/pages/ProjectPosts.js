
import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";



function PorjectPosts () {

    
const [projects, setProjects] = useState([]);

useEffect(() => {
    API.getProjects()
    .then(data => {
        console.log(data);
        setProjects(data);
        
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
      <li className="active"><a href="/">Login</a></li>

            </Jumbotron>
        <p>Code Pro Jobs Listings</p>
        
        <div>
            {projects.map(project => (
                <div>
                <p key={project._id}> {project.appFeatures} </p>
                <p key={project._id}>{project.freelancerCredentials}</p>
                <p key={project._id}>{project.freelancerExperience}</p>
                <p key={project._id}>{project.date}</p>
                </div>
     ))}
        </div>
        </div>
    )

}


export default PorjectPosts;

