import { useState } from "react";
import { useQuery } from "@apollo/client";
import ProjectContainer from "../components/ProjectContainer";
import CardModal from "../components/CardModal";

import { QUERY_ONE_PROJECT, GET_SINGLE_CARD } from "../utils/queries";



function Home() {
    const [cardModal, setCardModal] = useState("")

    const { loading, data } = useQuery(QUERY_ONE_PROJECT, {
        variables: { projectId: "65ca4844697310a1494d15d0" },
    });

    const getCard = useQuery(GET_SINGLE_CARD, {
        variables: { cardId: cardModal.length > 0 ? cardModal : '' },
    }); 

    if (loading || getCard.loading ) {
        return (<div>Loading...</div>)
    }

    return (
        <div className="gradient-bg px-5 h-screen">
            <ProjectContainer
                setCardModal={setCardModal}
                data={data}
            />
            {(cardModal !== "") ? <CardModal card={getCard} setCardModal={setCardModal} /> : <></>}

        </div>
    )
}

export default Home;
