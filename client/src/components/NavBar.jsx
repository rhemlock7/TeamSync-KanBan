import { Switch } from 'antd';

function NavBar() {
    return (
        <div className="flex justify-between items-center white-bg px-5 py-6">
            <div className="flex justify-between items-center">
                <p className="mr-5">Members</p>
                <p>Projects</p>
            </div>
            <div className="flex justify-between items-center">
                <div className="mr-3">
                <Switch handleShadow="#EB5E28" checkedChildren="Dark" unCheckedChildren="Light" defaultChecked />
                </div>
                <p className="mr-3">Username</p>
                <img alt="user profile picture" />
            </div>
        </div>
    )
}

export default NavBar;
