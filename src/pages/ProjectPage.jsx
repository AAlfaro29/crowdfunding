import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

function ProjectPage() {
    const [projectData, setProjectData] = useState({pledges: [] });
    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
            return results.json();
            })
            .then((data) => {
            setProjectData(data);
            });
    }, []);
const deleteProject = async ()  => {
    await fetch(`${process.env.REACT_APP_API_URL}projects/${id}`, { 
        method: "delete",
        headers: {
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    })
    history.push('/')
}
    
    
console.log(projectData)
    return (
        <div>
        <h2>{projectData.title}</h2>
        <h3>Created at: {projectData.date_created}</h3>
        <h3>{`Status: ${projectData.is_open}`}</h3>
        <h3>Pledges:</h3>
        <ul>
        {projectData.pledges.map((pledgeData, key) =>{
            return (
            <li>
            {pledgeData.amount} from {pledgeData.supporter}
            </li>
            );
        })}
        <button onClick={deleteProject}> 
        deleteProject 
        </button>
        </ul>
        </div>
    );
}

export default ProjectPage;