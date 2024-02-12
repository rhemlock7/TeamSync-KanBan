import { useState } from "react";
// import { useQuery } from '@apollo/client';
// import { useState } from "react";
import { useQuery } from "@apollo/client";
import ProjectContainer from "../components/ProjectContainer";
import CardModal from "../components/CardModal";

import { QUERY_ONE_PROJECT } from "../utils/queries";



function Home() {
    // const [modalOpen, setModalOpen] = useState(false)
    const [cardModal, setCardModal] = useState("")

    const { data } = useQuery(QUERY_ONE_PROJECT, {
        variables: { projectId: "65ca36dbf531d6474dbdd8eb" },
    });
    console.log(data);

    return (
        <div className="gradient-bg px-5 h-screen">

            <ProjectContainer
                setCardModal={setCardModal}
                data={data}
            />

            {(cardModal !== "") ? <CardModal /> : <></>}
            {/* <CardModal />  */}

        </div>
    )
}

export default Home;
