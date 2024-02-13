import Draggable from 'react-draggable';
import { useState } from "react";
import { useQuery } from "@apollo/client";
import CardModal from "../components/CardModal";

import { GET_SINGLE_CARD } from "../utils/queries";


function CardPreview({cards}) {
    const [cardModal, setCardModal] = useState("")

    const listOfCards = cards.cards

    const getCard = useQuery(GET_SINGLE_CARD, {
        variables: { cardId: cardModal.length > 0 ? cardModal : '' },
    }); 

    if (getCard.loading ) {
        return (<></>)
    }

    return (
        <>
        {listOfCards.map((card) => (
            <Draggable key={card._id}>
                <div className="white-bg text-black my-3 p-3 rounded-md">
                    <p className="text-lg">{card.title}</p>
                    <p className="text-sm">{card.description.substring(0, 60) + '...'}</p>
                    <button className='p-0 border-none underline hover:bg-transparent hover:scale-100 hover:text-black' onClick={() => setCardModal(card._id)}>View</button>
                </div>
            </Draggable>
        ))}
        {(cardModal !== "") ? <CardModal card={getCard} setCardModal={setCardModal} /> : <></>}
        </>
    )
}

export default CardPreview
