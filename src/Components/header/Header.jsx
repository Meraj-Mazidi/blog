import "./header.css";

const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="assests/header.jpeg" alt="HeaderImg" />
        </div>
    );
}

export default Header;
