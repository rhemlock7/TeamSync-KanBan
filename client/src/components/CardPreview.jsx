import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { REMOVE_CARD } from '../utils/mutations';
import CardModal from "../components/CardModal";
import { DeleteTwoTone, QuestionCircleOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { GET_SINGLE_CARD, QUERY_ONE_PROJECT } from "../utils/queries";

function CardPreview({ listId, cards }) {
    const [cardModal, setCardModal] = useState("");
    const listOfCards = cards.cards;

    // Queries
    const getCard = useQuery(GET_SINGLE_CARD, {
        variables: { cardId: cardModal.length > 0 ? cardModal : '' },
    });

    // Mutations
    const [RemoveCard] = useMutation(REMOVE_CARD, {
        refetchQueries: [QUERY_ONE_PROJECT, 'projectId']
    });

    if (getCard.loading) {
        return null; // Return null while loading
    }

    function handleRemoveCard(cardId) {
        RemoveCard({ variables: { cardId: cardId, listId: listId } });
    }

    function onDragEnd(result) {
        // TODO: Implement drag and drop logic here
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {listOfCards.map((card, index) => (
                            <Draggable key={card._id} draggableId={card._id} index={index} offset="10px,10px">
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <div
                                            className="white-bg text-black my-3 p-3 rounded-md"
                                            style={{
                                                ...provided.draggableProps.style,
                                                backgroundColor: snapshot.isDragging ? 'lightblue' : 'white'
                                            }}
                                        >
                                            <p className="text-lg">{card.title}</p>
                                            <p className="text-sm">{card.description.substring(0, 60) + '...'}</p>
                                            <div className='flex justify-between items-center'>
                                                <button className='p-0 border-none underline hover:bg-transparent hover:scale-100 hover:text-black' onClick={() => setCardModal(card._id)}>View</button>
                                                <Popconfirm
                                                    title="Delete the task"
                                                    description="Are you sure to delete this card?"
                                                    icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                                                    okText='Delete'
                                                    okType='danger'
                                                    onConfirm={() => handleRemoveCard(card._id)}
                                                >
                                                    <DeleteTwoTone twoToneColor="#eb2f96" />
                                                </Popconfirm>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                        {(cardModal !== "") ? <CardModal card={getCard} setCardModal={setCardModal} /> : null} 
                    </div>
                )}
            </Droppable>
        </DragDropContext>

    );
}

export default CardPreview;
