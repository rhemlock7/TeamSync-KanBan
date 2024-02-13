import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Tooltip } from 'antd';
import { useMutation } from "@apollo/client";
import { useState } from 'react';
import { ADD_LIST } from '../utils/mutations'
import List from './List'


function ProjectContainer({ projectId, data }) {

    const [title, setTitle] = useState('');
    const [showInput, setShowInput] = useState(false)

    const [AddList] = useMutation(ADD_LIST, {
        variables: { title: title, projectId: projectId },
        onCompleted: (data) => {
            console.log(data);
        },
    });

    function handleShowInput() {
        setShowInput(!showInput)
    }

    function handleSetTitle(e) {
        setTitle(e.target.value)
    }

    const lists = data.projectId?.lists || []

    return (
        <div>
            <div className='flex justify-start items-center'>
                <h1>{data.projectId.title}</h1>
                <div className='ml-5 mt-2'>
                    <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
                        <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                        <Tooltip title="Ant User" placement="top">
                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        </Tooltip>
                        <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
                    </Avatar.Group>
                </div>
            </div>
            <div className="grid grid-flow-col auto-cols-max gap-x-3">
                {lists.map((list) => (
                    < List
                        title={list.title}
                        cards={list}
                        key={list._id}
                        listId={list._id}
                        projectId={projectId}
                    />
                ))}
                <div className='flex flex-col'>
                    <button onClick={handleShowInput} className='new-list-bttn'>Create a new list</button>
                    {showInput ? (
                        <form onSubmit={AddList} className='flex flex-col mt-2'>
                            <label>What is your List name?</label>
                            <input
                                type='text'
                                placeholder='list name'
                                id='list-input'
                                className='p-1'
                                value={title}
                                onChange={handleSetTitle}
                            />
                            <button type='submit'>Submit</button>
                        </form>

                    ) : <></>}
                </div>
            </div>
        </div>
    )
}

export default ProjectContainer
