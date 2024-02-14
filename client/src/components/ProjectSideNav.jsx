import { useMutation } from "@apollo/client";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ADD_PROJECT, REMOVE_PROJECT } from '../utils/mutations'
import Auth from '../utils/auth';
import { DeleteTwoTone, QuestionCircleOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
import {GET_USER} from '../utils/queries'


function ProjectSideNav({ projects, setProject }) {

    // State
    const [showProjectInput, setShowProjectInput] = useState(false);
    const [projectTitle, setProjectTitle] = useState('');

    const authId = Auth.getProfile().authenticatedPerson._id
    const projectAuthor = Auth.getProfile().authenticatedPerson.username
    // console.log(authId)

    // Mutations
    const [AddProject] = useMutation(ADD_PROJECT, {
        variables: { title: projectTitle, projectAuthor: projectAuthor, authId: authId },
        refetchQueries: [GET_USER, "user"],
        onCompleted: (data) => {
            console.log(data)
            setProject(data.addProject._id)
        }
    });

    const [RemoveProject] = useMutation(REMOVE_PROJECT, {
        refetchQueries: [GET_USER, "user"]
    });

    function handleProjectTitle(e) {
        setProjectTitle(e.target.value)
    }

    function showProjectForm() {
        setShowProjectInput(!showProjectInput)
    }

    function handleRemoveProject(projectId) {
        RemoveProject({ variables: { userId: authId, projectId: projectId } })
    }

    function handleAddProject(e) {
        e.preventDefault();
        AddProject()
    }

    return (
        <div className="px-5 pt-4 flex flex-col">
            <button onClick={showProjectForm} className="button-cta border-none text-white drop-shadow-xl mb-5">Create Project</button>
            {showProjectInput ? (
                <form className="mb-3" onSubmit={handleAddProject}>
                    <input
                        className="input-border p-1 text-blackd"
                        placeholder="Project Name"
                        onChange={handleProjectTitle}
                    />
                    <button className="ml-2 px-3 py-1">Create</button>
                </form>
            ) : <></>}
            {projects.projects.map((project) => (
                <div key={project._id}>
                    <div className="flex justify-between items-center my-3" >
                        <Link className="text-xl" onClick={() => setProject(project._id)}>{project.title}</Link>
                        <div className="cursor-pointer">
                            <Popconfirm
                                title="Delete the task"
                                description="Are you sure to delete this list?"
                                icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                                okText='Delete'
                                okType='danger'
                                onConfirm={() => handleRemoveProject(project._id)}
                            >
                                <DeleteTwoTone className="text-xl" twoToneColor="#eb2f96" />
                            </Popconfirm>
                        </div>
                    </div>
                    <hr></hr>
                </div>
            ))}
        </div>
    )
}

export default ProjectSideNav;
