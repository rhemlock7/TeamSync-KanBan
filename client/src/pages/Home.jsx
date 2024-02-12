import { useState } from "react";
import { useQuery } from "@apollo/client";
import ProjectContainer from "../components/ProjectContainer";
import CardModal from "../components/CardModal";

import { QUERY_ONE_PROJECT } from "../utils/queries";



function Home() {
    const [cardModal, setCardModal] = useState("")

    const { loading, data } = useQuery(QUERY_ONE_PROJECT, {
        variables: { projectId: "65ca4844697310a1494d15d0" },
    });

    if (loading) {
        return (<div>Loading...</div>)
    }

    console.log("CardModal", cardModal)

    return (
        <div className="gradient-bg px-5 h-screen">
            <ProjectContainer
                setCardModal={setCardModal}
                data={data}
            />
            {(cardModal !== "") ? <CardModal setCardModal={setCardModal} /> : <></>}
            {/* <CardModal />  */}

        </div>
    )
}

export default Home;
