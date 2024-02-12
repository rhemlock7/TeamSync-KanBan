import CardPreview from "./CardPreview";

function List({ setCardModal, cards, title }) {

    return (
        <div className="text-white black-bg px-3 py-2 w-72">
            <div className='flex justify-between items-center mt-1'>
                <h3>{title}</h3>
                <button className='button-cta'>New Card</button>
            </div>
            <CardPreview cards={cards} setCardModal={setCardModal} />
        </div>
    );
}

export default List;
