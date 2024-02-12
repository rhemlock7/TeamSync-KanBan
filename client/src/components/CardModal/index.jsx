import CardDescription from './CardDescription';
import './CardModal.css';
import CommentSection from './CommentSection';
import MembersDate from './MembersDate';
import ToDoList from './ToDoList';

function CardModal({setCardModal}) {

    
    
    return (
        <div className="modal-container pb-12">
            <div className='modal'>
                {/* Card Title & 'X' Button */}
                <div className='flex justify-between items-center'>
                    <h2>Card Title</h2>
                    {/* X button */}
                    <div onClick={() => setCardModal('')} className='modal-header flex justify-end -mt-5'>
                        <p className='text-7xl cursor-pointer'>&times;</p>
                    </div>
                </div>

                {/* Members & Due Date */}
                <MembersDate />

                {/* Description */}
                <CardDescription />

                {/* ToDo List */}
                <ToDoList />

                {/* Comment Sections */}
                <CommentSection />
            </div>
        </div>
    )
}

export default CardModal;
