
import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";


function ProjectPosts () {
    
const [projectsState, setProjectsState] = useState([]);

useEffect(() => {
    API.getProjects()
    .then(data => {
        console.log(data);
        setProjectsState(data);
        
    })
    }, []);
  
   



    return (
        <div className="jobposts">
        <Jumbotron>
            <h6>Code Pro Job Postings</h6>
            </Jumbotron>
        <p>Code Pro Jobs Listings</p>
       
        <div>
           {console.log(projectsState)}

        </div>
        </div>
    )

}

export default ProjectPosts;
