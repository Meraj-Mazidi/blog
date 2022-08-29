import "./sideBar.css";
const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="/assests/userImg.jpeg" alt="AboutMe Img" className="sideImg" />
                <p className="sideCaption">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, earum!</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa fa-facebook-square" />
                    <i className="sidebarIcon fa fa-twitter-square" />
                    <i className="sidebarIcon fa fa-pinterest-square" />
                    <i className="sidebarIcon fa fa-instagram" />
                </div>
            </div>
        </div>
    );
}

export default SideBar;
