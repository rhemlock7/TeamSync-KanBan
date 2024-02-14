import { useQuery, useMutation } from "@apollo/client";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { QUERY_PROJECTS } from "../utils/queries";
import { ADD_PROJECT } from '../utils/mutations'

function ProjectSideNav() {

    // State
    const [showProjectInput, setShowProjectInput] = useState(false);
    const [projectTitle, setProjectTitle] = useState('');

    // Mutations
    // const [AddProject] = useMutation(ADD_PROJECT, {
    //     variables: { title: projectTitle, projectAuthor: $projectAuthor, authId: $authId },
    // });

    // useQueries
    const { loading, data } = useQuery(QUERY_PROJECTS, {});

    if (loading) {
        return <div>Loading...</div>
    }

    const projects = data.projects

    console.log(data)

    function handleProjectTitle(e) {
        setProjectTitle(e.target.value)
    }

    function showProjectForm() {
        setShowProjectInput(!showProjectInput)
    }

    return (
        <div className="px-5 pt-4 flex flex-col">
            <button onClick={showProjectForm} className="button-cta border-none text-white drop-shadow-xl mb-5">Create Project</button>
            {showProjectInput ? (
                <form className="mb-3">
                    <input
                        className="input-border p-1 text-blackd"
                        placeholder="Project Name"
                        onChange={handleProjectTitle}
                    />
                    <button className="ml-2 px-3 py-1">Create</button>
                </form>
            ) : <></>}
            {projects.map(project => (
                <div key={project._id} className="flex justify-between items-center">
                    <Link className="mt" >{project.title}</Link>
                    <p>Del</p>
                </div>
            ))}
        </div>
    )
}

export default ProjectSideNav
