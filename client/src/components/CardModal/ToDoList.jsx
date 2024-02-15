import {useEffect, useState} from "react";
import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from "../../utils/mutations";
import {useMutation} from "@apollo/client";
import {Checkbox, Progress} from "antd";
import {
  CheckCircleTwoTone,
  DeleteTwoTone,
  EditOutlined,
} from "@ant-design/icons";
import {GET_SINGLE_CARD, QUERY_ONE_PROJECT} from "../../utils/queries";

function ToDoList({todosDB, cardId}) {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [removeToDo] = useMutation(REMOVE_TODO, {
    refetchQueries: [GET_SINGLE_CARD, "card"],
  });
  const [AddToDo] = useMutation(ADD_TODO, {
    refetchQueries: [GET_SINGLE_CARD, "card"],
  });
  const [updateToDo] = useMutation(UPDATE_TODO, {
    refetchQueries: [GET_SINGLE_CARD, "card"],
  });
  useEffect(() => {
    setTodos(todosDB.toDoes);
  }, []);

  // Helper functions
  function addTodo() {
    AddToDo({
      variables: {cardId, text: " "},
      onCompleted: (data) => {
        setEditingIndex(todos.length);
        setTodos(data.addToDo.toDoes);
      },
    });
  }

  function deleteTodo(index) {
    const newArr = todos.toSpliced(index, 1);
    console.log(todos[index]);
    removeToDo({variables: {cardId: cardId, toDoId: todos[index]._id}});
    setTodos(newArr);
    console.log("deletodo");
    setEditText("");
  }

  function completeTodo(index) {
    const newTodos = [...todos];
    const todo = newTodos[index];
    const isCom = !newTodos[index].isCompleted;
    updateToDo({
      variables: {
        toDoId: todo._id,
        text: todo.text,
        isCompleted: isCom,
        cardId: cardId,
      },
      onCompleted: (data) => {
        // console.log(data);
        setTodos(data.updateToDo.toDoes);
      },
    });
    // const newArr = todos.toSpliced(index, 1);
    // const newTo = {
    //   _id: todo._id,
    //   text: todo.text,
    //   isCompleted: isCom,
    // };
    // newArr.push(newTo);
    // setTodos(newArr);
  }

  function editTodo(index) {
    setEditingIndex(index);
    setEditText(todos[index].text);
    console.log("edit todo");
  }

  function handleEditText(e) {
    setEditText(e.target.value);
    console.log("edit text");
  }

  function saveEditedTodo(index) {
    const newTodos = [...todos];
    const todo = newTodos[index];
    updateToDo({
      variables: {
        toDoId: todo._id,
        text: editText,
        cardId: cardId,
        isCompleted: false,
      },
      onCompleted: (data) => {
        console.log(data);
        setTodos(data.updateToDo.toDoes);
      },
    });
    // const newArr = todos.toSpliced(index, 1);
    // const newTo = {
    //   _id: todo._id,
    //   text: editText,
    //   isCompleted: todo.isCompleted,
    // };
    // newArr.push(newTo);
    // setTodos(newArr);
    setEditingIndex(null);
    setEditText("");
  }

  function todoProgress() {
    if (todos.length === 0) {
      return 0;
    }
    const checkedCount = todos.filter((todo) => todo.isCompleted).length;
    return Math.round((checkedCount / todos.length) * 100);
  }

  return (
    <section className="my-4">
      <h3>ToDo List</h3>
      <Progress percent={todoProgress()} />
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={handleEditText}
                  placeholder="todo?"
                />
                <CheckCircleTwoTone
                  onClick={() => saveEditedTodo(index)}
                  twoToneColor="#52c41a"
                />
                <DeleteTwoTone
                  onClick={() => deleteTodo(index)}
                  twoToneColor="#eb2f96"
                />
              </>
            ) : (
              <>
                <Checkbox
                  onClick={() => completeTodo(index)}
                  checked={todo.isCompleted}
                >
                  {todo.text}
                </Checkbox>
                <EditOutlined onClick={() => editTodo(index)} />
                {/* style={{color: '#949'}} */}
              </>
            )}
          </div>
        ))}
      </div>
      <button onClick={addTodo} className="mt-3">
        Add Item
      </button>
    </section>
  );
}

export default ToDoList;
