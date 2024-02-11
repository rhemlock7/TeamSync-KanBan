import { Input } from 'antd';

const { TextArea } = Input;

function CommentSection() {
    return (
        <section className='my-4'>
            <h3>Comments</h3>
            <TextArea placeholder='Add comments here...' rows={2} />
        </section>
    )
}

export default CommentSection
