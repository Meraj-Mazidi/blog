import "./single.css";
import SideBar from "../../Components/sideBar/SideBar"
import SinglePost from "../../Components/singlePost/SinglePost"

export default function Single() {
    return (
        <div className='single'>
            <SinglePost />
            <SideBar />
        </div>
    )
}
