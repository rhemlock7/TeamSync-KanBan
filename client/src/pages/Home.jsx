// import { useState } from "react";
// import { useQuery } from '@apollo/client';
import ProjectContainer from "../components/ProjectContainer";
import CardModal from "../components/CardModal";

// import { QUERY_PROJECTS } from '../utils/queries'

// const { data } = useQuery(QUERY_PROJECTS);
// const projects = data?.projects || [];

// console.log(projects)

function Home() {
    // const [modalOpen, setModalOpen] = useState(false)

    return (
        <div className="gradient-bg px-5 h-screen">
            {/* {loading ? (
                <div>Loading...</div>
            ) : (
                <ProjectContainer />
            )} */}
            <ProjectContainer />

            {/* {modalOpen && (
                <CardModal />
            )} */}
            <CardModal />

        </div>
    )
}

export default Home
