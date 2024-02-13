import { useMutation } from "@apollo/client";
import { useState } from 'react';
import { ADD_CARD, REMOVE_LIST } from '../utils/mutations'
import {
    DeleteFilled,
    EditFilled,
    QuestionCircleOutlined
} from '@ant-design/icons';
import { Popconfirm } from 'antd';
import CardPreview from "./CardPreview";

function List({ projectId, listId, cards, title }) {

    const [showForm, setShowForm] = useState(false)
    const [cardTitle, setCardTitle] = useState('');
    const [CardDescription, setCardDescription] = useState('')

    const [AddCard] = useMutation(ADD_CARD, {
        variables: { title: cardTitle, listId: listId, description: CardDescription },
        onCompleted: (data) => {
            console.log(data);
        },
    });

    const [RemoveCard] = useMutation(REMOVE_LIST, {
        variables: { listId: listId, projectId: projectId },
        onCompleted: () => {
            this.forceUpdate()
        },
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

    // function handleListDelete() {

    // }

    return (
        <div className="text-white black-bg px-3 py-2 w-72">
            <div className='flex justify-between items-center mt-1'>
                <h3>{title}</h3>
                <button onClick={handleShowForm} className='button-cta'>New Card</button>
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
                        description="Are you sure to delete this task?"
                        icon={<QuestionCircleOutlined style={{ color: 'red' }}/>}
                        okText='Delete'
                        okType='danger'
                        onConfirm={RemoveCard}
                    >
                        <DeleteFilled />
                    </Popconfirm>
                </div>
                <div className="cursor-pointer ml-1">
                    <EditFilled />
                </div>
            </div>
        </div>
    );
}

export default List;
