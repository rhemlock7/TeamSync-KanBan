import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { DatePicker, Avatar, Tooltip } from 'antd';

function MembersDate() {
    return (
        <section className='flex justify-start items center my-3'>
            <div className='mr-5'>
                <h3>Members</h3>
                <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />
                    <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                    <Tooltip title="Ant User" placement="top">
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    </Tooltip>
                    <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
                </Avatar.Group>
            </div>
            <div className='ml-6'>
                <h3>Due Date</h3>
                <DatePicker />
            </div>
        </section>
    )
}

export default MembersDate
