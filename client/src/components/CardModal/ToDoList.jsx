import { useState } from 'react';
// import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../../utils/mutations';
// import { useMutation } from '@apollo/client';
import { Checkbox, Progress } from 'antd';
import { CheckCircleTwoTone, DeleteTwoTone, EditOutlined } from '@ant-design/icons';

function ToDoList({ todosDB }) {

    // State
    const [todos, setTodos] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editText, setEditText] = useState('');

    // useMutations
    // const [AddToDo] = useMutation(ADD_TODO, {
    //     variables: { cardId: todosDB._id, text: },
    //     // refetchQueries: [QUERY_ONE_PROJECT, 'projectId']
    // });


    // Helper functions
    function addTodo() {
        const newArr = [...todos, { text: '', isCompleted: false }];
        setTodos(newArr);
        // TODO: Work on pushing the entire array back up to the DB.
        // AddToDo({variables: {cardId: todosDB._id, text:}})
        setEditingIndex(newArr.length - 1);
    }

    function deleteTodo(index) {
        const newArr = todos.toSpliced(index, 1);
        setTodos(newArr);
        setEditText('');
    }

    function completeTodo(index) {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    }

    function editTodo(index) {
        setEditingIndex(index);
        setEditText(todos[index].text);
    }

    function handleEditText(e) {
        setEditText(e.target.value);
    }

    function saveEditedTodo(index) {
        const newTodos = [...todos];
        newTodos[index].text = editText;
        setTodos(newTodos);
        setEditingIndex(null);
        setEditText('')
    }

    function todoProgress() {
        if (todos.length === 0) {
            return 0;
        }
        const checkedCount = todos.filter(todo => todo.isCompleted).length;
        return Math.round((checkedCount / todos.length) * 100);
    }

    // To-do props
    const listOfToDos = todosDB.toDoes
    // console.log('TODOs', listOfToDos)

    return (
        <section className='my-4'>
            <h3>ToDo List</h3>
            <Progress percent={todoProgress()} />
            <div>
                {listOfToDos.map((todo, index) => (
                    <div key={index}>
                        {editingIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={handleEditText}
                                    placeholder='todo?'
                                />
                                <CheckCircleTwoTone onClick={() => saveEditedTodo(index)} twoToneColor="#52c41a" />
                                <DeleteTwoTone onClick={() => deleteTodo(index)} twoToneColor="#eb2f96" />
                            </>
                        ) : (
                            <>
                                <Checkbox onClick={() => completeTodo(index)} checked={todo.isCompleted}>{todo.text}</Checkbox>
                                <EditOutlined onClick={() => editTodo(index)} />
                                {/* style={{color: '#949'}} */}
                            </>
                        )}
                    </div>
                ))}
            </div>
            <button onClick={addTodo} className='mt-3'>Add Item</button>
        </section>
    );
}

export default ToDoList;