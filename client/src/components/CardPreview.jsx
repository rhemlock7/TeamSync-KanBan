import Draggable from 'react-draggable';

function CardPreview({cards, setCardModal}) {

    // handle whats clicked to setCardmodal to home cardModal state

    const listOfCards = cards.cards

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
        </>
    )
}

export default CardPreview
