
import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";



function ProjectPosts () {

    
const [projects, setProjects] = useState([]);

useEffect(() => {
    API.getProjects()
    .then(res => {
        setProjects(res.data);
    })
    }, []);
  

     return (
        <div className="projectposts">
        <Jumbotron>
            <h6>Code Pro Job Postings</h6>
            <row>
            <h4>Review the projects listed below to find one you are qualified to do and interests you, and apply. Its that Simple!</h4>
            <li><a href="/PostaProject/">Post a Job</a></li>
            <li><a href="/ProjectPosts/">View Jobs</a></li>
            <li><a href="/signup/">SignUp</a></li>
            <li className="active"><a href="/">Login</a></li>
            </row>

            </Jumbotron>
        <p>Code Pro Jobs Listings</p>
        
        <div>
            {projects.map(project => (
               <div class="container"> 
                    <div class="row mx-1 my-4 ">
                    <div class="card border border-info bg-success h-100">
                {/* <p key={project._id}>{project._id}</p><br/>   */}
                <p key={project._id}>Project Name: {project.projectName}</p>
                <p key={project._id}>UserName: {project.userName}</p>
                <p key={project._id}>Project Type: {project.businessType}</p>
                <p key={project._id}>Project Description: {project.projectDescription}</p>
                <p key={project._id}>Notes: {project.projectNotes}</p>
                <p key={project._id}>Offer: ${project.fee}</p><br></br>                
                {/* <p key={project._id}>{project.date}</p> */}
                        </div>
                    </div>
            </div>
            ))}    

        </div>
        </div>
    )

}


export default ProjectPosts;

