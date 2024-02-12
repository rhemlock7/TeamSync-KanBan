import CardPreview from "./CardPreview";

function List({ setCardModal, list }) {
    const lists = list;

    return (
        <>
            {lists.map((list) => (
                <div key={list._id} className="text-white black-bg px-3 py-2 w-72">
                    <div className='flex justify-between items-center mt-1'>
                        <h3>{list.title}</h3>
                        <button className='button-cta'>New Card</button>
                    </div>
                    <CardPreview cards={list.cards}  setCardModal={setCardModal} />
                </div>
            ))}
        </>
    );
}

export default List;
