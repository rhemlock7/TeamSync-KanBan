import { useMutation } from "@apollo/client";
import { useState } from 'react';
import { ADD_CARD, REMOVE_LIST, UPDATE_LIST } from '../utils/mutations'
import { QUERY_ONE_PROJECT } from "../utils/queries";

import {
    DeleteFilled,
    CloseCircleTwoTone,
    CheckCircleTwoTone,
    QuestionCircleOutlined
} from '@ant-design/icons';
import { Popconfirm } from 'antd';
import CardPreview from "./CardPreview";

function List({ projectId, listId, cards, title }) {

    const [showForm, setShowForm] = useState(false)
    const [cardTitle, setCardTitle] = useState('');
    const [CardDescription, setCardDescription] = useState('')
    const [listTitle, setListTitle] = useState('')
    const [showListTitleForm, setShowListTitleForm] = useState(false)

    const [AddCard] = useMutation(ADD_CARD, {
        variables: { title: cardTitle, listId: listId, description: CardDescription },
        onCompleted: (data) => {
            console.log(data);
        },
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
        console.log(cardTitle)
    }

    function handleSetCardDescription(e) {
        e.preventDefault()
        setCardDescription(e.target.value)
        console.log(CardDescription)
    }

    function handleListUpdate() {
        setShowListTitleForm(!showListTitleForm)
    }

    function handleListTitleTextInput(e) {
        e.preventDefault()
        setListTitle(e.target.value)
    }

    return (
        <div className="text-white black-bg px-3 py-2 w-72">
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
                        <h3 onClick={handleListUpdate}>{title}</h3>
                        <button onClick={handleShowForm} className='button-cta'>New Card</button>
                    </div>

                )}
            </div>
            {showForm ? (
                <form onSubmit={AddCard}>
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
            <CardPreview cards={cards} />
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
            </div>
        </div>
    );
}

export default List;
