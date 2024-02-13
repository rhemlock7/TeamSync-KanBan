import { DatePicker } from 'antd';

function MembersDate() {

    const onChange = (date, dateString) => {
        console.log(dateString);
    };

    return (
        <section className='my-3'>
            <div>
                <h3>Due Date</h3>
                <DatePicker onChange={onChange} />
            </div>
        </section>
    )
}

export default MembersDate
