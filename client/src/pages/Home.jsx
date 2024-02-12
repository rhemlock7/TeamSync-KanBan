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
}

export default Home;
