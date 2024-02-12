import Draggable from 'react-draggable';

function CardPreview({setCardModal}) {

    // handle whats clicked to setCardmodal to home cardModal state

    return (
        <Draggable>
            <div className="white-bg text-black my-3 p-3 rounded-md">
                <p className="text-lg">Card Title</p>
                <p className="text-sm">Card Description Preview</p>
                {/* <p cursor='pointer'  className='underline'>View</p> */}
                <button className='p-0 border-none underline hover:bg-transparent hover:scale-100 hover:text-black' onClick={setCardModal}>View</button>
            </div>
        </Draggable>
    )
}

export default CardPreview
