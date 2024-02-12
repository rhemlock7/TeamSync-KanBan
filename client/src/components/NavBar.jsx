import { Link } from "react-router-dom";


function NavBar() {
    return (
        <div className="flex justify-between items-center white-bg px-5 py-6">
            <div className="flex justify-between items-center">
            <Link to="/" >Home </Link>
             <Link to="/about" >About Us</Link>
            </div>
            <div className="flex justify-between items-center">
                <p className="mr-3">Username</p>
                <img alt="user profile picture" />
            </div>
        </div>
    )
}

export default NavBar;
