import CardPreview from "./CardPreview";

function List() {
    return (
        <div className="text-white black-bg px-3 py-2 w-72">
            <div className='flex justify-between items-center mt-1'>
                <h3>List Title</h3>
                <button className='button-cta'>New Card</button>
            </div>
            <CardPreview />
            <CardPreview />
            <CardPreview />
            <CardPreview />
        </div>
    )
}

export default List
