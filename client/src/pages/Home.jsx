<<<<<<< HEAD
import React from "react";
// import { useHistory } from "react-router-dom";
import ProjectContainer from "../components/ProjectContainer";
import CardModal from "../components/CardModal";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECTS } from '../utils/queries'
import Auth from '../utils/auth';

function Home() {
    // const history = useHistory([]);
    const { loading, data } = useQuery(QUERY_PROJECTS);

    if (!Auth.loggedIn()) {
        window.location.assign("/login");
        
    }

    const projects = data?.projects || [];

    return (
        <div className="gradient-bg px-5 h-screen">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <ProjectContainer />
            )}
            <CardModal />
        </div>
    );
=======
import { useQuery } from "@apollo/client";
import ProjectContainer from "../components/ProjectContainer";
import ProjectSideNav from '../components/ProjectSideNav';


import { QUERY_ONE_PROJECT } from "../utils/queries";



function Home() {
    const { loading, data } = useQuery(QUERY_ONE_PROJECT, {
        variables: { projectId: "65ca4844697310a1494d15d0" },
    });

    if (loading) {
        return (<div>Loading...</div>)
    }

    return (
        <div className='grid-container h-screen'>
            <div className='project-nav darkGray-bg text-white'>
                <ProjectSideNav />
            </div>
            <div className='grid-outlet'>
                
                <div className="gradient-bg px-5 h-screen">
                    <ProjectContainer
                        data={data}
                        projectId={data.projectId._id}
                    />
                </div>
            </div>
        </div>

    )
>>>>>>> main
}

export default Home;
