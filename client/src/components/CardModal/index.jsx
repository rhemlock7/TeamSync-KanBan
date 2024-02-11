import './CardModal.css';
import MembersDate from './MembersDate';
import ToDoList from './ToDoList';

function CardModal() {
    return (
        <div className="modal-container pb-12">
            <div className='modal'>
                {/* Card Title & 'X' Button */}
                <div className='flex justify-between items-center'>
                    <h2>Card Title</h2>
                    {/* X button */}
                    <div className='modal-header flex justify-end -mt-5'>
                        <p className='text-7xl'>&times;</p>
                    </div>
                </div>

                {/* Members & Due Date */}
                <MembersDate />

                {/* Description */}
                <section className='my-4'>
                    <h3>Description</h3>
                    <p>Add Markdown Input textarea when ready</p>
                </section>

                {/* ToDo List */}
                <ToDoList />

                {/* Comment Sections */}
                <section className='my-4'>
                    <h3>Comments</h3>
                    <p>Add comment section when ready</p>
                </section>
            </div>
        </div>
    )
}

export default CardModal;
