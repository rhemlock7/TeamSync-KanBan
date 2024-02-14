import { Avatar } from 'antd';
import { useMutation } from "@apollo/client";
import { useState } from 'react';
import { ADD_LIST } from '../utils/mutations'
import List from './List'


function ProjectContainer({ projectId, data, showDrawer }) {

    const [title, setTitle] = useState('');
    const [showInput, setShowInput] = useState(false)

    // console.log('Data', data)
    const users = data.projectId.users
    // console.log('Users', users)
    const lists = data.projectId?.lists || []

    const [AddList] = useMutation(ADD_LIST, {
        variables: { title: title, projectId: projectId },
    });

    function handleShowInput() {
        setShowInput(!showInput)
    }

    function handleSetTitle(e) {
        setTitle(e.target.value)
    }

    return (
        <div>
            <div className='flex flex-col'>
                <h1>{data.projectId.title}</h1>
                <div className='flex justify-start items-center mb-5'>
                    <button onClick={showDrawer} className='button-cta border-none text-white drop-shadow-xl'>Projects</button>
                    <button className='ml-2'>Invite Users</button>
                    <div className='ml-2 mt-1'>
                        <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                            {/* <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" /> */}
                            {users.map(user => (
                                <Avatar key={user._id} style={{ backgroundColor: '#f56a00' }}>
                                    {user.username.charAt(0).toUpperCase()}
                                </Avatar>
                            ))}
                        </Avatar.Group>
                    </div>
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
