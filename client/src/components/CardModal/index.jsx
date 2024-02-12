import CardDescription from './CardDescription';
import './CardModal.css';
import CommentSection from './CommentSection';
import MembersDate from './MembersDate';
import ToDoList from './ToDoList';

function CardModal({setCardModal, card}) {

    const cardData = card.data.card
    console.log(cardData)
    
    return (
        <div className="modal-container pb-12">
            <div className='modal'>
                {/* Card Title & 'X' Button */}
                <div className='flex justify-between items-center'>
                    <h2>{cardData.title}</h2>
                    {/* X button */}
                    <div onClick={() => setCardModal('')} className='modal-header flex justify-end -mt-5'>
                        <p className='text-7xl cursor-pointer'>&times;</p>
                    </div>
                </div>

                {/* Members & Due Date */}
                <MembersDate />

                {/* Description */}
                <CardDescription description={cardData.description} />

                {/* ToDo List */}
                <ToDoList todos={cardData.todoes} />

                {/* Comment Sections */}
                <CommentSection comments={cardData.comments} />
            </div>
        </div>
    )
}

export default CardModal;
