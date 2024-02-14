import { useQuery } from "@apollo/client";
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { QUERY_PROJECTS } from "../utils/queries";

function ProjectSideNav() {

    const { loading, data } = useQuery(QUERY_PROJECTS, {});

    if (loading) {
        return <div>Loading...</div>
    }

    const projects = data.projects

    console.log(data.projects)

    return (
        <div className="px-5 pt-4 flex flex-col">
            {projects.map(project => (
                <Link key={project._id}>{project.title}</Link>
            ))}
        </div>
    )
}

export default ProjectSideNav
