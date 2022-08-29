import "./setting.css";
import SideBar from "../../Components/sideBar/SideBar"

const Settings = () => {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete account
                    </span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="assests/userImg.jpeg" alt="ProfilePicture" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa fa-user-circle" />
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Meraj" />
                    <label>Email</label>
                    <input type="email" placeholder="merajmazidi@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <SideBar />
        </div>
    );
}

export default Settings;
