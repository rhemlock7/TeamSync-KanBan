import Draggable from 'react-draggable';

function CardPreview() {
    return (
        <Draggable>
            <div className="white-bg text-black my-3 p-3 rounded-md">
                <p className="text-lg">Card Title</p>
                <p className="text-sm">Card Description Preview</p>
                <a className='underline' href="">View</a>
            </div>
        </Draggable>
    )
}

export default CardPreview
