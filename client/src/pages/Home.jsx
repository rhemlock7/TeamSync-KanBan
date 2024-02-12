import { useState } from "react";
// import { useQuery } from '@apollo/client';
import ProjectContainer from "../components/ProjectContainer";
import CardModal from "../components/CardModal";

// import { QUERY_PROJECTS } from '../utils/queries'

// const { data } = useQuery(QUERY_PROJECTS);
// const projects = data?.projects || [];

function Home() {
    const [modalOpen, setModalOpen] = useState(false)
    const [cardModal, setCardModal] = useState("")




    return (
        <div className="gradient-bg px-5 h-screen">

            <ProjectContainer 
                setCardModal={setCardModal}
                setModalOpen={setModalOpen}
            />

            {modalOpen && (cardModal !== "") ?  <CardModal /> : <></>}
            {/* <CardModal />  */}

        </div>
    )
}

export default Home
