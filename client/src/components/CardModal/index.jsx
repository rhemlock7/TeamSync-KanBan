import { useState } from 'react';
import {
    CloseCircleTwoTone,
    CheckCircleTwoTone,
} from '@ant-design/icons';
import CardDescription from './CardDescription';
import CommentSection from './CommentSection';
import MembersDate from './MembersDate';
import ToDoList from './ToDoList';
import { useMutation } from '@apollo/client';
import { QUERY_ONE_PROJECT } from '../../utils/queries';
import { UPDATE_CARD } from '../../utils/mutations';
import './CardModal.css';

function CardModal({ setCardModal, card }) {

    const [modalTitle, setModalTitle] = useState('');
    const [showTitleForm, setShowTitleForm] = useState(false);
    const [newDescription, setNewDescription] = useState('');
    const cardData = card.data.card;
    console.log(cardData);

    const [UpdateCard] = useMutation(UPDATE_CARD, {
        variables: { cardId: cardData._id, description: newDescription.length > 0 ? newDescription : cardData.description, title: modalTitle.length > 0 ? modalTitle : cardData.title, expirationDate: '2024-02-15' },
        refetchQueries: [QUERY_ONE_PROJECT, 'projectId']
    });

    function handleModalTitleEdit() {
        setShowTitleForm(!showTitleForm)
    }

    function handleModalTitleInput(e) {
        setModalTitle(e.target.value)
    }

    function handleDescription(e) {
        e.preventDefault()
        setNewDescription(e.target.value)
        // console.log(newDescription)
        
    }

    function handleUpdateCard() {
        console.log('handling description')
        UpdateCard();
        setNewDescription(cardData.description)
    }


    return (
        <div className="modal-container pb-12 text-black">
            <div className='modal'>
                {/* Card Title & 'X' Button */}
                <div className='flex justify-between items-center'>
                    {showTitleForm ? (
                        <form onSubmit={handleUpdateCard} className="flex justify-start items-center">
                            <input
                                className="p-1 text-black border-black"
                                placeholder="New List Title"
                                type="text"
                                value={modalTitle}
                                onChange={handleModalTitleInput}
                            />
                            <div className="ml-2">
                                <button className="m-0 p-0 border-none hover:bg-transparent" onClick={handleModalTitleEdit} ><CloseCircleTwoTone twoToneColor="#eb2f96" /></button>
                                <button className="m-0 p-0 border-none hover:bg-transparent" type="submit"><CheckCircleTwoTone twoToneColor="#52c41a" /></button>
                            </div>
                        </form>
                    ) : <h2 onClick={handleModalTitleEdit}>{cardData.title}</h2>}

                    {/* X button */}
                    <div onClick={() => setCardModal('')} className='modal-header flex justify-end -mt-5'>
                        <p className='text-7xl text-black cursor-pointer'>&times;</p>
                    </div>
                </div>

                {/* Members & Due Date */}
                <MembersDate />

                {/* Description */}
                <CardDescription UpdateCard={UpdateCard} newDescription={newDescription} handleDescription={handleDescription} description={cardData.description} />

                {/* ToDo List */}
                <ToDoList todos={cardData.todoes} />

                {/* Comment Sections */}
                <CommentSection comments={cardData.comments} />
            </div>
        </div>
    )
}

export default CardModal;
