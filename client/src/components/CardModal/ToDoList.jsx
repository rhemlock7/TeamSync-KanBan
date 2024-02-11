import { Checkbox, Progress } from 'antd';

function ToDoList() {
    return (
        <section className='my-4'>
            <h3>ToDo List</h3>
            <Progress percent={30} />
            <div>
                <ul>
                    <li><Checkbox>ToDo Text Here</Checkbox></li>
                    <li><Checkbox>ToDo Text Here</Checkbox></li>
                    <li><Checkbox>ToDo Text Here</Checkbox></li>
                    <li><Checkbox>ToDo Text Here</Checkbox></li>
                </ul>
                <button className='mt-3'>Add Item</button>
            </div>
        </section>
    )
}

export default ToDoList
