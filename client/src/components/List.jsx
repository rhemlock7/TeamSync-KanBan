import { useMutation } from "@apollo/client";
import { useState } from 'react';
import { ADD_CARD, REMOVE_LIST, UPDATE_LIST } from '../utils/mutations'
import { QUERY_ONE_PROJECT } from "../utils/queries";
import {
    DeleteFilled,
    CloseCircleTwoTone,
    CheckCircleTwoTone,
    QuestionCircleOutlined,
    RightCircleOutlined
} from '@ant-design/icons';
import { Popconfirm } from 'antd';
import CardPreview from "./CardPreview";

function List({ projectId, listId, cards, title }) {

    const [showForm, setShowForm] = useState(false)
    const [cardTitle, setCardTitle] = useState('');
    const [CardDescription, setCardDescription] = useState('')
    const [listTitle, setListTitle] = useState('')
    const [showListTitleForm, setShowListTitleForm] = useState(false)
    const [displayCards, setDisplayCards] = useState(true)

    const [AddCard] = useMutation(ADD_CARD, {
        variables: { title: cardTitle, listId: listId, description: CardDescription },
        refetchQueries: [QUERY_ONE_PROJECT, 'projectId']
    });

    const [RemoveList] = useMutation(REMOVE_LIST, {
        variables: { listId: listId, projectId: projectId },
        refetchQueries: [QUERY_ONE_PROJECT, 'projectId']
    });

    const [UpdateList] = useMutation(UPDATE_LIST, {
        variables: { listId: listId, title: listTitle },
        refetchQueries: [QUERY_ONE_PROJECT, 'projectId']
    });

    function handleShowForm() {
        setShowForm(!showForm)
    }

    function handleSetCardTitle(e) {
        e.preventDefault()
        setCardTitle(e.target.value)
    }

    function handleSetCardDescription(e) {
        e.preventDefault()
        setCardDescription(e.target.value)
    }

    function handleListUpdate() {
        setShowListTitleForm(!showListTitleForm)
    }

    function handleListTitleTextInput(e) {
        e.preventDefault()
        setListTitle(e.target.value)
    }

    function handleDisplayCards() {
        setDisplayCards(!displayCards)
    }

    function handleAddCard(e) {
        e.preventDefault()
        AddCard()
        setCardTitle('')
        setCardDescription('')
        setShowForm(!showForm)
    }

    return (
        <div className="text-white darkGray-bg px-3 py-2 md:w-72 w-80 my-2 h-fit">
            <div className='my-3 mb-5'>
                {showListTitleForm ? (
                    <form onSubmit={UpdateList} className="flex justify-start items-center">
                        <input className="p-1 text-black" placeholder="New List Title" type="text" value={listTitle} onChange={handleListTitleTextInput} />
                        <div className="ml-2">
                            <button className="m-0 p-0" onClick={handleListUpdate} ><CloseCircleTwoTone twoToneColor="#eb2f96" /></button>
                            <button className="m-0 p-0" type="submit"><CheckCircleTwoTone twoToneColor="#52c41a" /></button>
                        </div>
                    </form>
                ) : (
                    <div className='flex justify-between items-center -mt-1 w-full'>
                        <h3 className="cursor-pointer" onClick={handleListUpdate}>{title}</h3>
                        <button onClick={handleShowForm} className='button-cta'>New Card</button>
                    </div>

                )}
            </div>
            {showForm ? (
                <form onSubmit={handleAddCard}>
                    <div className='flex flex-col'>
                        <label>Card title?</label>
                        <input
                            type="text"
                            className="text-black p-1"
                            value={cardTitle}
                            onChange={handleSetCardTitle}
                            placeholder='Card Title'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label>Card description?</label>
                        <input
                            className="text-black p-1"
                            type="text"
                            value={CardDescription}
                            onChange={handleSetCardDescription}
                            placeholder='Card Description'
                        />
                    </div>
                    <button className='bg-white border-none text-black hover:bg-white hover:border-none hover:scale-100 hover:text-black' type="submit">Submit</button>
                </form>
            ) : <></>}
            <div className="cursor-pointer">
                {displayCards ? (
                    <CardPreview listId={listId} cards={cards} />
                ) : <></>}
            </div>

            <div className="flex">
                <div className="cursor-pointer">
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this list?"
                        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                        okText='Delete'
                        okType='danger'
                        onConfirm={RemoveList}
                    >
                        <DeleteFilled />
                    </Popconfirm>
                </div>
                <div onClick={handleDisplayCards} className="cursor-pointer ml-1">
                    <RightCircleOutlined />
                </div>
            </div>
        </div>
    );
}

export default List;
