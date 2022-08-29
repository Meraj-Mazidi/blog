import "./login.css";
import {Link} from "react-router-dom"

const Login = () => {
    return (
        <div className="login">
            <span className="loginTile">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input className="loginInput" type="text" placeholder="Enter your Email" />

                <label>Password</label>
                <input className="loginInput" type="password" placeholder="Enter your Password" />
                <button className="loginButton">Login</button>
                <button className="loginRegisterButton">
                    <Link to="/register" className="link">Register</Link>
                </button>
            </form>
        </div>
    );
}

export default Login;
