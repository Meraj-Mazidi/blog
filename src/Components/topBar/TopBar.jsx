import "./topBar.css"
import { Link } from "react-router-dom";

export default function TopBar(props) {
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa fa-facebook-square" />
                <i className="topIcon fa fa-twitter-square" />
                <i className="topIcon fa fa-pinterest-square" />
                <i className="topIcon fa fa-instagram" />

            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/" className="link" >HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/about" className="link" >ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/contact" className="link" >CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/write" className="link" >WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {props.user &&
                            <Link to="/login" className="link">LOGOUT</Link>

                        }
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    props.user ? (
                        <Link to="/settings">
                            <img src="/assests/userImg.jpeg" alt="UserImg" className="topImg" />
                        </Link>
                    ) : (
                        <ul className="topList">
                            <li className="leftLinks topListItem">
                                <Link to="/login" className="link" >LOGIN</Link>
                            </li>
                            <li className="leftLinks topListItem">
                                <Link to="/register" className="link" >REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
                <i className="topSearchIcon fa fa-search"></i>
            </div>
        </div>
    )
}
