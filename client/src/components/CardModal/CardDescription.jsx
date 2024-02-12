// import { useState } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

// State
// const [editText, setEditText] = useState('');
// const [description, setDescription] = useState('');

// function handleDescription () {
//     setDescription('New Description')
// }

function CardDescription() {
    
    return (
        <section className='my-4'>
            <h3>Description</h3>
            <TextArea placeholder='No description. Write one here.' rows={3} />
            {/* {description.length > 0 ? 
            (<p>{description}</p>) : 
            (<p onClick={() => handleDescription}>No Description. Click here to write a description.</p>)} */}
        </section>
    )
}

export default CardDescription
