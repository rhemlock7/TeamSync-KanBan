// import { useState } from 'react';
import { Input } from 'antd';
import {
    CloseCircleTwoTone,
    CheckCircleTwoTone,
} from '@ant-design/icons';

const { TextArea } = Input;



function CardDescription({ newDescription, description, handleDescription, UpdateCard, textAreaActive, setTextAreaActive }) {


    function displayTextArea() {
        setTextAreaActive(!textAreaActive)
    }

    return (
        <section className='my-4'>
            <h3>Description</h3>
            {textAreaActive ? (
                <form onSubmit={UpdateCard} >
                    <TextArea
                        text={newDescription}
                        onChange={handleDescription}
                        rows={1}
                    />
                    <div>
                        <button className="m-0 mr-1 p-0 border-none hover:bg-transparent" onClick={displayTextArea} ><CloseCircleTwoTone twoToneColor="#eb2f96" /></button>
                        <button className="m-0 p-0 border-none hover:bg-transparent" type="submit"><CheckCircleTwoTone twoToneColor="#52c41a" /></button>
                    </div>
                </form>
                // <div>testing</div>
            ) : (
                <p onClick={displayTextArea}>{description}</p>
            )}
        </section>
    )
}

export default CardDescription
