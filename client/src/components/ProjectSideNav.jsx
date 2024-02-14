import { useMutation } from "@apollo/client";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ADD_PROJECT } from '../utils/mutations'
import Auth from '../utils/auth';

function ProjectSideNav({ projects, setProject }) {

    // State
    const [showProjectInput, setShowProjectInput] = useState(false);
    const [projectTitle, setProjectTitle] = useState('');

    const authId = Auth.getProfile().authenticatedPerson._id
    const projectAuthor = Auth.getProfile().authenticatedPerson.username
    console.log(authId)

    // Mutations
    const [AddProject] = useMutation(ADD_PROJECT, {
        variables: { title: projectTitle, projectAuthor: projectAuthor, authId: authId },
    });

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
                <form className="mb-3" onSubmit={AddProject}>
                    <input
                        className="input-border p-1 text-blackd"
                        placeholder="Project Name"
                    onChange={handleProjectTitle}
                    />
                    <button className="ml-2 px-3 py-1">Create</button>
                </form>
            ) : <></>}
            {projects.projects.map((project) => (
                <Link key={project._id} onClick={() => setProject(project._id)}>
                    {project.title}
                </Link>
            ))}
        </div>
    )
}

export default ProjectSideNav;
