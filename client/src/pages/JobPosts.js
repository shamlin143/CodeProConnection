import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";


function JobPosts () {
    
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
        <Jumbotron/>
        <div>
           <h3>Project Fee: {projectsState.employerFee}</h3>
            <p>Website description: {projectsState.employerProjectDesc}</p>
          <p>Date Posted: {projectsState.date}</p>

        </div>
        </div>
    )

}

export default JobPosts;
